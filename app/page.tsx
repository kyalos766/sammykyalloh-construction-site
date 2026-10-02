import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, CalendarCheck, Ruler, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site-config';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardBody } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/Reveal';
import { cn } from '@/lib/utils';

const valueIcons = [ShieldCheck, CalendarCheck, Ruler];

export const metadata: Metadata = {
  title: 'Commercial, Residential & Industrial Builders',
  description:
    'Sammykyalloh Construction Company builds commercial complexes, residential estates and industrial facilities with uncompromising structural integrity and modern design.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-700">
        <Image
          src="/assets/hero.jpg"
          alt="Sammykyalloh Construction Company commercial building under construction"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-navy-900/85 via-navy-700/70 to-navy-800/80"
        />
        <div className="container-x relative py-14 sm:py-24 lg:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-navy-100">
              Est. 2008 &middot; Nairobi, Kenya
            </span>
            <h1 className="mt-6 text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              {siteConfig.hero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-100 sm:text-lg">
              {siteConfig.hero.paragraph}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={siteConfig.hero.primaryCta.href}
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'bg-white text-navy-700 hover:bg-navy-50',
                )}
              >
                {siteConfig.hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href={siteConfig.hero.secondaryCta.href}
                className={cn(
                  buttonVariants({ size: 'lg', variant: 'outline' }),
                  'border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10 hover:text-white',
                )}
              >
                {siteConfig.hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          <dl className="mt-10 grid max-w-3xl grid-cols-1 gap-6 border-t border-white/20 pt-8 sm:mt-16 sm:grid-cols-3">
            {siteConfig.hero.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-heading text-3xl font-bold text-white sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-1.5 block text-sm text-navy-100">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Value proposition */}
      <section className="section bg-offwhite">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Why build with us"
              title="Three disciplines that keep a project on solid ground"
              description="Structural integrity is not a phase of our work — it is the standard we measure every phase against."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {siteConfig.values.map((value, index) => {
              const Icon = valueIcons[index] ?? ShieldCheck;
              return (
                <Reveal key={value.title} delay={index * 0.08}>
                  <Card className="h-full hover:shadow-lift">
                    <CardBody>
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <h3 className="mt-5 text-lg">{value.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {value.description}
                      </p>
                    </CardBody>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brief intro / teaser */}
      <section className="rule section bg-white">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl sm:aspect-[4/3] lg:aspect-[4/5]">
              <Image
                src="/assets/about.jpg"
                alt="Sammykyalloh Construction Company team reviewing structural drawings on site"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <span className="eyebrow">About the company</span>
              <h2 className="mt-4 text-3xl sm:text-4xl">
                Engineers first. Contractors second.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                {siteConfig.about.intro}
              </p>

              <ul className="mt-7 space-y-3">
                {[
                  'In-house structural and civil engineering team',
                  'Self-performed foundation and framing works',
                  'Documented QA inspections at every stage',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
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

              <Link
                href="/about"
                className={cn(buttonVariants({ variant: 'outline' }), 'mt-9')}
              >
                More about us
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
