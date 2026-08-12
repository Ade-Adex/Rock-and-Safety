//   app/utils/iconMapper.ts

import { IconType } from 'react-icons'
import {
  FiEye,
  FiAward,
  FiTrendingUp,
  FiUsers,
  FiCreditCard,
  FiFileText,
  FiEdit3,
  FiSearch,
  FiSend,
} from 'react-icons/fi'

const iconMap: Record<string, IconType> = {
  FiEye,
  FiAward,
  FiTrendingUp,
  FiUsers,
  FiCreditCard,
  FiFileText,
  FiEdit3,
  FiSearch,
  FiSend,
}

export const getIconByName = (name?: string): IconType => {
  if (!name || !iconMap[name]) {
    return FiEye
  }
  return iconMap[name]
}