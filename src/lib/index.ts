import type {Action} from 'svelte/action';

export interface Intersect_Callback {
	(intersecting: boolean, el: HTMLElement | SVGElement, disconnect: () => void): void; // TODO how to forward generic `el` type?
}

export interface Intersect_Params {
	/**
	 * Called when the element enters or leaves the viewport.
	 */
	cb: Intersect_Callback;
	/**
	 * A value of 0 disables the callback,
	 * less than 0 or undefined makes the callback get called every time,
	 * and greater than 1 disconnects after being triggered that many times.
	 */
	count?: number;
	/**
	 * Same as the `options` param to `IntersectionObserver`.
	 */
	options?: IntersectionObserverInit;
}

export type Intersect_Params_Or_Callback = Intersect_Callback | Intersect_Params;

// TODO how to forward generic `el` type?
export const intersect: Action<HTMLElement | SVGElement, Intersect_Params_Or_Callback> = (
	el,
	initial_params,
) => {
	let cb: Intersect_Callback;
	let count: number | undefined;
	let options: IntersectionObserverInit | undefined;
	let intersections: number;
	let observer: IntersectionObserver | null;

	const set_params = (params: Intersect_Params_Or_Callback): void => {
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
		if (count === 0) return; // disable when `count` is `0`, no need to create the observer
		observer = new IntersectionObserver((entries) => {
			const intersecting = entries[0].isIntersecting;
			cb(intersecting, el, disconnect);
			if (intersecting) {
				// track each the count of times it enters the viewport
				intersections++;
			} else {
				// when leaving the viewport, check if it's done
				if (count && count > 0 && intersections >= count) {
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
