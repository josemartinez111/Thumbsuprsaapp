// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                       FILE_PATH
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import clsx from 'clsx';
import { Atom, atom } from 'jotai';
import { useAtom } from 'jotai/index';
import { twMerge } from 'tailwind-merge';
import { useDarkModeStore, useOnMounted, useOnUnmounted, useOnUpdated } from '../../../../lib';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

// Jotai atoms for state management
const isMobileMenuOpenAtom = atom(false);
const menuElementAtom = atom<HTMLDivElement | null>(null);

// Derived atom to handle click outside the mobile menu & close button
const handleClickOutsideAtom = atom(
  (get: <TValue>(atom: Atom<TValue>) => TValue) => {
    return get(isMobileMenuOpenAtom);
  },
  (get, set, event: MouseEvent) => {
    const menuElement = get(menuElementAtom);
    const target = event.target as Element;

    // Check if click is outside menu AND not on hamburger button or its children
    if (
      menuElement &&
      !menuElement.contains(target) &&
      !target.closest('[aria-controls="mobile-menu-2"]')
    ) {
      set(isMobileMenuOpenAtom, false);
    }
  },
);

//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export function useNavbar() {
  const [isMobileMenuOpen, updateMobileMenuOpen] = useAtom(isMobileMenuOpenAtom);
  const [, updateMenuElement] = useAtom(menuElementAtom);
  const [, handleClickOutside] = useAtom(handleClickOutsideAtom);
  const { isDarkMode, toggleDarkMode } = useDarkModeStore();

  // const NAV_LINKS: Array<string> = ['Home', 'Subdomains', 'Contact Us'];

  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  // Lifecycle hook to handle updates to the mobile menu state
  useOnUpdated(() => {
    console.log(`Mobile menu is now ${isMobileMenuOpen ? 'open' : 'closed'}`);
  }, [isMobileMenuOpen]);

  // Setup click outside handler
  useOnMounted(() => {
    document.addEventListener('mousedown', handleClickOutside);
  });

  // Cleanup click outside handler
  useOnUnmounted(() => {
    document.removeEventListener('mousedown', handleClickOutside);
  });

  const contactUsBtnClasses = twMerge(
    clsx(
      'bg-gradient-to-r from-gray-700 via-pink-friday to-pink-400',
      'rounded px-2 py-1 flex items-center justify-center font-semibold', // Added flex centering
      'dark:hover:from-reggie-orange',
      'hover:from-blue-500 hover:to-gray-950',
      'hover:ease-in-out hover:duration-500 active:opacity-25 focus:outline-none',
      'tablet:px-4',
      'tablet:ml-auto',
      'desktop:ml-auto desktop:px-8 desktop:py-2',
      'cursor-pointer',
    ),
  );

  const btnTextClasses = twMerge(
    clsx(
      'text-white text-[0.475rem] desktop:text-[1rem]',
      'font-semibold',
      'tablet:text-[0.675rem]',
      'transform transition hover:scale-105',
    ),
  );

  // Base and conditional classes for nav links
  const linkBaseClasses = 'block py-2 pl-3 pr-4';

  const homeClasses = twMerge(
    clsx(
      'rounded bg-dark-navy-blue text-white desktop:bg-transparent',
      'desktop:p-0 desktop:text-blue-500 dark:text-white',
    ),
  );
  const otherClasses = twMerge(
    clsx(
      'border-b border-gray-100 text-gray-700 hover:text-pink-friday',
      'desktop:border-0 desktop:p-0 desktop:hover:bg-transparent',
      'desktop:hover:text-blue-500 dark:border-gray-700 dark:text-gray-400',
      'dark:hover:bg-dark-navy-blue dark:hover:text-white',
      'desktop:dark:hover:bg-transparent desktop:dark:hover:text-blue-500',
    ),
  );

  const navLinkULClasses = twMerge(
    clsx(
      'mt-4 flex flex-col space-y-3 font-medium',
      ' desktop:mt-0 desktop:flex-row desktop:space-x-8 desktop:space-y-0',
    ),
  );

  return {
    isMobileMenuOpen,
    updateMobileMenuOpen,
    updateMenuElement,
    isDarkMode,
    toggleDarkMode,
    contactUsBtnClasses,
    btnTextClasses,
    linkBaseClasses,
    homeClasses,
    otherClasses,
    navLinkULClasses,
  };
}
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
