export const siteConfig = {
  name: 'Sammykyalloh Construction Company',
  shortName: 'Sammykyalloh',
  tagline: "Building Tomorrow's Landmarks Today",
  description:
    'Sammykyalloh Construction Company delivers commercial, residential and industrial builds with uncompromising structural integrity and modern design.',
  // CHANGE THIS to the live domain before publishing — it drives metadataBase,
  // canonical URLs, the sitemap and the JSON-LD schema.
  domain: 'sammykyallohconstruction.co.ke',
  url: 'https://sammykyallohconstruction.co.ke',

  // Displayed exactly as provided by the client.
  email: 'kyalos766@gmail.com',
  phone: '0710495490',
  // International format (country code 254) used for tel: and wa.me links.
  phoneIntl: '+254710495490',
  phoneDigits: '254710495490',
  whatsappMessage:
    "Hi, I found Sammykyalloh Construction Company's website and would like to inquire about your services.",

  location: 'Nairobi, Kenya',
  address: 'Westlands, Nairobi, Kenya',
  hours: 'Mon – Fri, 8:00am – 5:00pm',
  openingHours: 'Mo-Fr 08:00-17:00',

  credits: {
    developer: 'sammykyalloh',
    studio: 'Enigmo labs',
    studioUrl: 'https://enigmolabs.co.ke',
  },

  colors: {
    primary: '#1B365D',
    secondary: '#64748B',
    background: '#FAFAFA',
  },

  nav: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Services', href: '/services' },
    { label: 'Our Projects', href: '/projects' },
    { label: 'Contact Us', href: '/contact' },
  ],

  hero: {
    headline: "Building Tomorrow's Landmarks Today",
    paragraph:
      'From foundation to handover, we pair uncompromising structural integrity with contemporary architectural design. Every project is engineered to stand the test of time and built to the exacting standards our clients expect.',
    primaryCta: { label: 'View Our Projects', href: '/projects' },
    secondaryCta: { label: 'Request a Consultation', href: '/contact' },
    image: '/assets/projects/meridian-commercial-hub.jpg',
    stats: [
      { value: '18+', label: 'Years of practice' },
      { value: '240+', label: 'Projects delivered' },
      { value: '96%', label: 'On-time handover' },
    ],
  },

  values: [
    {
      title: 'Quality Assurance',
      description:
        'Every pour, weld and finish passes a documented inspection checklist before it is signed off. We build to code, then we verify with independent testing.',
    },
    {
      title: 'Timely Delivery',
      description:
        'Detailed programme scheduling, weekly progress reporting and material forecasting keep your project on schedule and inside budget.',
    },
    {
      title: 'Expert Engineering',
      description:
        'Our in-house structural engineers size, detail and review every load path, so drawings and the built result match exactly.',
    },
  ],

  about: {
    mission:
      'To deliver construction solutions that are structurally sound, environmentally responsible and precisely executed — on every project, regardless of scale.',
    vision:
      'To be the contractor of record that clients return to for the second and third landmark, by making engineering excellence and transparent project delivery the default rather than the exception.',
    intro:
      'Sammykyalloh Construction Company is a full-service building contractor operating across the commercial, residential and industrial sectors. Our teams carry the project from site mobilisation and ground excavation through structural framing, services integration and final handover.',
    journey: [
      {
        year: '2008',
        title: 'Foundation',
        description:
          'Started as a small Nairobi subcontractor on residential duplexes, earning a reputation for clean sites and honest reporting.',
      },
      {
        year: '2013',
        title: 'Commercial Expansion',
        description:
          'Moved into full commercial build-outs and multi-storey structural framing, recruiting our first in-house engineering team.',
      },
      {
        year: '2018',
        title: 'Industrial & Institutional',
        description:
          'Delivered steel-frame warehouses, factories and institutional buildings, scaling supervision capacity across three regions.',
      },
      {
        year: '2022',
        title: 'Sustainability Integration',
        description:
          'Introduced low-carbon concrete mixes, daylight-first design reviews and material efficiency tracking as standard practice.',
      },
      {
        year: 'Today',
        title: 'Landmark Portfolio',
        description:
          'A team of engineers, architects and site managers delivering landmark commercial and residential work nationwide.',
      },
    ],
    coreValues: [
      {
        title: 'Safety',
        description: 'Zero-harm site culture with mandatory inductions, PPE compliance and daily toolbox talks.',
      },
      {
        title: 'Integrity',
        description: 'Transparent costing, documented change control and no hidden extras on your invoice.',
      },
      {
        title: 'Innovation',
        description: 'Modern methods, BIM-coordinated detailing and materials that improve buildability and performance.',
      },
      {
        title: 'Collaboration',
        description: 'One project team across client, architect, engineers and trades — decisions made in days, not weeks.',
      },
    ],
  },

  services: [
    {
      title: 'Architectural Planning & Blueprint Design',
      description:
        'Crafting functional, modern structural layouts optimized for spatial efficiency and local regulatory compliance.',
      longDescription:
        'Our planners develop concept layouts, floor plans and permit-ready construction drawings. We run every scheme against daylight, circulation, egress and plot coverage requirements, then submit to the relevant county authority for approval before a single foundation is broken.',
      icon: 'draftingCompass',
    },
    {
      title: 'Commercial & Residential Construction',
      description:
        'Full-scale project execution from ground excavation and structural framing to interior turn-key completion.',
      longDescription:
        'We self-perform the critical path — excavation, foundations, structural framing, roofing and services first-fix — with our own crews and plant. You receive a single point of accountability from the first spoil heap to the final coat of paint and handover keys.',
      icon: 'building2',
    },
    {
      title: 'Renovations & Structural Remodeling',
      description:
        'Upgrading existing properties with modern retrofits, reinforcing structural integrity, and optimizing spatial layouts.',
      longDescription:
        'Older stock fails quietly. We survey the existing structure, expose and repair corrosion and cracking, upgrade connections to current code, and open up layouts where the original frame allows it — all while keeping the building occupied where possible.',
      icon: 'hammer',
    },
    {
      title: 'Project Management & Site Supervision',
      description:
        'Comprehensive oversight managing material supply chains, safety protocols, and strict timeline benchmarks.',
      longDescription:
        'A dedicated project manager and site supervisor are assigned to your build. They run the master programme, coordinate suppliers and subcontractor packages, enforce safety protocols, and issue weekly photographic progress reports against agreed milestones.',
      icon: 'clipboardList',
    },
  ],

  // Swap the `image` values below for your own project photos.
  // Recommended: export at 1600px wide WebP, under 200KB per file.
  projects: [
    {
      title: 'Commercial Hub',
      category: 'Commercial',
      location: 'Upper Hill, Nairobi',
      year: '2024',
      scope: 'Multi-storey commercial complex',
      image: '/assets/projects/meridian-commercial-hub.jpg',
      description:
        'A multi-level contemporary commercial complex featuring glass facade architecture and energy-efficient structural frameworks.',
    },
    {
      title: 'Luxury Residential Estate',
      category: 'Residential',
      location: 'Karen, Nairobi',
      year: '2023',
      scope: 'Multi-family residential estate',
      image: '/assets/projects/meridian-residential-estate.jpg',
      description:
        'A premium multi-family residential estate combining modern minimalist design with sustainable, eco-friendly building materials.',
    },
    {
      title: 'Industrial Warehouse',
      category: 'Industrial',
      location: 'Mombasa Road Corridor',
      year: '2023',
      scope: 'Steel-frame logistics facility',
      image: '/assets/projects/meridian-industrial-warehouse.jpg',
      description:
        'High-capacity industrial steel-frame warehouse designed for optimal spatial utility and heavy-load structural endurance.',
    },
  ],

  footer: {
    creditName: 'sammykyalloh',
    creditStudio: 'Enigmo labs',
  },
} as const;

export type SiteConfig = typeof siteConfig;
export type Project = (typeof siteConfig)['projects'][number];
export type Service = (typeof siteConfig)['services'][number];
