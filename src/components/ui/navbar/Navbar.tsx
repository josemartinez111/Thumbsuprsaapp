//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                  COMPONENTS > UI > NAVBAR.TSX
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                       IMPORTS
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { FunctionComponent, Fragment } from 'react';
import { FaPhone } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
import { TransparentTruckSM } from '../../../assets';
import { FWTSocialIconV2, FWTImage, SocialIconOptions } from '../../../components';
import { useDarkModeStore } from '../../../lib';
import { ToggleDarkmodeIcons } from './ToggleDarkmodeIcons.tsx';
import clsx from 'clsx';
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

// Atom for managing sidebar state
// const sidebarAtom = atom(false);
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export const Navbar: FunctionComponent = () => {
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  // const navLinks = useNavLinks();
  const { isDarkMode, toggleDarkMode } = useDarkModeStore();
  // const [isMenuOpen, updateIsMenuOpen] = useAtom(sidebarAtom);

  // Use the IconName type directly for the array
  const socialIconsOpts: Array<SocialIconOptions> = [
    { icon: 'facebook', href: '#' },
    { icon: 'instagram', href: 'https://www.instagram.com/thumbsuproadsideassistance/?hl=en' },
    { icon: 'threads', href: '#' },
  ];

  // Navigation container classes
  const navContainerClasses = twMerge(
    clsx(
      'relative mx-auto flex h-[5rem] w-full items-center',
      'justify-between border-b border-transparent bg-transparent',
      'px-4 pt-4',
      'tablet:h-[7rem] tablet:px-8 tablet:pt-6',
    ),
  );
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

  // const handleToggleMenu = () => {
  //   updateIsMenuOpen((previousState: boolean) => !previousState);
  // };
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  return (
    <Fragment>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
      <header>
        <nav className={navContainerClasses}>
          {/* LOGO ∞∞∞ */}
          <div className='flex flex-shrink-0'>
            <a className='_o6689fn' href='/'>
              <div className='w-full'>
                {/* Show White Text in Dark Mode */}
                <FWTImage
                  src={TransparentTruckSM}
                  alt='Placeholder white'
                  className={twMerge(
                    clsx(
                      'ml-0 bg-transparent',
                      'h-14 w-auto items-center',
                      'object-contain',
                      'tablet:ml-4 tablet:h-16',
                      'desktop:h-36',
                      'hidden dark:block',
                    ),
                  )}
                />
                {/* Show Black Text in Light Mode */}
                <FWTImage
                  src={TransparentTruckSM}
                  alt='Placeholder black text'
                  className={twMerge(
                    clsx(
                      'ml-0 block h-14',
                      'w-auto bg-transparent',
                      'object-contain',
                      'tablet:ml-4 tablet:h-16',
                      'desktop:h-36',
                      'dark:hidden',
                    ),
                  )}
                />
              </div>
            </a>
          </div>
          {/* END OF LOGO ∞∞∞ */}

          {/* Right Side Group ∞∞∞ */}
          <div className='flex items-center gap-4 tablet:gap-6'>
            {/* PHONE NUMBER ∞∞∞ */}
            <div
              className={twMerge(
                clsx(
                  'inline-flex items-center gap-2', // Tighten layout and reduce gap
                  'mx-auto max-w-fit', // Ensure container is only as wide as its content
                  'text-black dark:text-snow-white',
                  'transition-colors duration-200',
                ),
              )}
            >
              <a
                href='tel:+19787733995'
                className={twMerge(
                  clsx(
                    'group inline-flex items-center gap-1', // Reduced gap between icon and text
                    'rounded-lg border', // Simplified border styling
                    'border-reggie-orange dark:border-thumbsup-yellow',
                    'px-1 py-[2px]', // Minimal padding for compact look
                    'tablet:gap-2 tablet:px-2 tablet:py-[3px]', // Adjust for tablets
                    'desktop:px-3 desktop:py-[4px]', // Adjust for desktops
                    'transition-all duration-300 hover:scale-105',
                  ),
                )}
              >
                <FaPhone
                  className={twMerge(
                    clsx(
                      'h-4 w-4 animate-pulse text-reggie-orange', // Smaller icon for mobile
                      'tablet:h-5 tablet:w-5', // Icon size for tablet
                      'desktop:h-6 desktop:w-6', // Icon size for desktop
                      'group-hover:animate-none dark:text-thumbsup-yellow',
                    ),
                  )}
                />
                <div className='flex flex-col items-start'>
                  <span
                    className={twMerge(
                      clsx(
                        'font-audiowide text-[8px] font-bold', // Very small font for "CALL NOW"
                        'tracking-wide text-reggie-orange',
                        'tablet:text-[9px] dark:text-thumbsup-yellow', // Slightly larger for tablets
                        'desktop:text-[10px]', // Slightly larger for desktops
                      ),
                    )}
                  >
                    CALL NOW
                  </span>
                  <span
                    className={twMerge(
                      clsx(
                        'text-[9px] font-medium', // Very small font for phone number
                        'group-hover:text-reggie-orange',
                        'tablet:text-[10px] dark:group-hover:text-thumbsup-yellow', // Slightly larger for tablets
                        'desktop:text-sm', // Larger font for desktops
                      ),
                    )}
                  >
                    978-773-3995
                  </span>
                </div>
              </a>
            </div>
            {/* END OF PHONE NUMBER ∞∞∞ */}

            {/* Toggle Darkmode Icons ∞∞∞ */}
            <div className='relative flex items-center'>
              <ToggleDarkmodeIcons
                onClick={toggleDarkMode}
                condition={isDarkMode}
                className={twMerge(
                  clsx(
                    'mr-8 w-10 desktop:w-10',
                    'tablet:h-10 tablet:w-10',
                    'transition-transform duration-200',
                    'hover:scale-110',
                  ),
                )}
                sunClassName='dark:text-thumbsup-yellow'
                moonClassName='text-oh-yea-blue'
              />
            </div>

            {/* SOCIAL ICONS ∞∞∞ */}
            <div className='ml-11 flex items-center gap-3 tablet:gap-4'>
              {socialIconsOpts.map(({ icon, href }: SocialIconOptions) => (
                <FWTSocialIconV2
                  key={icon}
                  iconName={icon}
                  href={href}
                  className={twMerge(
                    clsx(
                      'desktop:mr-5 desktop:w-8',
                      'text-black dark:text-snow-white',
                      'transition-colors duration-200',
                      'hover:text-reggie-orange dark:hover:text-thumbsup-yellow',
                      'tablet:h-6 tablet:w-6',
                    ),
                  )}
                />
              ))}
            </div>
          </div>
          {/* END OF SOCIAL ICONS ∞∞∞ */}
        </nav>
      </header>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
    </Fragment>
  );
};
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
