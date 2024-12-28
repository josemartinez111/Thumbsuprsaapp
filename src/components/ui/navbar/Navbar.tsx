//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                  COMPONENTS > UI > NAVBAR.TSX
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                       IMPORTS
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { FunctionComponent, Fragment } from 'react';
import { FiMenu } from 'react-icons/fi';
import { twMerge } from 'tailwind-merge';
import { ThanosTransparent } from '../../../assets';
import { FWTSocialIconV2, FWTImage, SocialIconOptions } from '../../../components';
import { useDarkModeStore } from '../../../lib';
import { useNavLinks } from '../../../router/router-composables-hooks/useNavLinks.ts';
import { SideBarNav } from './SideBarNav.tsx';
import { ToggleDarkmodeIcons } from './ToggleDarkmodeIcons.tsx';
import clsx from 'clsx';
import { atom, useAtom } from 'jotai';
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

// Atom for managing sidebar state
const sidebarAtom = atom(false);
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export const Navbar: FunctionComponent = () => {
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  const navLinks = useNavLinks();
  const { isDarkMode, toggleDarkMode } = useDarkModeStore();
  const [isMenuOpen, updateIsMenuOpen] = useAtom(sidebarAtom);

  // Use the IconName type directly for the array
  const socialIconsOpts: Array<SocialIconOptions> = [
    { icon: 'youtube', href: '#' },
    { icon: 'facebook', href: '#' },
    { icon: 'instagram', href: '#' },
    { icon: 'tiktok', href: '#' },
    {
      icon: 'threads',
      href: '#',
    },
  ];

  const navContainerClasses = twMerge(
    clsx(
      'relative mx-auto pt-6 flex h-[7rem] w-full items-center',
      ' justify-between border-b border-transparent bg-transparent px-8',
    ),
  );
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

  const handleToggleMenu = () => {
    updateIsMenuOpen((previousState: boolean) => !previousState);
  };
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  return (
    <Fragment>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
      <header>
        <nav className={navContainerClasses}>
          {/* LOGO ∞∞∞ */}
          <div className='inline-flex'>
            <a className='_o6689fn' href='/'>
              {/* Dark/Light text logo toggle ∞∞∞ */}
              <div className='md:block'>
                {/* Show White Text in Dark Mode */}
                <FWTImage
                  src={ThanosTransparent}
                  alt='Placeholder white'
                  className='ml-[1.2rem] bg-transparent items-center mb-3 hidden h-12 w-auto object-contain tablet:h-16 desktop:h-24 dark:block'
                />
                {/* Show Black Text in Light Mode */}
                <FWTImage
                  src={ThanosTransparent}
                  alt='Placeholder black text'
                  className='ml-[1.2rem] bg-transparent mb-3 block h-12 w-auto object-contain tablet:h-16 desktop:h-24 dark:hidden'
                />
              </div>
            </a>
          </div>
          {/* END OF LOGO ∞∞∞ */}

          {/* SOCIAL ICONS ∞∞∞ */}
          <div
            className={twMerge(
              clsx(
                'hidden items-center gap-2 pl-16 text-black tablet:flex',
                'tablet:gap-6 desktop:gap-8',
              ),
            )}
          >
            {socialIconsOpts.map(({ icon, href }: SocialIconOptions) => (
              <FWTSocialIconV2
                key={icon}
                iconName={icon}
                href={href} // Pass href from the object
                className={twMerge(
                  clsx(
                    'w-3 text-black',
                    'tablet:h-6 tablet:w-6 desktop:w-6',
                    'dark:text-snow-white',
                  ),
                )}
              />
            ))}
          </div>
          {/* END OF SOCIAL ICONS ∞∞∞ */}

          {/* Hamburger Button and Toggle Icons ∞∞∞ */}
          <div className='flex-initial'>
            <div
              className={twMerge(
                clsx(
                  'relative ml-32 flex items-center',
                  'justify-end space-x-2',
                  'active:opacity-10',
                ),
              )}
            >
              {/* Toggle Darkmode Icons ∞∞∞ */}
              <ToggleDarkmodeIcons
                onClick={toggleDarkMode}
                condition={isDarkMode}
                className='ml-[0.75rem] scale-75 desktop:w-auto desktop:scale-100'
                sunClassName='text-oh-yea-blue-light'
                moonClassName='text-netflix-red'
              />

              {/* Hamburger Button */}
              <button
                type='button'
                className={twMerge(
                  clsx(
                    'flex scale-75 items-center rounded-full border px-5 py-1 hover:shadow-lg',
                    'border-black dark:border-white',
                  ),
                )}
                onClick={handleToggleMenu}
              >
                {/* Hamburger Icon */}
                <FiMenu className='w-11 text-current desktop:h-5 desktop:w-5 dark:text-snow-white' />

                {/* Optional Logo/Image */}
                <div className='ml-3'>
                  {/* Show this only in dark mode */}
                  <FWTImage
                    src={ThanosTransparent}
                    alt='Placeholder white'
                    className='hidden h-[2.5rem] w-auto object-contain desktop:h-[3.5rem] dark:block'
                  />

                  {/* Show this only in light mode */}
                  <FWTImage
                    src={ThanosTransparent}
                    alt='Placeholder black'
                    className='block h-[2.5rem] w-auto object-contain desktop:h-[3.5rem] dark:hidden'
                  />
                </div>
              </button>
            </div>
          </div>
          {/* END LOGIN ∞∞∞ */}
        </nav>
      </header>
      {/* Sidebar navigation */}
      <SideBarNav
        navLinks={navLinks}
        isDarkmode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        isOpen={isMenuOpen}
        onClose={() => updateIsMenuOpen(false)}
      />
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
    </Fragment>
  );
};
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
