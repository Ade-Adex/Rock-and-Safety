export type CategoryType =
  | 'Web Development'
  | 'Branding'
  | 'UI/UX Design'
  | 'Marketing'
  | 'Publishing'
  | string

export interface PortfolioItem {
  _id: string
  title: string
  category: CategoryType
  image: string
  link?: string
}
