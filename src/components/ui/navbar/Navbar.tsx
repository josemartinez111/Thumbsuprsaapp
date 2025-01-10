//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                  COMPONENTS > UI > NAVBAR.TSX
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                       IMPORTS
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { FunctionComponent, Fragment } from 'react';
import { twMerge } from 'tailwind-merge';
import { TransparentTruckSM } from '../../../assets';
import {
  FWTSocialIconV2,
  FWTImage,
  SocialIconOptions,
  PhoneNumberBanner,
} from '../../../components';
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
            {/* PHONE NUMBER BANNER COMPONENT ∞∞∞ */}
            <PhoneNumberBanner href='9787733995' phoneNumber='978-773-3995' />

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
