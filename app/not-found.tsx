import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for could not be found.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="section bg-offwhite">
      <div className="container-x flex flex-col items-center text-center">
        <p className="font-heading text-5xl font-bold text-navy-700 sm:text-6xl">404</p>
        <h1 className="mt-4 text-3xl">Page not found</h1>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
          The page you&rsquo;re looking for has moved or doesn&rsquo;t exist.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-navy-700 px-6 text-base font-semibold text-white transition-colors hover:bg-navy-800"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
