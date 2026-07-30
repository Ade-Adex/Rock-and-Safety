import { IconType } from 'react-icons'
import {
  FiHome,
  FiBriefcase,
  FiFolder,
  FiMessageSquare,
  FiUsers,
  FiHelpCircle,
  FiBookOpen,
  FiMail,
} from 'react-icons/fi'

export interface NavLink {
  label: string
  href: string
  icon?: IconType
  hideInNavbar?: boolean
  hideInQuickNav?: boolean
  hideInFooter?: boolean
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home', icon: FiHome, hideInFooter: true },
  { label: 'Services', href: '#services', icon: FiBriefcase },
  { label: 'Portfolio', href: '#portfolio', icon: FiFolder },
  {
    label: 'Testimonials',
    href: '#testimonials',
    icon: FiMessageSquare,
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
  { label: 'Blog', href: '#blog', icon: FiBookOpen },
  {
    label: 'FAQ',
    href: '#faq',
    icon: FiHelpCircle,
    hideInNavbar: true,
    hideInFooter: true,
  },
  { label: 'Contact', href: '#contact', icon: FiMail },
]
