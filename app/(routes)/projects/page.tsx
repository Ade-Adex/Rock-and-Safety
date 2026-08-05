import Image from 'next/image'
import Link from 'next/link'
import SectionHeader from '@/app/components/ui/SectionHeader'
import Button from '@/app/components/ui/Button'
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

  // Fetch filtered & sorted portfolio data straight from Sanity GROQ
  const relatedProjects: PortfolioItem[] = await fetchPortfolio({
    category: categoryQuery,
    sort: sortQuery,
  })

  // Helper to build URL search params safely
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
        {/* Navigation back */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="text-xs">
              ← BACK TO HOME
            </Button>
          </Link>
        </div>

        {/* Section Header */}
        <SectionHeader
          badge={serviceTitle.toUpperCase()}
          title={`Projects & Work for ${serviceTitle}`}
          centered={false}
        />

        {/* Filter & Sort Controls Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 my-8 pb-6 border-b border-card-border">
          {/* Category Pills */}
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

          {/* Sort Dropdown / Links */}
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

        {/* Projects Grid */}
        {relatedProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProjects.map((item: PortfolioItem) => (
              <div
                key={item._id}
                className="group rounded-xl overflow-hidden bg-card-bg border border-card-border flex flex-col justify-between hover:border-primary/50 transition-all duration-300 shadow-lg"
              >
                <div className="relative aspect-16/9 w-full overflow-hidden bg-card-border">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted text-xs">
                      No Image Available
                    </div>
                  )}
                  {item.category && (
                    <span className="absolute top-3 left-3 bg-dark/80 backdrop-blur-md text-accent-gold text-[10px] font-bold px-2.5 py-1 rounded-md border border-card-border uppercase tracking-wider">
                      {item.category}
                    </span>
                  )}
                </div>

                <div className="p-6 flex flex-col grow justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <div className="mt-6 pt-4 border-t border-card-border/60 flex items-center justify-between">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                      >
                        VIEW LIVE DEMO →
                      </a>
                    ) : (
                      <span className="text-xs font-semibold text-muted flex items-center gap-1">
                        CASE STUDY →
                      </span>
                    )}
                  </div>
                </div>
              </div>
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
