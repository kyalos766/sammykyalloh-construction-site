import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    { path: '', priority: 1 },
    { path: '/about', priority: 0.8 },
    { path: '/services', priority: 0.9 },
    { path: '/projects', priority: 0.9 },
    { path: '/contact', priority: 0.7 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority,
  }));
}
