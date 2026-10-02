import type { Metadata, Viewport } from 'next';
import './globals.css';
import { siteConfig } from '@/config/site-config';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FooterBar } from '@/components/FooterBar';
import { EnigmoDock } from '@/components/EnigmoDock';
import { LocalSeo } from '@/components/LocalSeo';

const ogImage = {
  url: '/assets/hero.jpg',
  width: 736,
  height: 1104,
  alt: `${siteConfig.name} — ${siteConfig.tagline}`,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    'construction company Kenya',
    'commercial construction',
    'residential builders',
    'industrial warehouse construction',
    'structural engineering',
    'building contractor Nairobi',
    'project management',
    'renovations and remodeling',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [ogImage],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'construction',
};

export const viewport: Viewport = {
  themeColor: '#1B365D',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-KE">
      <body className="flex min-h-screen flex-col">
        <LocalSeo />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-navy-700 focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1 pb-safe">
          {children}
        </main>
        <Footer />
        <FooterBar />
        <EnigmoDock />
      </body>
    </html>
  );
}
