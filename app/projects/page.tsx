import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, CalendarDays, Layers } from 'lucide-react';
import { siteConfig } from '@/config/site-config';
import { buttonVariants } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Our Projects',
  description:
    'A portfolio of commercial complexes, residential estates and industrial steel-frame facilities delivered by Sammykyalloh Construction Company.',
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden bg-navy-700">
        <Image
          src="/assets/projects/meridian-commercial-hub.jpg"
          alt={`${siteConfig.name} project portfolio`}
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
            Our Projects
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.1] text-white sm:text-5xl">
            Selected work across three sectors
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-100 sm:text-lg">
            A snapshot of recent commercial, residential and industrial
            deliveries — each one engineered, supervised and handed over by our
            own teams.
          </p>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="section bg-offwhite">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Portfolio"
              title="Recent project showcases"
              description="Recent commercial, residential and industrial deliveries, each engineered, supervised and handed over by our own teams."
            />
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {siteConfig.projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.08}>
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card transition-shadow duration-300 hover:shadow-lift">
                  <div className="relative aspect-[4/5] overflow-hidden bg-navy-50">
                    {/* Swap the `src` below to point at your own image file. */}
                    <Image
                      src={project.image}
                      alt={`${project.title} — ${project.description}`}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-navy-700/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-xl">{project.title}</h2>

                    <dl className="mt-4 space-y-2 text-xs text-slate-500">
                      <div className="flex items-center gap-2">
                        <dt className="sr-only">Location</dt>
                        <MapPin className="h-4 w-4 text-navy-700" aria-hidden="true" />
                        <dd>{project.location}</dd>
                      </div>
                      <div className="flex items-center gap-2">
                        <dt className="sr-only">Year</dt>
                        <CalendarDays className="h-4 w-4 text-navy-700" aria-hidden="true" />
                        <dd>{project.year}</dd>
                      </div>
                      <div className="flex items-center gap-2">
                        <dt className="sr-only">Scope</dt>
                        <Layers className="h-4 w-4 text-navy-700" aria-hidden="true" />
                        <dd>{project.scope}</dd>
                      </div>
                    </dl>

                    <p className="mt-5 text-sm leading-relaxed text-slate-600">
                      {project.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rule section bg-white">
        <div className="container-x flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-2xl sm:text-3xl">
            Have a site in mind? Let&rsquo;s scope it properly.
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Send us the drawings or even just the site address — we&rsquo;ll come
            back with a feasibility note and an indicative programme.
          </p>
          <Link
            href="/contact"
            className={buttonVariants({ size: 'lg' })}
          >
            Talk to our team
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
