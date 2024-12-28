// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
// LIB > GLOBAL-COMPOSABLES-HOOKS > STValueATValueIC-HOOKS
// >> FANTValueUMWAVE.TValueS
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { atom, useAtom } from 'jotai';
import { useEffect, useMemo } from 'react';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export class FantumWave {
	/**
	 * Executes a callback when the component is mounted.
	 */
	static useOnMounted(callback: () => void): void {
		useEffect(() => {
			callback();
		}, []);
	}
	
	/**
	 * Executes a callback when the component is unmounted.
	 */
	static useOnUnmounted(callback: () => void): void {
		useEffect(() => {
			return () => {
				callback();
			};
		}, []);
	}
	
	/**
	 * Executes a callback whenever specified dependencies are updated.
	 */
	static useOnUpdated<TValue>(
		callback: (dependencies: Array<TValue>) => void,
		dependencies: Array<TValue>,
	): void {
		useEffect(() => {
			callback(dependencies);
		}, dependencies);
	}
	
	/**
	 * Creates a derived (computed) state based on a calculation function.
	 */
	static useComputed<TValue>(computeFn: () => TValue, dependencies: Array<TValue>): TValue {
		const computedAtom = useMemo(() => atom(computeFn()), dependencies);
		
		const [computedValue] = useAtom(computedAtom);
		return computedValue;
	}
}
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

/** ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 * Individual exports of the static methods as standalone functions
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 * The bind() method of Function  instances creates a new function that,
 * when called, calls `this` function with its this keyword set to the
 * provided value, and a given sequence of arguments preceding any provided
 * when the new function is called.
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 * EXAMPLE IMPORT STYLE IN A INDEX.TS FILE:
 *
 * fantumwave-hooks->route
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 * // Exporting the namespace
 * export * from './global-router-composables-hooks-hooks/fantumwave-hooks/FantumWave';
 *
 * // Directly exporting individual static hooks
 * export {
 *   useOnMounted,
 *   useOnUnmounted,
 *   useOnUpdated,
 *   useComputed,
 * } from './global-router-composables-hooks-hooks/fantumwave-hooks/FantumWave';
 * */
export const useOnMounted = FantumWave.useOnMounted.bind(FantumWave);
export const useOnUnmounted = FantumWave.useOnUnmounted.bind(FantumWave);
export const useOnUpdated = FantumWave.useOnUpdated.bind(FantumWave);
export const useComputed = FantumWave.useComputed.bind(FantumWave);
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
