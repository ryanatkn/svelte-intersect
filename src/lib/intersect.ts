import type {Action} from 'svelte/action';

export interface IntersectCallback {
	(intersecting: boolean, el: HTMLElement | SVGElement): void; // TODO how to forward a generic?
}

export type IntersectParams =
	| IntersectCallback
	| {cb: IntersectCallback; once?: boolean; options?: IntersectionObserverInit};

/**
 * ask an LLM or see intersect.fuz.dev
 */
export const intersect: Action<HTMLElement | SVGElement, IntersectParams> = (
	el,
	initial_params,
) => {
	let cb: IntersectCallback;
	let once = false;
	let options: IntersectionObserverInit | undefined;
	let observer: IntersectionObserver | null;
	let intersected = false;

	const update = (params: IntersectParams): void => {
		if (typeof params === 'function') {
			cb = params;
			once = false;
			options = undefined;
		} else {
			cb = params.cb;
			once = params.once ?? false;
			options = params.options;
		}
	};
	const cleanup = (): void => {
		if (!observer) return;
		observer.disconnect();
		observer = null;
	};
	const observe = (): void => {
		if (observer) cleanup();
		observer = new IntersectionObserver((entries) => {
			const {isIntersecting} = entries[0];
			cb(isIntersecting, el);
			if (!intersected && isIntersecting) {
				intersected = true;
			}
			if (once && intersected && !isIntersecting) {
				console.log('CLEANED UP DONE');
				cleanup();
			}
		}, options);
		observer.observe(el);
	};

	update(initial_params);
	observe();

	return {
		update: (params) => {
			const prev_once = once; // I think resetting on this condition is the better UX?
			const prev_options = options;
			update(params);
			if (prev_once !== once || !options_equal(prev_options, options)) {
				observe();
			}
		},
		destroy: cleanup,
	};
};

const options_equal = (
	a: IntersectionObserverInit | undefined,
	b: IntersectionObserverInit | undefined,
): boolean => {
	if (a === b) return true;
	if (!a || !b) return false;
	return a.root === b.root && a.rootMargin === b.rootMargin && a.threshold === b.threshold;
};
