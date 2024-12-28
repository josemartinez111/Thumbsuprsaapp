// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//               LIB > STORES - USE_DARKMODE_STORE.TS
// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { useOnMounted, useOnUnmounted, useOnUpdated } from '../../lib';
// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

/**
 * The `atomWithStorage` function creates an atom with a value persisted
 * in localStorage or sessionStorage for React or AsyncStorage for React Native.
 * ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
 * Create atom outside of the hook to prevent recreation on each render
 */
const darkModeStorage = atomWithStorage(
  'darkMode',
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-color-scheme: dark)').matches
    : false,
);
// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export function useDarkModeStore() {
  const [isDarkMode, updateIsDarkMode] = useAtom(darkModeStorage);

  // MediaQueryList for detecting system theme changes
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  // Mount: Initialize the theme and add event listeners
  useOnMounted(() => {
    // Initial DOM update
    document.documentElement.classList.toggle('dark', isDarkMode);

    // Listener for system theme changes
    const handleChange = (ev: MediaQueryListEvent) => {
      updateIsDarkMode(ev.matches); // Update state
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  });

  // Unmount: Clean up event listeners
  useOnUnmounted(() => {
    mediaQuery.removeEventListener('change', () => {});
  });

  // Update DOM when `isDarkMode` changes & track changes when `updateIsDarkMode` is called
  useOnUpdated(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode, updateIsDarkMode]);

  // Toggle dark mode manually
  const toggleDarkMode = () => {
    updateIsDarkMode((prevValue) => {
      document.documentElement.classList.toggle('dark', !prevValue); // Update DOM
      return !prevValue; // Update state
    });
  };

  return {
    isDarkMode,
    toggleDarkMode,
  };
}
// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
