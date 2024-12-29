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
 * Renders a responsive social icons component with optional links.
 *
 * This component displays a set of social media icons that dynamically adjust
 * their size and layout based on the viewport (mobile, tablet, and desktop).
 * - On **tablet** and larger screens: the icons are visible in a horizontal row.
 * - On **mobile**: the icons are hidden.
 *
 * @remarks
 * - The `socialIconsOpts` array specifies which icons to display and their
 *   optional link URLs. Each entry should be an object with the following
 *   properties:
 *     - `icon`: (string) A valid `IconName` as defined in the type exported
 *       from the icon utilities.
 *     - `href` (optional string): The URL for the social media link.
 *       Defaults to "#" if not provided.
 *
 * - The `SocialIcons` component automatically handles consistent styling, so no
 *   additional options or overrides are needed for individual icons.
 *
 * @example
 * ```tsx
 * // Interface for SocialIconOptions with optional href
 * interface SocialIconOptions {
 *   icon: IconNameType;
 *   href?: string;
 * }
 *
 * // Usage with the interface
 * const socialIconsOpts: Array<SocialIconOptions> = [
 *   { icon: 'youtube', href: '[invalid URL removed]' },
 *   { icon: 'facebook', href: '[https://www.facebook.com/yourpage](https://www.facebook.com/yourpage)' },
 *   { icon: 'instagram', href: '[invalid URL removed]' },
 *   { icon: 'tiktok', href: '[https://www.tiktok.com/@yourusername](https://www.tiktok.com/@yourusername)' },
 *   { icon: 'threads', href: '[invalid URL removed]' },
 * ];
 *
 * <div
 *   className={twMerge(
 *     clsx(
 *       'hidden items-center gap-2 pl-16 text-black tablet:flex',
 *       'tablet:gap-6 desktop:gap-8',
 *     ),
 *   )}
 * >
 *   {socialIconsOpts.map((iconObj) => (
 *     <SocialIcons
 *       key={iconObj.icon}
 *       iconName={iconObj.icon}
 *       href={iconObj.href} // Pass href from the object
 *       className={twMerge(
 *         clsx(
 *           'w-3 text-black',
 *           'tablet:h-6 tablet:w-6 desktop:w-6',
 *           'dark:text-snow-white',
 *         ),
 *       )}
 *     />
 *   ))}
 * </div>
 * ```
 *
 * @types
 * - `IconName`: Defines all valid icon names for the `SocialIcons` component.
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
      <a
        className={twMerge(clsx('cursor-pointer', className))}
        href={href}
        target='_blank' // Add target="_blank" for new tab
        rel='noopener noreferrer' // Add rel for security best practices
      >
        <IconComponent className={twMerge(clsx('h-3 w-3', className))} />
      </a>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
    </Fragment>
  );
};
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
