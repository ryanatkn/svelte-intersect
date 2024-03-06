import type {Action} from 'svelte/action';

export interface Intersect_Params {
	/**
	 * Called when the element enters or leaves the viewport until disconnected.
	 */
	onintersect?: On_Intersect;
	/**
	 * Called when the action's observer is disconnected,
	 * either by the user calling disconnect or the action being destroyed.
	 */
	ondisconnect?: On_Disconnect;
	/**
	 * pass `1` to disconnect after `el` enters and leaves the viewport one time,
	 * similar to 'once' for an event - disable the callback with `0`,
	 * and never disconnect with `undefined` or a negative number like `-1`
	 */
	count?: number;
	/**
	 * Same as the `options` param to
	 * [`IntersectionObserver`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#options)
	 */
	options?: IntersectionObserverInit;
}

export type Intersect_Params_Or_Callback = On_Intersect | Intersect_Params;

// TODO how to forward generic `el` type?
export const intersect: Action<HTMLElement | SVGElement, Intersect_Params_Or_Callback> = (
	el,
	initial_params,
) => {
	let onintersect: On_Intersect | undefined;
	let ondisconnect: On_Disconnect | undefined;
	let count: number | undefined;
	let options: IntersectionObserverInit | undefined;
	let intersecting: boolean;
	let intersections: number;
	let observer: IntersectionObserver | null;

	const set_params = (params: Intersect_Params_Or_Callback): void => {
		// TODO not sure about this? should there be a `reset` API?
		intersections = 0;
		if (typeof params === 'function') {
			onintersect = params;
			ondisconnect = undefined;
			count = undefined;
			options = undefined;
		} else {
			onintersect = params.onintersect;
			ondisconnect = params.ondisconnect;
			count = params.count;
			options = params.options;
		}
	};
	const disconnect = (): void => {
		if (!observer) return;
		observer.disconnect();
		if (ondisconnect) {
			ondisconnect(to_disconnect_state(intersecting, intersections, el, observer));
		}
		observer = null;
	};
	const observe = (): void => {
		if (observer) {
			disconnect();
			observer = null;
		}
		if (count === 0) return; // disable when `count` is `0`, no need to create the observer
		observer = new IntersectionObserver((entries) => {
			intersecting = entries[0].isIntersecting;
			if (onintersect && observer) {
				onintersect(to_intersect_state(intersecting, intersections, el, observer, disconnect));
			}
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

export interface On_Intersect {
	(state: Intersect_State): void; // TODO how to forward generic `el` type?
}

export interface Intersect_State {
	intersecting: boolean;
	intersections: number;
	el: HTMLElement | SVGElement;
	observer: IntersectionObserver;
	disconnect: () => void;
}

const global_intersect_state: Intersect_State = {
	intersecting: undefined as any,
	intersections: undefined as any,
	el: undefined as any,
	observer: undefined as any,
	disconnect: undefined as any,
};

let get_intersect_state = (): Intersect_State => global_intersect_state;

/**
 * Sets the getter for an empty `Intersect_State` object.
 * By default a global instance is reused.
 * @param get_state
 */
export const set_get_intersect_state = (get_state: () => Intersect_State): void => {
	get_intersect_state = get_state;
};

export const to_intersect_state = (
	intersecting: boolean,
	intersections: number,
	el: HTMLElement | SVGElement,
	observer: IntersectionObserver,
	disconnect: () => void,
): Intersect_State => {
	const s = get_intersect_state();
	s.intersecting = intersecting;
	s.intersections = intersections;
	s.el = el;
	s.observer = observer;
	s.disconnect = disconnect;
	return s;
};

export interface On_Disconnect {
	(state: Disconnect_State): void; // TODO how to forward generic `el` type?
}

export interface Disconnect_State {
	intersecting: boolean;
	intersections: number;
	el: HTMLElement | SVGElement;
	observer: IntersectionObserver;
}

const global_disconnect_state: Disconnect_State = {
	intersecting: undefined as any,
	intersections: undefined as any,
	el: undefined as any,
	observer: undefined as any,
};

let get_disconnect_state = (): Disconnect_State => global_disconnect_state;

/**
 * Sets the getter for an empty `Disconnect_State` object.
 * By default a global instance is reused.
 * @param get_state
 */
export const set_get_disconnect_state = (get_state: () => Disconnect_State): void => {
	get_disconnect_state = get_state;
};

export const to_disconnect_state = (
	intersecting: boolean,
	intersections: number,
	el: HTMLElement | SVGElement,
	observer: IntersectionObserver,
): Disconnect_State => {
	const s = get_disconnect_state(); // TODO maybe make this configurable to be immutable
	s.intersecting = intersecting;
	s.intersections = intersections;
	s.el = el;
	s.observer = observer;
	return s;
};
