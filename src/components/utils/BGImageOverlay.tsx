//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//          COMPONENTS > UTILS > BG-IMAGE-OVERLAY.TSX
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                       IMPORTS
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { FunctionComponent, Fragment } from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

type OverlayOption =
  | '0'
  | '5'
  | '10'
  | '20'
  | '25'
  | '30'
  | '40'
  | '50'
  | '60'
  | '70'
  | '75'
  | '80'
  | '90'
  | '95'
  | '100';

type BGImageOverlayProps = {
  srcImage: string;
  className?: string;
  overlayOpacity?: OverlayOption; // More type-safe
  zIndex?: number;
};
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export const BGImageOverlay: FunctionComponent<BGImageOverlayProps> = ({
  srcImage,
  className,
  overlayOpacity = '50', // Default opacity
  zIndex = -1,
}) => {
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  const overlayOptions = {
    'dark:bg-black/0': overlayOpacity === '0',
    'dark:bg-black/5': overlayOpacity === '5',
    'dark:bg-black/10': overlayOpacity === '10',
    'dark:bg-black/20': overlayOpacity === '20',
    'dark:bg-black/25': overlayOpacity === '25',
    'dark:bg-black/30': overlayOpacity === '30',
    'dark:bg-black/40': overlayOpacity === '40',
    'dark:bg-black/50': overlayOpacity === '50',
    'dark:bg-black/60': overlayOpacity === '60',
    'dark:bg-black/70': overlayOpacity === '70',
    'dark:bg-black/75': overlayOpacity === '75',
    'dark:bg-black/80': overlayOpacity === '80',
    'dark:bg-black/90': overlayOpacity === '90',
    'dark:bg-black/95': overlayOpacity === '95',
    'dark:bg-black/100': overlayOpacity === '100',
  };
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  return (
    <Fragment>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
      <div
        className={twMerge(
          clsx('fixed inset-0 h-full min-h-screen w-full', 'block', className),
        )}
        style={{ zIndex }}
      >
        <div className='relative h-full w-full'>
          <img
            src={srcImage}
            alt='Background'
            className={twMerge(
              clsx(
                'h-[75vh] w-full object-cover',
                'object-top tablet:h-auto tablet:min-h-full',
                'tablet:scale-105',
                'hidden dark:block',
                'relative',
              ),
            )}
            style={{
              imageRendering: '-webkit-optimize-contrast',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0) scale(1.02)',
              willChange: 'transform',
            }}
          />
          {/* Dark overlay */}
          <div
            className={twMerge(
              clsx(
                'absolute inset-0',
                'pointer-events-none',
                'hidden dark:block',
                overlayOptions,
              ),
            )}
          />
        </div>
      </div>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
    </Fragment>
  );
};
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
