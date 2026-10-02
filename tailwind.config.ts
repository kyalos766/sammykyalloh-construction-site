import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './config/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B365D',
          50: '#F2F5F9',
          100: '#E2E9F2',
          200: '#C4D2E4',
          300: '#9BB1CF',
          400: '#6D89B4',
          500: '#4A6899',
          600: '#33507F',
          700: '#1B365D',
          800: '#152B4A',
          900: '#0F1F36',
          950: '#0A1526',
        },
        slate: {
          DEFAULT: '#64748B',
        },
        offwhite: '#FAFAFA',
      },
      fontFamily: {
        // Space Grotesk for headings, Inter for body (Enigmo typography standard).
        // Falls back to system UI stacks when the webfonts are unavailable.
        heading: [
          'var(--font-heading)',
          '"Space Grotesk"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          '"Segoe UI"',
          'sans-serif',
        ],
        body: [
          'var(--font-body)',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          '"Segoe UI"',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 1px 2px 0 rgb(15 31 54 / 0.04), 0 8px 24px -8px rgb(15 31 54 / 0.12)',
        lift: '0 12px 40px -12px rgb(27 54 93 / 0.28)',
      },
      maxWidth: {
        container: '80rem',
      },
    },
  },
  plugins: [],
};

export default config;
