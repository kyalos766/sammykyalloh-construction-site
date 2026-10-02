import type { Metadata } from 'next';
import Image from 'next/image';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site-config';
import { ContactForm } from '@/components/ContactForm';
import { whatsappHref } from '@/lib/whatsapp';
import { Card, CardBody } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Contact ${siteConfig.name} on ${siteConfig.phone} or ${siteConfig.email} for your construction project.`,
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden bg-navy-700">
        <Image
          src="/assets/about.jpg"
          alt={`${siteConfig.name} site team`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-navy-900/85 via-navy-700/70 to-navy-800/80"
        />
        <div className="container-x relative py-14 sm:py-20 lg:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-navy-100">
            Contact Us
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.1] text-white sm:text-5xl">
            Let&rsquo;s talk about your build
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-100 sm:text-lg">
            Call, email or message us on WhatsApp — whichever is quickest. We
            reply to every enquiry within one business day.
          </p>
        </div>
      </section>

      {/* Contact info + WhatsApp */}
      <section className="section bg-offwhite">
        <div className="container-x grid gap-6 lg:grid-cols-3">
          <Reveal>
            <Card className="h-full">
              <CardBody>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                  <Mail className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-lg">Email</h2>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-2 block break-all text-sm text-slate-600 transition-colors hover:text-navy-700"
                >
                  {siteConfig.email}
                </a>
              </CardBody>
            </Card>
          </Reveal>

          <Reveal delay={0.07}>
            <Card className="h-full">
              <CardBody>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                  <Phone className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-lg">Phone</h2>
                <a
                  href={`tel:${siteConfig.phoneIntl}`}
                  className="mt-2 block text-sm text-slate-600 transition-colors hover:text-navy-700"
                >
                  {siteConfig.phone}
                </a>
                <p className="mt-1 text-xs text-slate-500">
                  International: {siteConfig.phoneIntl}
                </p>
              </CardBody>
            </Card>
          </Reveal>

          <Reveal delay={0.14}>
            <Card className="h-full">
              <CardBody>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                  <MapPin className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-lg">Office</h2>
                <p className="mt-2 text-sm text-slate-600">{siteConfig.address}</p>
                <p className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                  <Clock className="h-4 w-4 text-navy-700" aria-hidden="true" />
                  {siteConfig.hours}
                </p>
              </CardBody>
            </Card>
          </Reveal>
        </div>

        {/* Prominent WhatsApp panel */}
        <Reveal>
          <div className="mt-6 flex flex-col items-start gap-5 rounded-xl bg-navy-700 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-9">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                <MessageCircle className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-xl text-white">Prefer a quick chat?</h2>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-navy-100">
                  Message our project team directly on WhatsApp. Your message
                  opens pre-filled with your enquiry.
                </p>
              </div>
            </div>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-md bg-white px-6 text-base font-semibold text-navy-700 transition-colors hover:bg-navy-50 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </section>

      {/* Form + details */}
      <section className="rule section bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <SectionHeading
                eyebrow="Before you write"
                title="What to include for a faster quote"
              />
              <ul className="mt-6 space-y-3">
                {[
                  'Site location and approximate plot size',
                  'Intended use: commercial, residential or industrial',
                  'Number of floors or approximate floor area',
                  'Target start date and any fixed budget constraints',
                ].map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-slate-200 bg-offwhite p-4 text-sm leading-relaxed text-slate-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <Card className="mt-6 bg-navy-50">
                <CardBody>
                  <p className="text-sm leading-relaxed text-slate-600">
                    Prefer to talk? Call{' '}
                    <a
                      href={`tel:${siteConfig.phoneIntl}`}
                      className="font-semibold text-navy-700 hover:underline"
                    >
                      {siteConfig.phone}
                    </a>{' '}
                    during business hours and we&rsquo;ll connect you with a
                    project manager.
                  </p>
                </CardBody>
              </Card>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
