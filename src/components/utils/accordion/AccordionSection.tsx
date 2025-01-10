//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//            COMPONENTS > UTILS > ACCORDION-SECTION.TSX
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                       IMPORTS
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { FunctionComponent, Fragment } from 'react';
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

type AccordionItemOptions = {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
};

type AccordionSectionProps = {
  title: string;
  items: Array<AccordionItemOptions>;
};
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export const AccordionSection: FunctionComponent<AccordionSectionProps> = ({
  title,
  items,
}) => {
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  return (
    <Fragment>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
      <section className='relative bg-transparent py-10 sm:py-16 lg:py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl dark:text-white'>
              {title}
            </h2>
          </div>
          <div className='mx-auto mt-8 max-w-3xl space-y-4 md:mt-16'>
            {items.map((item, index) => (
              <div
                key={index}
                className='cursor-pointer border border-gray-200 shadow-lg backdrop-blur-sm transition-all duration-200'
              >
                <button
                  type='button'
                  onClick={item.toggle}
                  className='flex w-full items-center justify-between px-4 py-5 sm:p-6'
                >
                  <span className='flex text-lg font-semibold text-black dark:text-white'>
                    {item.question}
                  </span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className={`h-6 w-6 text-gray-400 transition-transform ${
                      item.isOpen ? 'rotate-0' : '-rotate-180'
                    }`}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M19 9l-7 7-7-7'
                    />
                  </svg>
                </button>
                {item.isOpen && (
                  <div className='bg-transparent px-4 pb-5 font-semibold sm:px-6 sm:pb-6 dark:text-white'>
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className='textbase mt-9 text-center font-semibold text-gray-600 dark:text-white'>
            Still have questions?{' '}
            <span className='text-tertiary hover:text-tertiary focus:text-tertiary hover-underline cursor-pointer font-medium transition-all duration-200'>
              Contact us by filling out the form above
            </span>
          </p>
        </div>
      </section>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
    </Fragment>
  );
};
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
