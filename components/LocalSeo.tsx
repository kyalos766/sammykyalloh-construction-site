import { siteConfig } from '@/config/site-config';

export function LocalSeo() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phoneIntl,
    image: `${siteConfig.url}/assets/hero.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location,
      addressCountry: 'KE',
    },
    areaServed: { '@type': 'Country', name: 'Kenya' },
    openingHours: siteConfig.openingHours,
    priceRange: '$$',
    sameAs: [`https://wa.me/${siteConfig.phoneDigits}`],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
