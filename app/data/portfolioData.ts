export interface PortfolioItem {
  id: number
  title: string
  category:
    | 'Web Design'
    | 'Branding'
    | 'UI/UX Design'
    | 'Marketing'
    | 'Publishing'
  image: string
  link?: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'E-Commerce Storefront',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
  },
  {
    id: 2,
    title: 'Brand Identity & Guidelines',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f',
  },
  {
    id: 3,
    title: 'Mobile Banking App UI',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
  },
  {
    id: 4,
    title: 'Social Media Ad Campaign',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312',
  },
  {
    id: 5,
    title: 'Book Cover & Kindle Formatting',
    category: 'Publishing',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c',
  },
  {
    id: 6,
    title: 'SaaS Platform Redesign',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8',
  },
]
