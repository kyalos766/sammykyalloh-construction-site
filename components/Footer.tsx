import Link from 'next/link';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/config/site-config';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="container-x pb-safe pt-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="flex items-center gap-3"
              aria-label={`${siteConfig.name} — home`}
            >
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-navy-700 font-heading text-sm font-bold text-white"
              >
                SC
              </span>
              <span className="font-heading text-base font-bold tracking-tight text-navy-700">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-navy-700">
              Pages
            </h2>
            <ul className="mt-4 space-y-1">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block py-2 text-sm text-slate-600 transition-colors hover:text-navy-700"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-navy-700">
              Services
            </h2>
            <ul className="mt-4 space-y-1">
              {siteConfig.services.map((service) => (
                <li key={service.title}>
                  <Link
                    href="/services"
                    className="inline-block py-2 text-sm text-slate-600 transition-colors hover:text-navy-700"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-navy-700">
              Contact
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-navy-700"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="-my-1.5 inline-block py-1.5 break-all transition-colors hover:text-navy-700"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-navy-700"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${siteConfig.phoneIntl}`}
                  className="-my-1.5 inline-block py-1.5 transition-colors hover:text-navy-700"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-navy-700"
                  aria-hidden="true"
                />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock
                  className="mt-0.5 h-4 w-4 shrink-0 text-navy-700"
                  aria-hidden="true"
                />
                <span>{siteConfig.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
