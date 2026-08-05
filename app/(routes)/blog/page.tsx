import Link from 'next/link'
import SectionHeader from '@/app/components/ui/SectionHeader'
import Button from '@/app/components/ui/Button'
import BlogCard from '@/app/components/blog/BlogCard'
import { fetchFilteredPosts } from '@/sanity/services/contentService'
import { PostItem } from '@/app/types/post'

interface BlogPageProps {
  searchParams: Promise<{
    category?: string
    sort?: 'latest' | 'oldest'
    search?: string
  }>
}

const CATEGORIES = [
  'All',
  'Technology',
  'Design',
  'Business',
  'Marketing',
  'Engineering',
]

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const resolvedParams = await searchParams
  const categoryQuery = resolvedParams.category || 'All'
  const sortQuery = resolvedParams.sort || 'latest'
  const searchQuery = resolvedParams.search || ''

  const posts: PostItem[] = await fetchFilteredPosts({
    category: categoryQuery,
    sort: sortQuery,
    search: searchQuery,
  })

  const createFilterUrl = (cat?: string, sort?: string) => {
    const params = new URLSearchParams()
    params.set('category', cat ?? categoryQuery)
    params.set('sort', sort ?? sortQuery)
    if (searchQuery) params.set('search', searchQuery)
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
          badge="OUR JOURNAL"
          title="Insights, Engineering & Design"
          centered={false}
        />

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 my-8 pb-6 border-b border-card-border">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = categoryQuery.toLowerCase() === cat.toLowerCase()
              return (
                <Link key={cat} href={createFilterUrl(cat, sortQuery)}>
                  <span
                    className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
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
            <span className="text-xs text-muted font-medium">Sort:</span>
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

        {/* Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-card-bg rounded-2xl border border-card-border">
            <p className="text-muted text-base">
              No articles found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
