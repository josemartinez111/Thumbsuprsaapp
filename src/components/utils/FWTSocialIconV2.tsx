//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//               COMPONENTS > UTILS > SOCIAL-ICONS.TSX
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                       IMPORTS
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { FunctionComponent, Fragment, ReactElement } from 'react';
import { IconBaseProps } from 'react-icons';
import { BsApple, BsFillThreadsFill } from 'react-icons/bs';
import { FiFacebook, FiInstagram, FiLinkedin, FiMoon, FiYoutube } from 'react-icons/fi';
import { RiTwitterXFill } from 'react-icons/ri';
import { TbBrandTiktok } from 'react-icons/tb';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { Show } from '../../components';
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

// Define a type alias for the icon component
type IconComponentType = (props: IconBaseProps) => ReactElement;

// Interface for SocialIconOptions with optional href
export type SocialIconOptions = {
  /** Name of the icon to render from the custom type */
  icon: IconNameType;
  /** URL for the social media link. Defaults to "#" if not provided. */
  href?: string;
};

// Define a type alias for the social icon props
type SocialIconsProps = {
  /** Name of the icon to render from the custom type */
  iconName: IconNameType;
  /** URL for the social media link. Defaults to "#" if not provided. */
  href?: string;
  /** Additional CSS classes for styling */
  className?: string;
};

// Define a type for the available icons.
// Add new icon names to the type as needed.
export type IconNameType =
  | 'twitter'
  | 'youtube'
  | 'facebook'
  | 'linkedin'
  | 'instagram'
  | 'toggledarkmode'
  | 'tiktok'
  | 'apple'
  | 'threads';

//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

// Map `IconName` values to their corresponding icon components.
// Add new icons to the map as needed.
const IconMap: Record<IconNameType, IconComponentType> = {
  twitter: RiTwitterXFill,
  youtube: FiYoutube,
  facebook: FiFacebook,
  linkedin: FiLinkedin,
  instagram: FiInstagram,
  toggledarkmode: FiMoon,
  tiktok: TbBrandTiktok,
  apple: BsApple,
  threads: BsFillThreadsFill,
};

//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

/**
 * Social icon component with optional link functionality.
 *
 * @param iconName - Icon to render from IconNameType
 * @param href - Optional URL for social media link (defaults to '#')
 * @param className - Optional CSS classes
 *
 * @example
 * ```tsx
 * // Basic usage
 * <FWTSocialIconV2
 *   iconName="facebook"
 *   href="https://facebook.com"
 *   className="h-5 w-5"
 * />
 *
 * // Multiple icons
 * const socialLinks = [
 *   { icon: 'youtube', href: 'https://youtube.com' },
 *   { icon: 'facebook', href: 'https://facebook.com' },
 *   { icon: 'instagram', href: 'https://instagram.com' }
 * ];
 *
 * <div className="flex gap-4">
 *   {socialLinks.map(({icon, href}) => (
 *     <FWTSocialIconV2
 *       key={icon}
 *       iconName={icon}
 *       href={href}
 *       className="h-6 w-6"
 *     />
 *   ))}
 * </div>
 * ```
 */
export const FWTSocialIconV2: FunctionComponent<SocialIconsProps> = ({
  iconName,
  href = '#', // Provide default value for href
  className = '',
}) => {
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  // Normalize the icon name to lowercase for consistent matching
  const normalizedIconName = iconName.toLowerCase() as IconNameType;
  // Dynamically retrieve the correct icon component from the map
  const IconComponent = IconMap[normalizedIconName];

  // If no matching icon exists, render null (or a fallback if needed)
  if (!IconComponent) return null;
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  return (
    <Fragment>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
      <Show
        condition={href?.startsWith('http')}
        then={
          <a
            className={twMerge(clsx('cursor-pointer', className))}
            href={href}
            target='_blank'
            rel='noopener noreferrer'
          >
            <IconComponent className={twMerge(clsx('h-3 w-3', className))} />
          </a>
        }
        otherwise={
          <a className={twMerge(clsx('cursor-pointer', className))} href={href}>
            <IconComponent className={twMerge(clsx('h-3 w-3', className))} />
          </a>
        }
      />
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
    </Fragment>
  );
};
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
