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
  icon?: IconType
  hideInNavbar?: boolean
  hideInQuickNav?: boolean
  hideInFooter?: boolean
  subLinks?: Omit<NavLink, 'subLinks'>[]
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/', icon: FiHome, hideInFooter: true },
  { label: 'About', href: '/about', icon: FiInfo },
  { label: 'Services', href: '/services', icon: FiBriefcase },
  {
    label: 'Portfolio ',
    href: '/portfolio',
    icon: FiFolder,
  },
  {
    label: 'Spotlight',
    href: '/Spotlight',
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
    href: '#testimonials',
    icon: FiMessageSquare,
    hideInNavbar: true, // Removed from Navbar
    hideInQuickNav: true,
  },
  {
    label: 'Team',
    href: '#team',
    icon: FiUsers,
    hideInNavbar: true,
    hideInFooter: true,
    hideInQuickNav: true,
  },
  {
    label: 'Stats',
    href: '#stats',
    hideInNavbar: true,
    hideInQuickNav: true,
    hideInFooter: true,
  },
  { label: 'Blog', href: '/blog', icon: FiBookOpen },
  {
    label: 'FAQ',
    href: '#faq',
    icon: FiHelpCircle,
    hideInNavbar: true,
    hideInFooter: true,
  },
  { label: 'Contact', href: '/contact', icon: FiMail },
]
