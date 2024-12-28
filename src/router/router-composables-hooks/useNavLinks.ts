// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//  ROUTER > ROUTER-COMPOSABLES-HOOKS >> USE_NAVLINKS.TS
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { IconType } from 'react-icons';
import { FaHeartbeat, FaTooth } from 'react-icons/fa';
import { GiHealthNormal } from 'react-icons/gi';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export type SubdomainType = {
  label: string;
  path: string;
  icon?: IconType;
};

// types.ts
export type NavLinkType = {
  path: string;
  label: string;
  end?: boolean | undefined;
  subdomains?: Array<SubdomainType>;
};

// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export function useNavLinks() {
  // navData.ts
  const NAV_LINKS: Array<NavLinkType> = [
    { path: '/', label: 'Home', end: true },
    { path: '/*', label: 'Contact Us' },
    {
      path: '#',
      label: 'Top folder',
      subdomains: [
        {
          label: 'Section #1',
          path: '#',
          icon: FaTooth,
        },
        { label: 'Section #2', path: '#', icon: GiHealthNormal },
        { label: 'Section #3', path: '#', icon: FaHeartbeat },
      ],
    },
    // { path: '/blog', label: 'Blog' },
  ];

  return NAV_LINKS;
}

// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
