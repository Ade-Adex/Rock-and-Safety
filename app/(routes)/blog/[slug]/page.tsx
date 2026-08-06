import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import {
  fetchPostBySlug,
  fetchRecentPosts,
  fetchCategoryCounts,
  fetchServices,
} from '@/sanity/services/contentService'
import { RelatedPostSummary } from '@/app/types/post'
import PostBodyRenderer from '@/app/components/blog/PostBodyRenderer'
import BlogAuthorBio from '@/app/components/blog/BlogAuthorBio'
import BlogSidebar from '@/app/components/blog/BlogSidebar'
import { formatDate } from '@/app/lib/utils'

interface BlogDetailsPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: BlogDetailsPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const rawSlug = resolvedParams?.slug
  const slug = typeof rawSlug === 'string' ? rawSlug : ''

  if (!slug) return { title: 'Article Not Found' }

  const decodedSlug = decodeURIComponent(slug)
  const post = await fetchPostBySlug(decodedSlug)

  if (!post) return { title: 'Article Not Found' }

  const title = typeof post.title === 'string' ? post.title : 'Article'
  const description =
    typeof post.description === 'string' ? post.description : ''
  const image = typeof post.imageUrl === 'string' ? post.imageUrl : null

  return {
    title: `${title} | Journal`,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.publishedAt || post.date,
      images: image ? [{ url: image }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : [],
    },
    alternates: post.canonicalUrl
      ? { canonical: post.canonicalUrl }
      : undefined,
  }
}

export default async function BlogDetailsPage({
  params,
}: BlogDetailsPageProps) {
  const resolvedParams = await params
  const rawSlug = resolvedParams?.slug
  const slug = typeof rawSlug === 'string' ? rawSlug : ''

  if (!slug) notFound()

  const decodedSlug = decodeURIComponent(slug)

  const [post, recentPosts, categories, services] = await Promise.all([
    fetchPostBySlug(decodedSlug),
    fetchRecentPosts(4),
    fetchCategoryCounts(),
    fetchServices(),
  ])

  if (!post) notFound()

  const authorName =
    typeof post.author === 'string'
      ? post.author
      : post.author?.name || 'Rock and Safety Marketing Hub'

  const categoryName =
    typeof post.category === 'string'
      ? post.category
      : (post.category as { title?: string } | undefined)?.title || null

  return (
    <main className="bg-dark min-h-screen text-foreground py-6 sm:py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center text-xs text-muted mb-6 space-x-2 overflow-x-auto whitespace-nowrap pb-2 sm:pb-0">
          <Link
            href="/"
            className="hover:text-primary transition-colors shrink-0"
          >
            Home
          </Link>
          <span>›</span>
          <Link
            href="/blog"
            className="hover:text-primary transition-colors shrink-0"
          >
            Blog
          </Link>
          <span>›</span>
          {categoryName && (
            <>
              <Link
                href={`/blog?category=${encodeURIComponent(categoryName)}`}
                className="hover:text-primary transition-colors shrink-0"
              >
                {categoryName}
              </Link>
              <span>›</span>
            </>
          )}
          <span className="text-foreground truncate max-w-37.5 sm:max-w-xs shrink-0">
            {post.title}
          </span>
        </nav>

        {/* MOBILE ONLY TOP SECTION: Search & Categories */}
        <div className="block lg:hidden space-y-6 mb-8">
          {/* Mobile Search Widget */}
          <div className="p-4 sm:p-5 bg-card-bg rounded-2xl border border-card-border shadow-sm">
            <form
              action="/blog"
              method="GET"
              className="flex items-center gap-2"
            >
              <input
                type="text"
                name="search"
                placeholder="Search articles..."
                className="w-full bg-dark border border-card-border rounded-xl px-3.5 py-2 text-xs text-foreground focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="bg-primary text-dark font-bold text-xs px-4 py-2 rounded-xl hover:bg-primary/90 transition-colors uppercase tracking-wider shrink-0"
              >
                Search
              </button>
            </form>
          </div>

          {/* Mobile Categories Widget */}
          <div className="p-4 sm:p-5 bg-card-bg rounded-2xl border border-card-border shadow-sm">
            <h3 className="text-sm sm:text-base font-bold text-foreground mb-3 pb-2 border-b border-card-border">
              Categories
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {categories.map((cat) => (
                <Link
                  key={cat.name}
                  href={`/blog?category=${encodeURIComponent(cat.name)}`}
                  className="flex items-center gap-1.5 text-muted hover:text-primary bg-dark px-3 py-1.5 rounded-xl border border-card-border transition-colors"
                >
                  <span>{cat.name}</span>
                  <span className="text-[10px] text-muted/70 bg-card-bg px-1.5 py-0.5 rounded-full">
                    {cat.count}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <article className="lg:col-span-8">
            {categoryName && (
              <span className="bg-accent-gold/20 text-accent-gold text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm border border-accent-gold/30 inline-block mb-4">
                {categoryName}
              </span>
            )}

            <h1 className="text-2xl sm:text-4xl font-extrabold text-foreground leading-tight mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-muted mb-6 pb-4 border-b border-card-border">
              <div>👤 By {authorName}</div>
              <div>📅 {formatDate(post.date)}</div>
              <div>💬 {post.commentCount ?? 0} Comments</div>
              <div>⏱️ {post.readingTime || '7 min read'}</div>
            </div>

            {post.imageUrl && typeof post.imageUrl === 'string' && (
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-8 border border-card-border shadow-lg">
                <Image
                  src={post.imageUrl}
                  alt={post.title || 'Blog post image'}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover"
                />
              </div>
            )}

            {post.description && (
              <p className="text-sm sm:text-base text-muted leading-relaxed mb-6">
                {post.description}
              </p>
            )}

            {/* Interactive Body and Table of Contents */}
            {post.body && (
              <PostBodyRenderer
                body={post.body}
                tableOfContents={post.tableOfContents}
              />
            )}

            {/* In-Article Callout */}
            <div className="p-4 sm:p-5 bg-card-bg rounded-xl border border-l-4 border-primary my-8 shadow-sm">
              <div className="flex items-center gap-2 text-primary font-bold text-sm mb-1">
                <span>🛡️ Solution:</span>
              </div>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Define your ideal customer. Use precision targeting options to
                reach the right audience based on demographics, interests, and
                behaviors.
              </p>
            </div>

            {/* CTA Banner */}
            <div className="p-5 sm:p-8 bg-card-bg rounded-2xl border border-card-border my-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden shadow-md">
              <div className="flex items-center gap-4 z-10">
                <div className="w-12 h-12 rounded-xl bg-accent-gold/20 flex items-center justify-center text-2xl shrink-0 border border-accent-gold/30">
                  🚀
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-foreground">
                    Need Help Running Profitable Ads?
                  </h4>
                  <p className="text-xs text-muted mt-1">
                    We create high-converting campaigns that bring real
                    customers to your business.
                  </p>
                </div>
              </div>
              <Link
                href="/contact"
                className="w-full sm:w-auto text-center z-10 shrink-0 bg-primary hover:bg-primary/90 text-dark font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-md uppercase tracking-wider"
              >
                Get Free Consultation
              </Link>
            </div>

            {/* Author Bio */}
            {/* <BlogAuthorBio author={post.author} /> */}

            {/* Related Articles */}
            {post.relatedArticles && post.relatedArticles.length > 0 && (
              <section className="pt-8 border-t border-card-border">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Related Articles
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {post.relatedArticles.map((related: RelatedPostSummary) => {
                    const rawSlug = related.slug as unknown
                    const relatedSlug =
                      typeof rawSlug === 'string'
                        ? rawSlug
                        : (rawSlug as { current?: string })?.current ||
                          related._id

                    const relatedImg =
                      typeof related.imageUrl === 'string'
                        ? related.imageUrl
                        : null

                    return (
                      <Link
                        key={related._id}
                        href={`/blog/${relatedSlug}`}
                        className="group bg-card-bg p-3.5 rounded-xl border border-card-border hover:border-primary/50 transition-all flex gap-3.5 items-center"
                      >
                        {relatedImg ? (
                          <div className="w-16 h-16 relative rounded-lg overflow-hidden shrink-0 bg-dark">
                            <Image
                              src={relatedImg}
                              alt={related.title || 'Related article'}
                              fill
                              sizes="64px"
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ) : (
                          <div className="w-16 h-16 rounded-lg bg-dark flex items-center justify-center text-[10px] text-muted shrink-0">
                            No Image
                          </div>
                        )}
                        <div>
                          <h4 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                            {related.title}
                          </h4>
                          {related.date && (
                            <p className="text-[10px] text-muted mt-1">
                              {related.date}
                            </p>
                          )}
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </section>
            )}
          </article>

          {/* Modular Sidebar (Search & Category elements stay visible here on desktop view) */}
          <BlogSidebar
            categories={categories}
            recentPosts={recentPosts}
            services={services}
          />
        </div>
      </div>
    </main>
  )
}
