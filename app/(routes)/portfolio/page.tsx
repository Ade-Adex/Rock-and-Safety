import Link from 'next/link'
import SectionHeader from '@/app/components/ui/SectionHeader'
import Button from '@/app/components/ui/Button'
import PortfolioCard from '@/app/components/portfolio/PortfolioCard'
import { fetchPortfolio } from '@/sanity/services/contentService'
import { PortfolioItem } from '@/app/types/portfolio'

interface ProjectsPageProps {
  searchParams: Promise<{
    category?: string
    service?: string
    sort?: 'latest' | 'oldest' | 'title'
  }>
}

const CATEGORIES = [
  'All',
  'Web Development',
  'Branding',
  'UI/UX Design',
  'Marketing',
  'Publishing',
]

export default async function ProjectDetailsPage({
  searchParams,
}: ProjectsPageProps) {
  const resolvedParams = await searchParams
  const categoryQuery = resolvedParams.category || 'All'
  const serviceTitle = resolvedParams.service || 'Service'
  const sortQuery = resolvedParams.sort || 'latest'

  const relatedProjects: PortfolioItem[] = await fetchPortfolio({
    category: categoryQuery,
    sort: sortQuery,
  })

  const createFilterUrl = (newCategory?: string, newSort?: string) => {
    const params = new URLSearchParams()
    if (serviceTitle && serviceTitle !== 'Service')
      params.set('service', serviceTitle)
    params.set('category', newCategory ?? categoryQuery)
    params.set('sort', newSort ?? sortQuery)
    return `?${params.toString()}`
  }

  return (
    <main className="bg-dark min-h-screen text-foreground py-16 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="text-xs">
              ← BACK TO HOME
            </Button>
          </Link>
        </div>

        <SectionHeader
          badge={serviceTitle.toUpperCase()}
          title={`Projects & Work for ${serviceTitle}`}
          centered={false}
        />

        {/* Filter & Sort Controls Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 my-8 pb-6 border-b border-card-border">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = categoryQuery.toLowerCase() === cat.toLowerCase()
              return (
                <Link key={cat} href={createFilterUrl(cat, sortQuery)}>
                  <span
                    className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                      isActive
                        ? 'bg-primary text-black'
                        : 'bg-card-bg text-muted hover:text-foreground border border-card-border'
                    }`}
                  >
                    {cat}
                  </span>
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-muted font-medium">Sort by:</span>
            <div className="flex bg-card-bg border border-card-border rounded-lg p-1">
              <Link
                href={createFilterUrl(categoryQuery, 'latest')}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors ${
                  sortQuery === 'latest'
                    ? 'bg-primary/20 text-primary'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                Latest
              </Link>
              <Link
                href={createFilterUrl(categoryQuery, 'oldest')}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors ${
                  sortQuery === 'oldest'
                    ? 'bg-primary/20 text-primary'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                Oldest
              </Link>
            </div>
          </div>
        </div>

        <p className="text-muted text-sm sm:text-base max-w-3xl mb-8 leading-relaxed">
          Showing {relatedProjects.length} portfolio item
          {relatedProjects.length !== 1 ? 's' : ''} under the{' '}
          <span className="text-accent-gold font-semibold">
            {categoryQuery}
          </span>{' '}
          category sorted by{' '}
          <span className="text-primary font-semibold">{sortQuery}</span>.
        </p>

        {/* Reusable Portfolio Cards Grid (4 columns on lg) */}
        {relatedProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProjects.map((item: PortfolioItem) => (
              <PortfolioCard key={item._id} item={item} variant="standard" />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-card-bg rounded-2xl border border-card-border">
            <p className="text-muted text-base">
              No portfolio items found matching your filter selection.
            </p>
            <div className="mt-6">
              <Link href={createFilterUrl('All', 'latest')}>
                <Button variant="primary">RESET FILTERS</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
