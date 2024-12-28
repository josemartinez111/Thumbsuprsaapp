// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//            COMPONENTS > UI > NAVBAR > DROPDOWN.TSX
// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                       IMPORTS
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { Fragment, FunctionComponent } from 'react';
import { X as LucidCloseBtn } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { FWTImage, SubdomainNavLinks, useSideBarNav } from '../../../components';
import {  ThanosTransparent } from '../../../assets';
import { atom, useAtom } from 'jotai';
import { useDarkModeStore, useOnMounted, useOnUpdated } from '../../../lib';
import { NavLinkType } from '../../../router/router-composables-hooks/useNavLinks.ts';
import { ToggleDarkmodeIcons } from './ToggleDarkmodeIcons.tsx';
import clsx from 'clsx';
// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

interface DropdownProps {
  navLinks: Array<NavLinkType>;
  isDarkmode: boolean;
  toggleDarkMode: () => void;
  isOpen: boolean;
  onClose: () => void;
}
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

// Global state for the menu open state
const isVisibleAtom = atom(false);
const expandedSubmenuAtom = atom<string | null>(null);
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export const SideBarNav: FunctionComponent<DropdownProps> = ({
  navLinks,
  isDarkmode,
  toggleDarkMode,
  isOpen,
  onClose,
}) => {
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  const { isDarkMode } = useDarkModeStore();

  const {
    dropdownRef,
    handleClose,
    sidebarNavContainerClasses,
    sidebarClasses,
    setIsVisible,
  } = useSideBarNav({ state: isVisibleAtom, onClose });

  const [expandedSubmenu, updateExpandedSubmenu] = useAtom(expandedSubmenuAtom);
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  // Set the visibility of the dropdown when `isOpen`
  // changes & keeps track of the state of isOpen
  useOnUpdated(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  // Handle outside click and `Escape` key press
  useOnMounted(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    // Handle the `Escape` key press
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    // Add event listeners when the component is mounted
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      // Remove event listeners when the component is unmounted
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  });
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

  return (
    <Fragment>
      {/* Backdrop Overlay */}
      <div className={sidebarNavContainerClasses} onClick={handleClose} />

      {/* Sliding Panel */}
      <div ref={dropdownRef} className={sidebarClasses}>
        <div className='h-full overflow-y-auto'>
          {/* Header */}
          <div className='flex items-center justify-between p-4'>
            <div className='flex items-center space-x-3'>
              <FWTImage
                src={ThanosTransparent}
                alt='Placeholder avatar'
                className='hidden h-8 w-8 rounded-full p-2 ring-1 ring-white tablet:h-10 tablet:w-10 dark:block'
              />

              {/* Show Black Text in Light Mode */}
              <FWTImage
                src={ThanosTransparent}
                alt='Placeholder avatar'
                className='h-8 w-8 rounded-full p-2 ring-1 ring-black tablet:h-10 tablet:w-10 dark:hidden dark:ring-white'
              />
              <h2 className='text-xl font-bold text-gray-900 dark:text-white'>Menu</h2>
            </div>
            {/* CLOSE X BUTTON ICON ∞∞∞ */}
            <button
              onClick={handleClose}
              className={twMerge(
                clsx(
                  'rounded-lg bg-gray-100 p-2',
                  'text-gray-500 transition-colors',
                  'hover:bg-gray-200 dark:bg-gray-700',
                  'dark:text-gray-400 dark:hover:bg-gray-600',
                ),
              )}
            >
              <LucidCloseBtn className='h-6 w-6' />
            </button>
          </div>

          <hr className='border-t border-gray-200 dark:border-gray-700' />

          {/* Dark Mode Toggle */}
          <div className='flex items-center justify-between p-4'>
            {/* DARKMODE TOGGLE TEXT ∞∞∞ */}
            <span className='text-sm font-semibold text-gray-600 dark:text-gray-300'>
              {isDarkmode ? 'Dark Mode' : 'Light Mode'}
            </span>

            {/* Toggle Darkmode Icons ∞∞∞ */}
            <ToggleDarkmodeIcons
              onClick={toggleDarkMode}
              condition={isDarkMode}
              className='ml-[0.75rem] scale-75 desktop:w-auto desktop:scale-100'
              sunClassName='text-oh-yea-blue-light'
              moonClassName='text-netflix-red'
            />
          </div>

          {/* Subdomain Navigation Dropdown */}
          <SubdomainNavLinks
            navLinks={navLinks}
            handleClose={handleClose}
            updateExpandedSubmenu={updateExpandedSubmenu}
            expandedSubmenu={expandedSubmenu}
          />
        </div>
      </div>
    </Fragment>
  );
};
// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
