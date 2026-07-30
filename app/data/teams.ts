import { StaticImageData } from 'next/image'
import Emma from '@/public/Images/Emma.jpeg'
import Tosin from '@/public/Images/Tosin.jpeg'
import Adex from '@/public/Images/Adex.png'
import Akolade from '@/public/Images/Akolade.jpeg'
import Tolu from '@/public/Images/Tolu.jpeg'
import Esther from '@/public/Images/Esther.png'

export interface TeamMember {
  name: string
  role: string
  img: StaticImageData
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Solomon Oluwatosin',
    role: 'CEO | Product Manager / UI/UX',
    img: Tosin,
  },
  { name: 'Amole Adeolu', role: 'Software Developer', img: Adex },
  { name: 'Akolade Rilwan', role: ' Sales Funnel Expert', img: Akolade },
  { name: 'Toluwalase Oyenike', role: 'Copywriter', img: Tolu },
  { name: 'Tolulope Esther Adeyemi', role: 'Facebook Ads Expert', img: Esther },
]
