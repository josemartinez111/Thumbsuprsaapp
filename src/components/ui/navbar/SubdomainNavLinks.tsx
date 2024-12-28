//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//       COMPONENTS > UI > NAVBAR > SUBDOMAIN-NAV-LINKS.TSX
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                       IMPORTS
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { FunctionComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import {
  NavLinkType,
  SubdomainType,
} from '../../../router/router-composables-hooks/useNavLinks.ts';
import { Show } from '../../utils/Show.tsx';
import clsx from 'clsx';
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export type SubdomainProps = {
  navLinks: Array<NavLinkType>;
  handleClose: () => void;
  updateExpandedSubmenu: (args: string | null) => void;
  expandedSubmenu: string | null;
};
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export const SubdomainNavLinks: FunctionComponent<SubdomainProps> = ({
  navLinks,
  handleClose,
  updateExpandedSubmenu,
  expandedSubmenu,
}) => {
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  return (
    <Fragment>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
      <nav className='px-4 py-2'>
        <ul className='space-y-1'>
          {navLinks.map((link: NavLinkType) => {
            const hasSubdomains = link.subdomains && link.subdomains.length > 0;

            return (
              <li key={link.path}>
                <Show
                  condition={!hasSubdomains}
                  then={
                    <Link
                      to={link.path}
                      className={twMerge(
                        clsx(
                          'block rounded-lg px-4 py-2.5 text-sm font-medium',
                          'text-gray-600 transition-colors hover:bg-gray-100',
                          'hover:text-oh-yea-blue-light dark:text-gray-300',
                          'dark:hover:bg-gray-700 dark:hover:text-oh-yea-blue-light',
                        ),
                      )}
                      onClick={handleClose}
                    >
                      {link.label}
                    </Link>
                  }
                  otherwise={
                    <Fragment>
                      <button
                        onClick={() =>
                          updateExpandedSubmenu(
                            expandedSubmenu === link.label ? null : link.label,
                          )
                        }
                        className={twMerge(
                          clsx(
                            'w-full rounded-lg px-4 py-2.5 text-sm font-medium',
                            'text-gray-600 transition-colors hover:bg-gray-100',
                            'hover:text-oh-yea-blue-light dark:text-gray-300',
                            'dark:hover:bg-gray-700 dark:hover:text-oh-yea-blue-light',
                            'flex items-center justify-between',
                          ),
                        )}
                      >
                        {link.label}
                        <span
                          className={`transform transition-transform ${
                            expandedSubmenu === link.label ? 'rotate-180' : ''
                          }`}
                        >
                          ▼
                        </span>
                      </button>
                      <Show
                        condition={expandedSubmenu === link.label}
                        then={
                          <ul className='ml-4 space-y-1 py-2'>
                            {link.subdomains?.map((subdomain: SubdomainType) => (
                              <li key={subdomain.path}>
                                <a
                                  href={subdomain.path}
                                  className={twMerge(
                                    clsx(
                                      'flex items-center rounded-lg px-4 py-2 text-sm',
                                      'text-gray-600 transition-colors hover:bg-gray-100',
                                      'hover:text-oh-yea-blue-light dark:text-gray-300',
                                      'dark:hover:bg-gray-700 dark:hover:text-oh-yea-blue-light',
                                    ),
                                  )}
                                  onClick={handleClose}
                                >
                                  <Show
                                    condition={subdomain.icon}
                                    then={(Icon) => (
                                      <Icon className='mr-2 h-4 w-4 text-netflix-red dark:text-oh-yea-blue-light' />
                                    )}
                                  />
                                  {subdomain.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        }
                      />
                    </Fragment>
                  }
                />
              </li>
            );
          })}
        </ul>
      </nav>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
    </Fragment>
  );
};
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
