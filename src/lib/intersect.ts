import type {Action} from 'svelte/action';

export interface IntersectCallback {
	(intersecting: boolean, el: HTMLElement | SVGElement): void; // TODO how to forward a generic?
}

// TODO name, `IntersectParamsOptions` isn't great
export interface IntersectParamsOptions {
	cb: IntersectCallback;
	count?: number;
	options?: IntersectionObserverInit;
}

export type IntersectParams = IntersectCallback | IntersectParamsOptions;

/**
 * ask an LLM or see intersect.fuz.dev
 */
export const intersect: Action<HTMLElement | SVGElement, IntersectParams> = (
	el,
	initial_params,
) => {
	let cb: IntersectCallback;
	let count: number | undefined;
	let options: IntersectionObserverInit | undefined;
	let observer: IntersectionObserver | null;
	let intersections: number;

	// what about not firing on the `!intersecting`? it's weird that it will fire false sometimes twice, sometimes once

	const update = (params: IntersectParams): void => {
		intersections = 0;
		if (typeof params === 'function') {
			cb = params;
			count = undefined;
			options = undefined;
		} else {
			cb = params.cb;
			count = params.count;
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
			const intersecting = entries[0].isIntersecting;
			console.log(`isIntersecting`, intersecting);
			cb(intersecting, el);
			if (intersecting) {
				intersections++;
			}
			// when leaving the viewport, check if it's done
			if (!intersecting && count && intersections >= count) {
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
			// diff to see if we need to re-recreate the IntersectionObserver
			const prev_count = count; // I think resetting on this condition is the better UX?
			const prev_options = options;
			update(params);
			if (prev_count !== count || !options_equal(prev_options, options)) {
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
