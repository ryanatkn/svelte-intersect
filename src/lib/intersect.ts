import type {Action} from 'svelte/action';

export interface IntersectCallback {
	(intersecting: boolean, el: HTMLElement | SVGElement, disconnect: () => void): void; // TODO how to forward generic `el` type?
}

export interface IntersectParams {
	cb: IntersectCallback;
	count?: number;
	options?: IntersectionObserverInit;
}

export type IntersectParamsOrCallback = IntersectCallback | IntersectParams;

// TODO how to forward generic `el` type?
export const intersect: Action<HTMLElement | SVGElement, IntersectParamsOrCallback> = (
	el,
	initial_params,
) => {
	let cb: IntersectCallback;
	let count: number | undefined;
	let options: IntersectionObserverInit | undefined;
	let intersections: number;
	let observer: IntersectionObserver | null;

	const set_params = (params: IntersectParamsOrCallback): void => {
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
	const disconnect = (): void => {
		if (!observer) return;
		observer.disconnect();
		observer = null;
	};
	const observe = (): void => {
		if (observer) disconnect();
		observer = new IntersectionObserver((entries) => {
			const intersecting = entries[0].isIntersecting;
			cb(intersecting, el, disconnect);
			if (intersecting) {
				// track each the count of times it enters the viewport
				intersections++;
			} else {
				// when leaving the viewport, check if it's done
				if (count && intersections >= count) {
					disconnect();
				}
			}
		}, options);
		observer.observe(el);
	};

	set_params(initial_params);
	observe();

	return {
		update: (params) => {
			set_params(params);
			observe();
		},
		destroy: disconnect,
	};
};
