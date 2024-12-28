// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                        HOME.PAGE.TSX
// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                       IMPORTS
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { Fragment } from 'react';
import { FaRegPaperPlane } from 'react-icons/fa';
import { FaThreads } from 'react-icons/fa6';
import { GrLocation } from 'react-icons/gr';
import { IoIosPhonePortrait } from 'react-icons/io';
import { MdOutlineMailOutline } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { FWTSocialIconV2 } from '../../../../components';
// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export default function HomePage() {
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

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
          <div>
            <h1 className='text-4xl font-bold text-white'>Are you Safe & Out of Danger</h1>
            <p className='mt-4 text-sm leading-relaxed text-gray-300'>
              Stuck and need help? Provide us with a little information and one of our Service
              Technicians will be right out to help
            </p>

            {/* Business contact info left side ∞∞∞ */}
            <ul className='mt-12 space-y-8'>
              {/* EMAIL INFO LEFT SIDE ∞∞∞ */}
              <li className='flex items-center'>
                <MdOutlineMailOutline />
                <a href='mailto:thumbsuprsa@gmail.com' className='ml-4 text-sm text-white'>
                  thumbsuprsa@gmail.com
                </a>
              </li>

              {/* PHONE INFO LEFT SIDE ∞∞∞ */}
              <li className='flex items-center'>
                <IoIosPhonePortrait />
                <a href='tel:+19787733995' className='ml-4 text-sm text-white'>
                  978-773-3995
                </a>
              </li>

              {/* LOCATION INFO LEFT SIDE ∞∞∞ */}
              <li className='flex items-center'>
                <GrLocation />
                {/* 
                TODO: For an address link, you can use Google Maps with an encoded URL.
                Here's how to make it open Google Maps with that location: 
                */}
                <a
                  href='https://www.google.com/maps/search/?api=1&query=Lawrence+MA+01843'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='ml-4 text-sm text-white'
                >
                  Lawrence MA 01843
                </a>
              </li>
            </ul>

            {/* Social media icons left side ∞∞∞ */}
            <ul className='mt-12 flex cursor-pointer space-x-4'>
              {/* FACEBOOK ICON LINK ∞∞∞ */}
              <li className='flex h-10 w-10 items-center justify-center rounded-full bg-reggie-orange hover:bg-thumbsup-yellow'>
                <a href='javascript:void(0)'>
                  <FWTSocialIconV2 iconName='facebook' className='h-5 w-5' />
                </a>
              </li>
              {/* INSTAGRAM ICON LINK ∞∞∞ */}
              <li className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-reggie-orange hover:bg-thumbsup-yellow'>
                <a href='javascript:void(0)'>
                  <FWTSocialIconV2 iconName='instagram' className='h-5 w-5' />
                </a>
              </li>
              {/* THREADS ICON LINK ∞∞∞ */}
              <li className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-reggie-orange hover:bg-thumbsup-yellow'>
                <a href='javascript:void(0)'>
                  <FaThreads className='h-5 w-5 text-white' />
                </a>
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE OF THE FORM SECTION ∞∞∞ */}
          <div className='rounded-lg bg-gray-100 p-6'>
            <p className='text-sm font-semibold text-gray-800'>I'm interested in...</p>

            {/* Form Buttons top right side ∞∞∞ */}
            <div className='space-y-4 max-lg:mt-4'>
              <button
                type='button'
                className={twMerge(
                  clsx(
                    'transition-opacity hover:text-white active:opacity-10',
                    'mr-4 rounded-lg border-2 bg-thumbsup-yellow',
                    'px-4 py-2 text-sm font-semibold tracking-wider',
                    'text-gray-950 outline-none hover:bg-reggie-orange',
                  ),
                )}
              >
                Fix a flat tire
              </button>
              <button
                type='button'
                className={twMerge(
                  clsx(
                    'transition-opacity hover:text-white active:opacity-10',
                    'mr-4 rounded-lg border-2 bg-thumbsup-yellow',
                    'px-4 py-2 text-sm font-semibold tracking-wider',
                    'text-gray-950 outline-none hover:bg-reggie-orange',
                  ),
                )}
              >
                Fill gas tank
              </button>
              <button
                type='button'
                className={twMerge(
                  clsx(
                    'transition-opacity hover:text-white active:opacity-10',
                    'mr-4 rounded-lg border-2 bg-thumbsup-yellow',
                    'px-4 py-2 text-sm font-semibold tracking-wider',
                    'text-gray-950 outline-none hover:bg-reggie-orange',
                  ),
                )}
              >
                Jump start
              </button>
            </div>

            {/* Contact form right side ∞∞∞ */}
            <form className='mt-8 cursor-pointer space-y-4'>
              <input
                type='text'
                placeholder='Name'
                required
                minLength={2}
                className='w-full rounded-lg px-4 py-3 text-sm text-gray-800'
              />
              <input
                type='tel'
                placeholder='Phone'
                required
                pattern='[0-9+]+'
                title='Please enter only numbers and + symbol'
                className='w-full rounded-lg px-4 py-3 text-sm text-gray-800'
              />
              <input
                type='text'
                placeholder='Subject'
                required
                className='w-full rounded-lg px-4 py-3 text-sm text-gray-800'
              />
              <textarea
                placeholder='Message'
                required
                minLength={10}
                rows={6}
                className='w-full rounded-lg px-4 pt-3 text-sm text-gray-800'
              ></textarea>
              <button
                type='submit'
                className='!mt-6 flex w-full items-center justify-center rounded-lg bg-thumbsup-dark px-4 py-3 text-sm tracking-wide text-white hover:bg-[#a91079e2]'
              >
                <FaRegPaperPlane className='mr-2 w-6 font-semibold' />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
    </Fragment>
  );
}
// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
