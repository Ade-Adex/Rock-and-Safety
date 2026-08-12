export interface PortfolioItem {
  id: number
  title: string
  category:
    'Web Development' | 'Branding' | 'UI/UX Design' | 'Marketing' | 'Publishing'
  image: string
  link?: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: '/images/portfolio/web-dev.jpg',
    link: 'https://example.com/project-1',
  },
  {
    id: 2,
    title: 'Brand Identity & Guidelines',
    category: 'Branding',
    image: '/images/portfolio/branding.jpg',
    link: 'https://example.com/project-2',
  },
  {
    id: 3,
    title: 'Mobile App Redesign',
    category: 'UI/UX Design',
    image: '/images/portfolio/uiux.jpg',
    link: 'https://example.com/project-3',
  },
  {
    id: 4,
    title: 'Digital Marketing Campaign',
    category: 'Marketing',
    image: '/images/portfolio/marketing.jpg',
  },
  {
    id: 5,
    title: 'Author Book Publishing & Design',
    category: 'Publishing',
    image: '/images/portfolio/publishing.jpg',
    link: 'https://example.com/project-5',
  },
]
