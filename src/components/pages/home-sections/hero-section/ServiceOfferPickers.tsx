//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//    COMPONENTS > PAGES > HOME-SECTIONS
//    >> SERVICE-OFFER-PICKERS.TSX
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                       IMPORTS
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { FunctionComponent, Fragment, ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';
import { ContactForm, FormFieldOptions } from './ContactForm.tsx';
import clsx from 'clsx';
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

type ServiceOfferPickersProps = {
  formFieldOpts: Array<FormFieldOptions>;
  formCallback: (field: FormFieldOptions, index: number) => ReactElement;
};
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export const ServiceOfferPickers: FunctionComponent<ServiceOfferPickersProps> = ({
  formFieldOpts,
  formCallback,
}) => {
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  return (
    <Fragment>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
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
        <ContactForm formFieldOpts={formFieldOpts} formCallback={formCallback} />
      </div>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
    </Fragment>
  );
};
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
