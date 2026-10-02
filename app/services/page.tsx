import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  DraftingCompass,
  Building2,
  Hammer,
  ClipboardList,
  CheckCircle2,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { siteConfig, type Service } from '@/config/site-config';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardBody } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/Reveal';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Architectural planning, commercial and residential construction, renovations and structural remodeling, and full project management.',
  alternates: { canonical: '/services' },
};

const iconMap: Record<Service['icon'], LucideIcon> = {
  draftingCompass: DraftingCompass,
  building2: Building2,
  hammer: Hammer,
  clipboardList: ClipboardList,
};

const deliverables = [
  'Site feasibility and programme budgeting',
  'Permit drawings and authority submissions',
  'Structural calculations and shop drawings',
  'Weekly photographic progress reporting',
  'Third-party materials and quality testing',
  'Snagging, commissioning and handover documentation',
];

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden bg-navy-700">
        <Image
          src="/assets/services.jpg"
          alt={`${siteConfig.name} construction services`}
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
            Our Services
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.1] text-white sm:text-5xl">
            End-to-end construction, under one roof
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-100 sm:text-lg">
            Four service lines that cover the full project lifecycle — from the
            first drawing to the final handover inspection.
          </p>
        </div>
      </section>

      {/* Service detail list */}
      <section className="section bg-offwhite">
        <div className="container-x space-y-8">
          {siteConfig.services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <Reveal key={service.title}>
                <Card className="overflow-hidden">
                  <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_320px]">
                    <CardBody className="p-6 sm:p-8">
                      <div className="flex items-start gap-4">
                        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy-700 text-white">
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </span>
                        <div>
                          <p className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                            0{index + 1}
                          </p>
                          <h2 className="mt-1 text-2xl">{service.title}</h2>
                        </div>
                      </div>
                      <p className="mt-5 text-sm font-medium leading-relaxed text-navy-700 sm:text-base">
                        {service.description}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                        {service.longDescription}
                      </p>
                    </CardBody>
                    <div className="relative min-h-[200px] bg-navy-50 lg:min-h-full">
                      <Image
                        src={index % 2 === 0 ? '/assets/services.jpg' : '/assets/about.jpg'}
                        alt={`${service.title} — Sammykyalloh Construction Company`}
                        fill
                        sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Included on every project */}
      <section className="rule section bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
          <Reveal>
            <SectionHeading
              eyebrow="Included as standard"
              title="What every project receives from us"
              description="No upsells. These are part of the base scope on all commercial, residential and industrial work."
            />
            <Link
              href="/contact"
              className={cn(buttonVariants(), 'mt-9')}
            >
              Request a detailed proposal
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="grid gap-3.5">
              {deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-slate-200 bg-offwhite p-4"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-navy-700"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed text-slate-600">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
