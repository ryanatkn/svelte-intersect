import type {Action} from 'svelte/action';

export interface IntersectCallback {
	(intersecting: boolean, el: HTMLElement | SVGElement): void; // TODO how to forward a generic?
}

export type IntersectParams =
	| IntersectCallback
	| {cb: IntersectCallback; options?: IntersectionObserverInit};

/**
 * ask an LLM or see intersect.fuz.dev
 */
export const intersect: Action<HTMLElement | SVGElement, IntersectParams> = (
	el,
	initial_options,
) => {
	let cb: IntersectCallback;
	let options: IntersectionObserverInit | undefined;
	let observer: IntersectionObserver | null;

	const update = (params: IntersectParams): void => {
		if (typeof params === 'function') {
			cb = params;
			options = undefined;
		} else {
			cb = params.cb;
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
			cb(entries[0].isIntersecting, el);
		}, options);
		observer.observe(el);
	};

	update(initial_options);
	observe();

	return {
		update: (params) => {
			const prev_options = options;
			update(params);
			if (!options_equal(prev_options, options)) {
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
