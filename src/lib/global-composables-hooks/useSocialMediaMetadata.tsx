// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//        LIB > COMPOSABLES > USE_SOCIAL_MEDIA_METADATA.TS
// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { ReactElement } from 'react';
// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

/**
 * Valid social media platforms supported by the metadata generator.
 * Used to ensure type safety when specifying platforms for meta-tag generation.
 */
type SupportedPlatform = 'facebook' | 'instagram' | 'twitter' | 'linkedin';

/**
 * Configuration for each social media platform's meta-tag requirements.
 * @property prefix - The prefix used in meta tag names (e.g., 'og' for Open Graph)
 * @property nameAttribute - Whether platform uses 'name' or 'property' attribute
 * @property extraMeta - Additional platform-specific meta tags (e.g., Twitter card type)
 */
interface PlatformConfig {
  prefix: string;
  nameAttribute: string;
  extraMeta?: Record<string, string>;
}

/**
 * Props for generating social media metadata.
 * @property siteUrl - Base URL of the website
 * @property title - Title for meta tags
 * @property description - Description for meta tags
 * @property path - Optional path to append to siteUrl
 * @property image - Optional social media preview image URL
 * @property type - Content type (website, article, or profile)
 * @property platforms - Array of social platforms to generate meta-tags for
 */
interface SocialMetadataProps {
  siteUrl: string;
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  platforms: SupportedPlatform[];
}
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

const PLATFORM_CONFIGS: Record<SupportedPlatform, PlatformConfig> = {
  facebook: {
    prefix: 'og',
    nameAttribute: 'property',
  },
  instagram: {
    prefix: 'og',
    nameAttribute: 'property',
  },
  twitter: {
    prefix: 'twitter',
    nameAttribute: 'name',
    extraMeta: { card: 'summary_large_image' },
  },
  linkedin: {
    prefix: 'linkedin',
    nameAttribute: 'name',
  },
};
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export const useSocialMediaMetadata = ({
  siteUrl,
  title,
  description,
  path = '',
  image,
  type = 'website',
  platforms,
}: SocialMetadataProps): ReactElement[] => {
  const url = `${ siteUrl }${ path }`;
  
  return platforms.flatMap(platform => {
    const config = PLATFORM_CONFIGS[ platform ];
    const { prefix, nameAttribute, extraMeta } = config;
    
    const baseTags = [
      <meta key={ `${ prefix }:title` } { ...{ [ nameAttribute ]: `${ prefix }:title` } }
            content={ title } />,
      <meta
        key={ `${ prefix }:description` } { ...{ [ nameAttribute ]: `${ prefix }:description` } }
        content={ description } />,
    ];
    
    if (prefix === 'og') {
      baseTags.push(
        <meta key={ `${ prefix }:type` } { ...{ [ nameAttribute ]: `${ prefix }:type` } }
              content={ type } />,
        <meta key={ `${ prefix }:url` } { ...{ [ nameAttribute ]: `${ prefix }:url` } }
              content={ url } />,
      );
    }
    
    if (image) {
      baseTags.push(
        <meta key={ `${ prefix }:image` } { ...{ [ nameAttribute ]: `${ prefix }:image` } }
              content={ image } />,
      );
    }
    
    if (extraMeta) {
      Object.entries(extraMeta).forEach(([key, metaValue]) => {
        baseTags.push(
          <meta
            key={ `${ prefix }:${ key }` }
            { ...{ [ nameAttribute ]: `${ prefix }:${ key }` } }
            content={ metaValue }
          />,
        );
      });
    }
    
    return baseTags;
  });
};
// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞