//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//               COMPONENTS > UTILS > QWT_IMAGE.TSX
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                       IMPORTS
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { FunctionComponent, Fragment, Suspense } from 'react';
import { useOnUpdated } from '../../lib';
import { atom, useAtom } from 'jotai';
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

/**
 * An image component that handles loading states and responsive behavior.
 *
 * @description
 * This component handles images in two ways:
 * 1. Priority images: Images marked as priority load immediately when the page loads.
 *    Use this for images that appear in the initial viewport (what users see without scrolling).
 *    Example: Main banner images, hero section images.
 *
 * 2. Regular images: Images that load when they get close to the viewport while scrolling.
 *    This saves bandwidth and improves page load time.
 *    Example: Images further down the page in a feed or gallery.
 *
 * @props
 * src: The URL of the image to display
 * alt: Description of the image for accessibility
 * width: Optional fixed width in pixels or CSS units (e.g., 300 or "300px")
 * height: Optional fixed height in pixels or CSS units (e.g., 200 or "200px")
 * className: Additional CSS classes. Default makes image responsive
 * priority: If true, loads image immediately instead of waiting
 *
 * @example
 * // Main banner image - loads immediately
 * <Image
 *   src="/banner.jpg"
 *   alt="Welcome banner"
 *   priority
 *   className="w-full h-[600px] object-cover"
 * />
 *
 * @example
 * // Gallery image - loads when scrolled near
 * <Image
 *   src="/gallery/photo.jpg"
 *   alt="Gallery photo"
 *   className="w-64 h-64 rounded-lg"
 * />
 *
 * @example
 * // Profile image with fixed dimensions
 * <Image
 *   src="/profile.jpg"
 *   alt="User profile"
 *   width={40}
 *   height={40}
 *   className="rounded-full"
 * />
 */
type FIMageProps = {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  priority?: boolean;
};

// Atom to hold dimensions
export const dimensionsAtom = atom({
  width: '',
  height: '',
});
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export const FWTImage: FunctionComponent<FIMageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
}) => {
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  // Access and update the dimensions state from Jotai atom
  const [dimensions, updateDimensions] = useAtom(dimensionsAtom);

  // Update dimensions whenever width or height changes
  useOnUpdated(() => {
    updateDimensions({
      width: typeof width === 'number' ? `${width}px` : width || '',
      height: typeof height === 'number' ? `${height}px` : height || '',
    });
  }, [width, height]);
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  return (
    <Fragment>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
      <Suspense
        fallback={
          <div className={`animate-pulse bg-gray-200 ${className}`} style={dimensions} />
        }
      >
        <img
          src={src}
          alt={alt}
          width={dimensions.width}
          height={dimensions.height}
          loading={priority ? 'eager' : 'lazy'}
          className={className}
        />
      </Suspense>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
    </Fragment>
  );
};
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
