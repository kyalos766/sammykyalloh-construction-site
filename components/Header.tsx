'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site-config';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="container-x">
        <div className="flex h-16 items-center justify-between gap-4 sm:h-20">
          {/* Logo placeholder */}
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-3"
            aria-label={`${siteConfig.name} home`}
          >
            <span
              aria-hidden="true"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-navy-700 font-heading text-sm font-bold text-white transition-colors group-hover:bg-navy-800"
            >
              SC
            </span>
            <span className="flex min-w-0 flex-col leading-none">
              {/* Short name below sm so the full 32-character name can never
                  wrap and overflow the 64px header on a 320px viewport. */}
              <span className="truncate font-heading text-base font-bold tracking-tight text-navy-700 sm:text-lg">
                <span className="sm:hidden">{siteConfig.shortName}</span>
                <span className="hidden sm:inline">{siteConfig.name}</span>
              </span>
              <span className="mt-1 truncate text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
                Construction Company
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 lg:flex"
          >
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={cn(
                  'rounded-md px-3.5 py-2 text-sm font-medium transition-colors',
                  isActive(item.href)
                    ? 'bg-navy-50 text-navy-700'
                    : 'text-slate-600 hover:bg-navy-50/60 hover:text-navy-700',
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            {/* Hidden until xl: below that the wordmark plus the nav and the
                CTA no longer fit on one 1024px line. */}
            <a
              href={`tel:${siteConfig.phoneIntl}`}
              className="hidden items-center gap-2 text-sm font-semibold text-navy-700 hover:text-navy-800 xl:inline-flex"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className={cn(buttonVariants(), 'hidden xl:inline-flex')}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-slate-200 text-navy-700 transition-colors hover:bg-navy-50 active:bg-navy-100 lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        id="mobile-nav"
        className={cn(
          'overflow-hidden border-t border-slate-200 bg-white transition-[max-height,opacity,visibility] duration-300 lg:hidden',
          open
            ? 'visible max-h-[65dvh] overflow-y-auto opacity-100'
            : 'invisible max-h-0 opacity-0',
        )}
      >
        {/* Extra bottom padding keeps the last CTA clear of the Smart Dock on
            short (landscape) viewports. */}
        <nav
          aria-label="Mobile"
          className="container-x py-4"
          style={{ paddingBottom: 'calc(var(--dockbar-h, 3.5rem) + 4.5rem)' }}
        >
          <ul className="flex flex-col gap-1">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={cn(
                    'block rounded-md px-3 py-3 text-sm font-medium transition-colors',
                    isActive(item.href)
                      ? 'bg-navy-50 text-navy-700'
                      : 'text-slate-700 hover:bg-navy-50/60',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col gap-2 border-t border-slate-200 pt-3">
            <a
              href={`tel:${siteConfig.phoneIntl}`}
              className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-navy-700"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className={cn(
                buttonVariants(),
                'h-11 w-full px-5 text-sm',
              )}
            >
              Get a Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
