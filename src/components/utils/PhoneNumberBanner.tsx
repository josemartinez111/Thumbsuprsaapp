//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import clsx from 'clsx';
//                         PATH
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                       IMPORTS
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { FunctionComponent, Fragment } from 'react';
import { FaPhone } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export const PhoneNumberBanner: FunctionComponent<{
  href: string;
  className?: string;
  phoneNumber: string;
}> = ({ href, className, phoneNumber }) => {
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  return (
    <Fragment>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
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
          href={`tel:+1${href}`}
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
                  className,
                ),
              )}
            >
              {phoneNumber}
            </span>
          </div>
        </a>
      </div>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
    </Fragment>
  );
};
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
