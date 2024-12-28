// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import clsx from 'clsx';
//               APP > PAGES > NOT-FOUND > NOT-FOUND.PAGE.TSX
// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                       IMPORTS
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import '@fontsource/orbitron/400.css';
import '@fontsource/orbitron/700.css';
import { twMerge } from 'tailwind-merge';
import { image404 } from '../../../assets';
import { useDarkModeStore } from '../../../lib';
// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export default function NotFoundPage() {
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  const navigate = useNavigate();
  const { isDarkMode } = useDarkModeStore();
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  return (
    <Fragment>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
      <section
        className={twMerge(
          clsx('min-h-screen bg-white dark:bg-black', isDarkMode && 'opacity-100'),
        )}
      >
        {/* Container */}
        <div
          className={twMerge(clsx('mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20'))}
        >
          {/* Component */}
          <div className='grid items-center gap-8 sm:gap-20 lg:grid-cols-2'>
            <div>
              <div className='flex flex-col items-center'>
                <div className='font-orbitron text-2xl font-bold text-indigo-500 desktop:pr-36 desktop:text-7xl'>
                  404 Error
                </div>

                <div className='mt-10 font-orbitron text-3xl font-bold md:text-5xl lg:text-6xl xl:text-7xl dark:text-snow-white'>
                  This page does not exist
                </div>

                <div className='mt-8 text-sm font-medium text-gray-400 md:text-xl lg:text-2xl'>
                  The page you are looking for could not be found.
                </div>
              </div>
              {/* Anchor link button ∞∞∞ */}
              <a
                type='button'
                onClick={() => navigate('/')}
                className={twMerge(
                  clsx(
                    'mt-6 inline-block cursor-pointer items-center bg-blue-950',
                    'rounded-md px-6 py-3 text-center font-semibold text-white',
                    'desktop:bg-blue-950 desktop:px-12',
                  ),
                )}
              >
                Back Home
              </a>
            </div>
            <div>
              <img
                src={image404}
                alt=''
                className='mx-auto inline-block h-full w-full max-w-2xl object-cover'
              />
            </div>
          </div>
        </div>
      </section>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
    </Fragment>
  );
}
// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
