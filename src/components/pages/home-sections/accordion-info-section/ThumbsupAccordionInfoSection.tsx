//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//    COMPONENTS > PAGES > HOME-SECTIONS > ACCORDION-INFO-SECTION
//    >> THUMBSUP-ACCORDION-INFO-SECTION.TSX
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                       IMPORTS
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { FunctionComponent, Fragment } from 'react';
import { atom, useAtom } from 'jotai';
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

type AccordionOptions = {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
};
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

// Jotai atoms for accordion state
const accordionStateAtoms = [
  atom(false), // For question 1
  atom(false), // For question 2
  atom(false), // For question 3
  atom(false), // For question 4
];
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export const ThumbsupAccordionInfoSection: FunctionComponent = () => {
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  const [isOpen1, setIsOpen1] = useAtom(accordionStateAtoms[0]);
  const [isOpen2, setIsOpen2] = useAtom(accordionStateAtoms[1]);
  const [isOpen3, setIsOpen3] = useAtom(accordionStateAtoms[2]);
  const [isOpen4, setIsOpen4] = useAtom(accordionStateAtoms[3]);

  const toggleAccordion = (index: number) => {
    switch (index) {
      case 0:
        setIsOpen1(!isOpen1);
        break;
      case 1:
        setIsOpen2(!isOpen2);
        break;
      case 2:
        setIsOpen3(!isOpen3);
        break;
      case 3:
        setIsOpen4(!isOpen4);
        break;
      default:
        break;
    }
  };

  const ACCORDION_INFO: Array<AccordionOptions> = [
    {
      question: 'How can I get started?',
      answer:
        "Getting started is easy! Sign up for an account, and you'll have access to our platform's features. No credit card required for the initial signup.",
      isOpen: isOpen1,
      toggle: () => toggleAccordion(0),
    },
    {
      question: 'What is the pricing structure?',
      answer:
        'Our pricing structure is flexible. We offer both free and paid plans. You can choose the one that suits your needs and budget.',
      isOpen: isOpen2,
      toggle: () => toggleAccordion(1),
    },
    {
      question: 'What kind of support do you provide?',
      answer:
        'We offer comprehensive customer support. You can reach out to our support team through various channels, including email, chat, and a knowledge base.',
      isOpen: isOpen3,
      toggle: () => toggleAccordion(2),
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer:
        'Yes, you can cancel your subscription at any time without any hidden fees. We believe in providing a hassle-free experience for our users.',
      isOpen: isOpen4,
      toggle: () => toggleAccordion(3),
    },
  ];
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  return (
    <Fragment>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
      <section className='relative z-10 bg-transparent py-10 sm:py-16 lg:py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl dark:text-white'>
              Explore Common Questions
            </h2>
          </div>
          <div className='mx-auto mt-8 max-w-3xl space-y-4 md:mt-16'>
            {ACCORDION_INFO.map((accordion: AccordionOptions, index: number) => (
              <div
                key={index}
                className='cursor-pointer border border-gray-200 bg-white shadow-lg transition-all duration-200 hover:bg-gray-50'
              >
                <button
                  type='button'
                  onClick={accordion.toggle}
                  className='flex w-full items-center justify-between px-4 py-5 sm:p-6'
                >
                  <span className='flex text-lg font-semibold text-black'>
                    {accordion.question}
                  </span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    className={`h-6 w-6 text-gray-400 transition-transform ${
                      accordion.isOpen ? 'rotate-0' : '-rotate-180'
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
                {accordion.isOpen && (
                  <div className='px-4 pb-5 text-black sm:px-6 sm:pb-6'>
                    <p>{accordion.answer}</p>
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
