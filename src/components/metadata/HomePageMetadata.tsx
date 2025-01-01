// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//        COMPONENTS > METADATA > HOME_PAGE_METADATA.TSX
// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { Helmet } from 'react-helmet-async';
import { useSocialMediaMetadata } from '../../lib';
// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export const HomePageMetadata = () => {
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  const homePageTitle = 'Thumbs Up RSA - Roadside Assistance in Lawrence, MA';
  // Example: Homepage title optimized for SEO and branding

  const canonicalURL = 'https://www.thumbsuprsa.com/';
  // Example: Canonical URL of the website

  const contentBasicMetadata =
    'Providing fast and reliable roadside assistance services in Lawrence, MA, including tire changes, fuel delivery, jump starts, lockouts, and diesel fuel delivery.';
  // Example: Meta description for SEO purposes

  const geoMetadata = {
    region: 'US-MA',
    // The geographic region code (United States - Massachusetts)

    placename: 'Lawrence, MA',
    // The locality or city

    position: '42.7070;-71.1631',
    // The geographic coordinates (latitude;longitude) of Lawrence, MA
  };

  const socialMetadata = useSocialMediaMetadata({
    siteUrl: 'https://www.thumbsuprsa.com/',
    // The website URL

    title: 'Thumbs Up RSA - Fast Roadside Assistance Services',
    // Social media title to display when shared

    description:
      'Stuck on the road? Thumbs Up RSA provides tire changes, fuel delivery, jump starts, lockouts, and diesel fuel delivery in Lawrence, MA. Fast and reliable service when you need it most.',
    // Social media description to encourage clicks when shared

    type: 'website' as const,
    // Type of resource (usually 'website')

    platforms: ['facebook', 'twitter'],
    // Platforms where metadata will be optimized
  });

  const isNonProfit = false; // This is a for-profit roadside assistance business

  const ORG_SCHEMA_DATA = {
    '@context': 'https://schema.org',
    '@type': isNonProfit ? 'NGO' : 'Organization',
    name: 'Thumbs Up RSA',
    // Organization or company name

    description: isNonProfit
      ? 'A nonprofit organization dedicated to helping people in roadside emergencies.'
      : 'Providing fast and reliable roadside assistance services, including tire changes, fuel delivery, jump starts, lockouts, and diesel fuel delivery.',
    // Description of the business

    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lawrence, MA 01843',
      // The street address

      addressLocality: 'Lawrence',
      // The locality or city

      addressRegion: 'MA',
      // The region (state)

      postalCode: '01843',
      // Postal code

      addressCountry: 'US',
      // Country
    },
    telephone: '978-773-3995',
    // Contact phone number

    areaServed: ['Lawrence', 'Essex County', 'Merrimack Valley'],
    // Areas where services are provided

    serviceType: isNonProfit
      ? undefined
      : [
          'Tire Change',
          'Gas Fuel Delivery',
          'Jump Start',
          'Lockout',
          'Diesel Fuel Delivery',
          'Emergency Roadside Help',
          'Roadside Assistance',
        ],
    // Services offered by the business (only included for non-profits if applicable)

    keywords: [
      'thumbsuprsa',
      'thumbsuprsa.com',
      'thumbs up roadside assistance',
      'thumbs up rsa',
      'roadside assistance',
      'tire change',
      'fuel delivery',
      'jump start',
      'lockout service',
      'diesel fuel delivery',
      'emergency roadside help',
      'Lawrence MA roadside assistance',
    ],
    // Keywords optimized for SEO
  };
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{homePageTitle}</title>
      <meta name='description' content={contentBasicMetadata} />
      <link rel='canonical' href={canonicalURL} />

      {/* Social Media Tags */}
      {Array.isArray(socialMetadata) &&
        socialMetadata.map((element, index) => {
          if (element?.type === 'meta' && element.props) {
            return <meta key={index} {...element.props} />;
          }
          console.warn('Invalid social metadata element:', element);
          return null;
        })}

      {/* Geo Location */}
      <meta name='geo.region' content={geoMetadata.region} />
      <meta name='geo.placename' content={geoMetadata.placename} />
      <meta name='geo.position' content={geoMetadata.position} />

      {/* Robots */}
      <meta name='robots' content='index, follow' />

      {/* Structured Data */}
      <script type='application/ld+json'>{JSON.stringify(ORG_SCHEMA_DATA)}</script>
    </Helmet>
  );
};
// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
