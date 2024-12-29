//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//    COMPONENTS > PAGES > HOME-SECTIONS > HERO-FORM-SECTION.TSX
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                       IMPORTS
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { FunctionComponent, Fragment } from 'react';
import { IconType } from 'react-icons';
import { FaThreads } from 'react-icons/fa6';
import { GrLocation } from 'react-icons/gr';
import { IoIosPhonePortrait } from 'react-icons/io';
import { MdOutlineMailOutline } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { FWTSocialIconV2, IconNameType } from '../../../utils/FWTSocialIconV2.tsx';
import { Show } from '../../../utils/Show.tsx';
import { ContactForm, FormFieldOptions } from './ContactForm.tsx';
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

type CustomIconType = {
  type: 'custom';
  name: IconNameType; // Using imported type
  href: string;
};

type ReactIconType = {
  type: 'react';
  Icon: IconType;
  href: string;
};

type SocialIconOptions = CustomIconType | ReactIconType;
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export const HeroFormSection: FunctionComponent = () => {
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  const SOCIAL_ICONS: SocialIconOptions[] = [
    {
      type: 'custom',
      name: 'facebook',
      href: '#',
    },
    {
      type: 'custom',
      name: 'instagram',
      href: 'https://www.instagram.com/thumbsuproadsideassistance/?hl=en',
    },
    {
      type: 'react',
      Icon: FaThreads,
      href: '#',
    },
  ];

  const FORM_FIELDS: Array<FormFieldOptions> = [
    {
      type: 'text',
      placeholder: 'Name',
      required: true,
      minLength: 2,
    },
    {
      type: 'tel',
      placeholder: 'Phone',
      required: true,
      pattern: '[0-9+]+',
      title: 'Please enter only numbers and + symbol',
    },
    {
      type: 'text',
      placeholder: 'Address',
      required: true,
      autoComplete: 'address-line1',
    },
  ];
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  return (
    <Fragment>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
      <div
        className={twMerge(
          clsx(
            'relative z-10', // Add positioning and z-index
            'mx-auto mt-6', // Margin classes
            'max-w-6xl max-lg:max-w-3xl', // Width constraints
            'rounded-lg', // Border styles
            'bg-black', // Background color
          ),
        )}
      >
        <div className='grid items-center gap-14 p-4 font-[sans-serif] sm:p-8 lg:grid-cols-2'>
          {/* LEFT SIDE OF THE FORM SECTION ∞∞∞ */}
          <div className='space-y-16'>
            {/* New Heading */}
            <h1 className='text-4xl font-bold tracking-wider text-reggie-orange tablet:text-5xl desktop:text-6xl'>
              Thumbs Up
              <span className='block text-2xl font-medium tracking-wide text-white tablet:text-3xl desktop:text-4xl'>
                Roadside Assistance
              </span>
            </h1>

            {/* Subheading */}
            <h3 className='mt-4 text-base font-semibold text-white tablet:text-lg desktop:text-xl'>
              Are you Safe & Out of Danger
            </h3>

            {/* Supporting Text */}
            <p className='mt-2 text-sm font-semibold leading-relaxed text-gray-300 tablet:text-base desktop:text-lg'>
              Stuck and need help? Provide us with a little information and one of our Service
              Technicians will be right out to help.
            </p>

            {/* Business contact info left side ∞∞∞ */}
            <ul className='mt-12 space-y-8'>
              {/* EMAIL INFO LEFT SIDE ∞∞∞ */}
              <li className='flex items-center'>
                <MdOutlineMailOutline />
                <a
                  href='mailto:thumbsuprsa@gmail.com'
                  className='ml-4 text-sm font-semibold text-white tablet:text-base desktop:text-lg'
                >
                  thumbsuprsa@gmail.com
                </a>
              </li>

              {/* PHONE INFO LEFT SIDE ∞∞∞ */}
              <li className='flex items-center'>
                <IoIosPhonePortrait />
                <a
                  href='tel:+19787733995'
                  className='ml-4 text-sm font-semibold text-white tablet:text-base desktop:text-lg'
                >
                  978-773-3995
                </a>
              </li>

              {/* LOCATION INFO LEFT SIDE ∞∞∞ */}
              <li className='flex items-center'>
                <GrLocation />
                <a
                  href='https://www.google.com/maps/search/?api=1&query=Lawrence+MA+01843'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='ml-4 text-sm font-semibold text-white tablet:text-base desktop:text-lg'
                >
                  Lawrence MA 01843
                </a>
              </li>
            </ul>

            {/* Social media icons left side ∞∞∞ */}
            <ul className='mt-12 flex cursor-pointer space-x-4'>
              {SOCIAL_ICONS.map((social: CustomIconType | ReactIconType) => (
                <li
                  key={social.href}
                  className={twMerge(
                    clsx(
                      'flex h-10 w-10 shrink-0 items-center',
                      'justify-center rounded-full bg-reggie-orange',
                      'hover:bg-thumbsup-yellow',
                    ),
                  )}
                >
                  <a href={social.href}>
                    <Show
                      condition={social.type === 'custom'}
                      then={
                        social.type === 'custom' && (
                          <FWTSocialIconV2
                            iconName={social.name}
                            className='h-5 w-5 text-white'
                          />
                        )
                      }
                      otherwise={
                        social.type === 'react' && (
                          <social.Icon className='h-5 w-5 text-white' />
                        )
                      }
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Contact Form */}
          <ContactForm formFieldOpts={FORM_FIELDS} />
        </div>
      </div>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
    </Fragment>
  );
};
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
