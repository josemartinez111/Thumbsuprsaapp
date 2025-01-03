//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//    COMPONENTS > PAGES > HOME-SECTIONS > HERO-FORM-SECTION.TSX
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                       IMPORTS
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { FunctionComponent, Fragment } from 'react';
import { GrLocation } from 'react-icons/gr';
import { IoIosPhonePortrait } from 'react-icons/io';
import { MdOutlineMailOutline } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { thumbsupTextLogoCombo } from '../../../../assets';
import { FWTImage, FWTSocialIconV2, IconNameType } from '../../../../components';
import { ContactForm, FormFieldOptions } from './ContactForm.tsx';
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

type SocialIconType = {
  href: string;
  iconName: IconNameType;
  className?: string;
};
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export const HeroFormSection: FunctionComponent = () => {
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  const SOCIAL_ICONS: Array<SocialIconType> = [
    { href: '/*', iconName: 'facebook', className: 'h-5 w-5' },
    {
      href: 'https://www.instagram.com/thumbsuproadsideassistance/?hl=en',
      iconName: 'instagram',
      className: 'h-5 w-5',
    },
    { href: '/*', iconName: 'threads', className: 'h-5 w-5' },
  ];

  const FORM_FIELDS: Array<FormFieldOptions> = [
    {
      name: 'fullName',
      type: 'text',
      placeholder: 'Full Name',
      required: true,
      minLength: 2,
      autoComplete: 'name',
    },
    {
      name: 'phoneNumber',
      type: 'tel',
      placeholder: 'Phone Number',
      required: true,
      pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}',
      title: 'Format: 123-456-7890',
      autoComplete: 'tel',
    },
    {
      name: 'currentLocation',
      type: 'text',
      placeholder: 'Current Location (Address)',
      required: true,
      autoComplete: 'street-address',
    },
    {
      name: 'vehicleYear',
      type: 'text',
      placeholder: 'Vehicle Year',
      required: true,
      pattern: '[0-9]{4}',
      title: 'Enter 4-digit year',
    },
    { name: 'vehicleMake', type: 'text', placeholder: 'Vehicle Make', required: true },
    { name: 'vehicleModel', type: 'text', placeholder: 'Vehicle Model', required: true },
    { name: 'vehicleColor', type: 'text', placeholder: 'Vehicle Color', required: true },
    {
      name: 'licensePlateNumber',
      type: 'text',
      placeholder: 'License Plate Number',
      required: true,
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
        <div className='grid h-full items-start gap-14 p-4 font-[sans-serif] sm:p-8 lg:grid-cols-2'>
          {/* LEFT SIDE OF THE FORM SECTION ∞∞∞ */}
          <div className='space-y-8'>
            {/* New Heading LOGO IMAGE */}
            <div className='flex justify-start'>
              <FWTImage
                src={thumbsupTextLogoCombo}
                alt='Thumbs Up Roadside Assistance'
                className='h-[21rem] w-auto tablet:h-[27rem] desktop:h-[24rem]'
              />
            </div>

            {/* Subheading */}
            <h3 className='text-base font-semibold text-white tablet:text-lg desktop:text-xl'>
              Are you Safe & Out of Danger?
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
              {SOCIAL_ICONS.map(({ href, iconName, className }) => (
                <li
                  key={iconName}
                  className={twMerge(
                    clsx(
                      'flex h-10 w-10 shrink-0 items-center justify-center',
                      'rounded-full bg-reggie-orange hover:bg-thumbsup-yellow',
                      'focus:ring-2 focus:ring-thumbsup-yellow',
                    ),
                  )}
                >
                  <FWTSocialIconV2 href={href} iconName={iconName} className={className} />
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
