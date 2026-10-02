import { siteConfig } from '@/config/site-config';

/**
 * wa.me deep link for the main WhatsApp button. Lives outside the client
 * component so both the Smart Dock and the Contact page (a Server Component)
 * can use it without importing across the client boundary.
 */
export const whatsappHref = `https://wa.me/${siteConfig.phoneDigits}?text=${encodeURIComponent(
  siteConfig.whatsappMessage,
)}`;
