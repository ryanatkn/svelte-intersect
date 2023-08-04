import type {Action} from 'svelte/action';

export interface IntersectCallback {
	(visible: boolean, el: Element): void; // TODO how to forward the `Element` type?
}

export type IntersectParams =
	| IntersectCallback
	| {cb: IntersectCallback; options: IntersectionObserverInit};

export const intersect: Action<Element, IntersectParams> = (el, initial) => {
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

	update(initial);
	observe();

	return {
		update: (params) => {
			const prev = options;
			update(params);
			if (!equal(prev, options)) {
				observe();
			}
		},
		destroy: cleanup,
	};
};

const equal = (
	a: IntersectionObserverInit | undefined,
	b: IntersectionObserverInit | undefined,
): boolean => {
	if (a === b) return true;
	if (!a || !b) return false;
	return a.root === b.root && a.rootMargin === b.rootMargin && a.threshold === b.threshold;
};
