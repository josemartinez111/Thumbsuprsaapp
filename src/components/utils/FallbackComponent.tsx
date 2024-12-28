//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//       COMPONENTS > UTILS >> SKELETON-WHEN-LOADING.TSX
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                       IMPORTS
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { FunctionComponent, Fragment } from 'react';
import { twMerge } from 'tailwind-merge';
import { EL } from '../../lib';
import clsx from 'clsx';
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export const FallbackComponent: FunctionComponent<{ className?: string }> = ({
  className = EL.STR_EMPTY,
}) => {
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

  const headerSkeletons = [
    { className: 'mx-auto h-2 w-48' },
    { className: 'mx-auto mt-4 h-2 w-64' },
    { className: 'mx-auto mt-4 h-2 w-64 sm:w-80' },
  ];

  const cardSkeleton = {
    image: 'h-64 w-full rounded-lg bg-gray-300 dark:bg-gray-600',
    title: 'mt-4 h-2 w-56 rounded-lg bg-gray-200 dark:bg-gray-700',
    subtitle: 'mt-4 h-2 w-24 rounded-lg bg-gray-200 dark:bg-gray-700',
  };
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  return (
    <Fragment>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
      <section className={twMerge(clsx('bg-snow-white dark:bg-black', className))}>
        <div className='container mx-auto animate-pulse px-6 py-10'>
          {headerSkeletons.map((skeleton, index) => (
            <div
              key={index}
              className={twMerge(
                skeleton.className,
                'rounded-lg bg-gray-200 dark:bg-gray-700',
              )}
            />
          ))}

          <div className='mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:mt-12 xl:grid-cols-4 xl:gap-12'>
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className='w-full'>
                <div className={cardSkeleton.image} />
                <div className={cardSkeleton.title} />
                <div className={cardSkeleton.subtitle} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
    </Fragment>
  );
};
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
