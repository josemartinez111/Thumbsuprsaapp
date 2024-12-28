// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//      index.ts for all router in this directory
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

/* lib: router */
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
// global-router-composables-hooks->route
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
export * from './global-composables-hooks/useSocialMediaMetadata';
export * from './global-composables-hooks/useGradient';
export * from './global-composables-hooks/useAnimatedScrolling';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
// utils->route
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
export * from './utils/use-try-catch';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
// ⚫️ fantumwave-hooks->route
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
// Exporting the namespace
export * from './global-composables-hooks/fantumwave-hooks/FantumWave';

// Directly exporting individual static hooks
export {
	useOnMounted,
	useOnUnmounted,
	useOnUpdated,
	useComputed,
} from './global-composables-hooks/fantumwave-hooks/FantumWave';

// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
// stores->route
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
export * from './stores/UseDarkmodeStore';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
// types->route
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
// export type { CustomClass } from './types/CustomTypes';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
// constants->route
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
export { Constants as EL } from './constants/constants';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
// constants->route
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
export { HTTP_STATUS as ST } from './utils/status-codes';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
