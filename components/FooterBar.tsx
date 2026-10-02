'use client';

import * as React from 'react';
import { siteConfig } from '@/config/site-config';

/**
 * Slim credit bar pinned to the bottom of the viewport. It always stays visible
 * so the Enigmo Labs credit is never scrolled out of view, and it publishes its
 * own height as `--dockbar-h` so <main> and the Smart Dock can sit above it.
 */
export function FooterBar() {
  const barRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    const publish = () => {
      document.documentElement.style.setProperty(
        '--dockbar-h',
        `${el.offsetHeight}px`,
      );
    };

    publish();
    const observer = new ResizeObserver(publish);
    observer.observe(el);
    window.addEventListener('resize', publish);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', publish);
      document.documentElement.style.removeProperty('--dockbar-h');
    };
  }, []);

  return (
    <div
      ref={barRef}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-800 bg-navy-700"
    >
      <div className="container-x flex flex-col items-center justify-between gap-1 py-2 text-center sm:flex-row sm:text-left">
        <p className="text-xs text-navy-100 sm:text-[13px]">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
        <p className="text-xs font-semibold text-white sm:text-sm">
          &quot;Developed by {siteConfig.footer.creditName}&quot; |{' '}
          &quot;{siteConfig.footer.creditStudio}&quot;
        </p>
      </div>
    </div>
  );
}
