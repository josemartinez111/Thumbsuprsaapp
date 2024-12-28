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

// Define a type for the available icons
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

// Map `IconName` values to their corresponding icon components
// Map `IconName` values to their corresponding icon components
const IconMap: Record<IconNameType, (props: IconBaseProps) => ReactElement> = {
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

// Props for the SocialIcons component
type SocialIconsProps = {
  /** Name of the icon to render from the custom type */
  iconName: IconNameType;
  /** Additional CSS classes for styling */
  className?: string;
};

//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
/**
 * Renders a responsive social icons component.
 *
 * This component displays a set of social media icons that dynamically adjust
 * their size and layout based on the viewport (mobile, tablet, and desktop).
 * - On **tablet** and larger screens: the icons are visible in a horizontal row.
 * - On **mobile**: the icons are hidden.
 *
 * @remarks
 * - The `socialIconsOpts` array specifies which icons to display. Each entry must
 *   be a valid `IconName` as defined in the type exported from the icon utilities.
 * - The `SocialIcons` component automatically handles consistent styling, so no
 *   additional options or overrides are needed for individual icons.
 *
 * @example
 * ```tsx
 * // Should infer the type IconNameType
 * const socialIconsOpts: Array<IconNameType> = [
 *   'youtube',
 *   'facebook',
 *   'instagram',
 *   'tiktok',
 *   'threads',
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
 *   {socialIconsOpts.map((icon: IconNameType) => (
 *     <SocialIcons
 *       key={icon}
 *       iconName={icon}
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
export const SocialIcons: FunctionComponent<SocialIconsProps> = ({
  iconName,
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
      <div className={twMerge(clsx('cursor-pointer', className))}>
        <IconComponent className={twMerge(clsx('h-3 w-3', className))} />
      </div>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
    </Fragment>
  );
};
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
