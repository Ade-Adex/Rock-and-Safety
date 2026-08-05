export interface PortfolioItem {
  id: number
  title: string
  category:
    | 'Web Development'
    | 'Branding'
    | 'UI/UX Design'
    | 'Marketing'
    | 'Publishing'
  image: string
  link?: string
}

export const portfolioItems: PortfolioItem[] = [
  // =========================
  // Web Development
  // =========================
  {
    id: 1,
    title: 'E-Commerce Storefront',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
  },
  {
    id: 2,
    title: 'Corporate Business Website',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
  },
  {
    id: 3,
    title: 'Real Estate Listing Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
  },
  {
    id: 4,
    title: 'Healthcare Appointment Portal',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
  },

  // =========================
  // Branding
  // =========================
  {
    id: 5,
    title: 'Brand Identity & Guidelines',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f',
  },
  {
    id: 6,
    title: 'Restaurant Brand Refresh',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
  },
  {
    id: 7,
    title: 'Luxury Fashion Brand Kit',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b',
  },
  {
    id: 8,
    title: 'Startup Logo Collection',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c',
  },

  // =========================
  // UI/UX Design
  // =========================
  {
    id: 9,
    title: 'Mobile Banking App UI',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
  },
  {
    id: 10,
    title: 'Travel Booking Dashboard',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
  },
  {
    id: 11,
    title: 'Fitness Tracking Mobile App',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
  },
  {
    id: 12,
    title: 'Crypto Wallet Interface',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0',
  },

  // =========================
  // Marketing
  // =========================
  {
    id: 13,
    title: 'Social Media Ad Campaign',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312',
  },
  {
    id: 14,
    title: 'Product Launch Campaign',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f',
  },
  {
    id: 15,
    title: 'Email Marketing Strategy',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4',
  },
  {
    id: 16,
    title: 'SEO & Digital Growth',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07',
  },

  // =========================
  // Publishing
  // =========================
  {
    id: 17,
    title: 'Book Cover & Kindle Formatting',
    category: 'Publishing',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c',
  },
  {
    id: 18,
    title: 'Magazine Editorial Design',
    category: 'Publishing',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
  },
  {
    id: 19,
    title: 'Annual Company Report',
    category: 'Publishing',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a',
  },
  {
    id: 20,
    title: 'Children’s Storybook Layout',
    category: 'Publishing',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66',
  },
]
