'use client';

import { MessageCircle, Phone, Zap } from 'lucide-react';
import { siteConfig } from '@/config/site-config';
import { whatsappHref } from '@/lib/whatsapp';

export function EnigmoDock() {
  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-[calc(var(--dockbar-h,0px)+0.75rem)] z-50 px-3 md:left-auto md:right-6 md:w-auto md:px-0"
    >
      <div className="mx-auto flex max-w-md items-center gap-2 rounded-full border border-navy-800/60 bg-navy-900/90 p-2 shadow-lift backdrop-blur-md md:max-w-none">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-navy-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-800 md:flex-none"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>

        <a
          href={`tel:${siteConfig.phoneIntl}`}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-700/60 text-white transition-colors hover:bg-navy-800"
          aria-label={`Call ${siteConfig.name} on ${siteConfig.phone}`}
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
        </a>

        <a
          href={siteConfig.credits.studioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy-700/60 text-navy-100 transition-colors hover:bg-navy-800"
          aria-label={`Built by ${siteConfig.credits.studio}`}
          title={`Built by ${siteConfig.credits.studio}`}
        >
          <Zap className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </nav>
  );
}
