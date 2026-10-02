import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Target, Eye, ShieldCheck, Handshake, Lightbulb, Users } from 'lucide-react';
import { siteConfig } from '@/config/site-config';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardBody } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/Reveal';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Sammykyalloh Construction Company is a full-service building contractor delivering sustainable, safe and innovative construction across Kenya.',
  alternates: { canonical: '/about' },
};

const valueIcons = [ShieldCheck, Handshake, Lightbulb, Users];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden bg-navy-700">
        <Image
          src="/assets/about.jpg"
          alt="Sammykyalloh Construction Company site team"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-20"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-navy-900/85 via-navy-700/75 to-navy-800/85"
        />
        <div className="container-x relative py-14 sm:py-20 lg:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-navy-100">
            About Us
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.1] text-white sm:text-5xl">
            Building with integrity since 2008
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-100 sm:text-lg">
            {siteConfig.about.intro}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-offwhite">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Mission & Vision"
              title="A clear mandate for every build we take on"
              description="Sustainable, safe and innovative construction solutions — delivered the same way on every site, at every scale."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <Card className="h-full">
                <CardBody>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                    <Target className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl">Our Mission</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {siteConfig.about.mission}
                  </p>
                </CardBody>
              </Card>
            </Reveal>
            <Reveal delay={0.08}>
              <Card className="h-full">
                <CardBody>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                    <Eye className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl">Our Vision</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {siteConfig.about.vision}
                  </p>
                </CardBody>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="rule section bg-white">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Our Journey"
              title="Growth measured in delivered landmarks"
              description="From small residential subcontracting to multi-storey commercial and industrial delivery across the country."
            />
          </Reveal>

          <ol className="mt-14 border-l-2 border-navy-100 pl-6 sm:pl-8">
            {siteConfig.about.journey.map((entry, index) => (
              <Reveal as="li" key={entry.year} delay={index * 0.06}>
                <div className="relative pb-12 last:pb-0">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-navy-700 sm:-left-[39px]"
                  />
                  <p className="font-heading text-sm font-bold tracking-[0.18em] text-navy-700">
                    {entry.year}
                  </p>
                  <h3 className="mt-2 text-xl">{entry.title}</h3>
                  <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-slate-600">
                    {entry.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Core values */}
      <section className="rule section bg-offwhite">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Core Values"
              title="Four principles on every site we run"
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.about.coreValues.map((value, index) => {
              const Icon = valueIcons[index] ?? ShieldCheck;
              return (
                <Reveal key={value.title} delay={index * 0.07}>
                  <Card className="h-full text-center hover:shadow-lift">
                    <CardBody>
                      <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-navy-700 text-white">
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

      {/* CTA */}
      <section className="bg-navy-700">
        <div className="container-x flex flex-col items-center gap-6 py-14 text-center sm:py-16">
          <h2 className="max-w-2xl text-2xl text-white sm:text-3xl">
            Let&rsquo;s plan your next build together.
          </h2>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'bg-white text-navy-700 hover:bg-navy-50',
            )}
          >
            Start a conversation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
