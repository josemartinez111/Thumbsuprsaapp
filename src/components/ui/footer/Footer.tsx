//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//               COMPONENTS > UI > FOOTER > FOOTER.TSX
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                       IMPORTS
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { FunctionComponent, Fragment } from 'react';
import { IconType } from 'react-icons';
import { BsThreadsFill } from 'react-icons/bs';
import { FaRegCopyright } from 'react-icons/fa';
import { LuFacebook, LuInstagram } from 'react-icons/lu';
import { useDarkModeStore } from '../../../lib';
import { ToggleFWTLogo } from '../../../components';
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export type SocialMediaOptions = {
  href: string;
  icon: IconType;
  label: string;
};
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export const Footer: FunctionComponent = () => {
  // ⚫️ Social Media Links
  const SOCIAL_MEDIA: Array<SocialMediaOptions> = [
    { href: '#', icon: LuFacebook, label: 'Facebook' },
    {
      href: 'https://www.instagram.com/thumbsuproadsideassistance/?hl=en',
      icon: LuInstagram,
      label: 'Instagram',
    },
    { href: '#', icon: BsThreadsFill, label: 'Threads' },
  ];

  // ⚫️ Navigation Links
  // const NAV_LINKS = [
  //   {
  //     section: 'Company',
  //     links: ['About', 'Meet the Team', 'History', 'Careers'],
  //   },
  //   {
  //     section: 'Services',
  //     links: [
  //       '1on1 Coaching',
  //       'Company Review',
  //       'Accounts Review',
  //       'HR Consulting',
  //       'SEO Optimisation',
  //     ],
  //   },
  //   {
  //     section: 'Helpful Links',
  //     links: ['Contact', 'FAQs', 'Live Chat'],
  //   },
  //   {
  //     section: 'Legal',
  //     links: ['Privacy Policy', 'Terms & Conditions', 'Returns Policy', 'Accessibility'],
  //   },
  // ];
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  const { isDarkMode } = useDarkModeStore();
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  return (
    <Fragment>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
      <footer className='relative z-10 bg-gray-100 dark:bg-black dark:text-snow-white'>
        <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
            {/* Logo and Socials */}
            <div>
              <ToggleFWTLogo isDarkmode={isDarkMode} />
              <p className='mt-4 max-w-xs text-sm font-semibold text-gray-600'>
                THUMBS_UP_RSA_ASSISTANCE
              </p>
              <div className='mt-8 flex items-center justify-start space-x-4 text-gray-600 dark:text-snow-white'>
                {SOCIAL_MEDIA.map(({ href, icon: Icon, label }: SocialMediaOptions) => (
                  <a
                    key={label}
                    className='hover:opacity-75'
                    href={href}
                    target='_blank'
                    rel='noreferrer'
                    aria-label={label}
                  >
                    <Icon className='h-6 w-6' />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            {/*<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4'>*/}
            {/*  {NAV_LINKS.map(({ section, links }) => (*/}
            {/*    <div key={section}>*/}
            {/*      <p className='font-medium'>{section}</p>*/}
            {/*      <nav className='mt-4 flex flex-col space-y-2 text-sm text-gray-500'>*/}
            {/*        {links.map((link) => (*/}
            {/*          <a key={link} className='hover:opacity-75' href='#'>*/}
            {/*            {link}*/}
            {/*          </a>*/}
            {/*        ))}*/}
            {/*      </nav>*/}
            {/*    </div>*/}
            {/*  ))}*/}
            {/*</div>*/}
          </div>

          {/* Copyright Section */}
          <div className='mt-8 flex items-center space-x-2 dark:text-snow-white'>
            <FaRegCopyright className='text-gray-800 dark:text-snow-white' />
            <p className='text-xs font-semibold text-gray-800 dark:text-snow-white'>
              FantumWave Tech 2024. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
    </Fragment>
  );
};
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
