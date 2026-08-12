import { IconType } from 'react-icons'
import {
  FiHome,
  FiInfo,
  FiBriefcase,
  FiFolder,
  FiMessageSquare,
  FiUsers,
  FiHelpCircle,
  FiBookOpen,
  FiMail,
  FiFeather,
  FiAward,
} from 'react-icons/fi'

export interface NavLink {
  label: string
  href: string
  sectionId?: string
  icon?: IconType
  hideInNavbar?: boolean
  hideInQuickNav?: boolean
  hideInFooter?: boolean
  subLinks?: Omit<NavLink, 'subLinks'>[]
}

export const NAV_LINKS: NavLink[] = [
  {
    label: 'Home',
    href: '/',
    sectionId: 'home',
    icon: FiHome,
    hideInFooter: true,
  },
  { label: 'About', href: '/about', icon: FiInfo },
  {
    label: 'Services',
    href: '/#services',
    sectionId: 'services',
    icon: FiBriefcase,
  },
  {
    label: 'Portfolio',
    href: '/portfolio',
    sectionId: 'portfolio',
    icon: FiFolder,
  },
  {
    label: 'Spotlight',
    href: '/spotlight',
    icon: FiFolder,
    subLinks: [
      {
        label: 'Author Spotlight',
        href: '/spotlight?category=Author',
        icon: FiFeather,
      },
      {
        label: 'Business Spotlight',
        href: '/spotlight?category=Business',
        icon: FiAward,
      },
    ],
  },
  {
    label: 'Testimonials',
    href: '/#testimonials',
    sectionId: 'testimonials',
    icon: FiMessageSquare,
    hideInNavbar: true,
    hideInQuickNav: true,
  },
  {
    label: 'Team',
    href: '/#team',
    sectionId: 'team',
    icon: FiUsers,
    hideInNavbar: true,
    hideInFooter: true,
    hideInQuickNav: true,
  },
  {
    label: 'Stats',
    href: '/#stats',
    sectionId: 'stats',
    hideInNavbar: true,
    hideInQuickNav: true,
    hideInFooter: true,
  },
  { label: 'Blog', href: '/blog', sectionId: 'blog', icon: FiBookOpen },
  {
    label: 'FAQ',
    href: '/#faq',
    sectionId: 'faq',
    icon: FiHelpCircle,
    hideInNavbar: true,
    hideInFooter: true,
  },
  {
    label: 'Contact',
    href: '/contact',
    sectionId: 'contact',
    icon: FiMail,
  },
]
