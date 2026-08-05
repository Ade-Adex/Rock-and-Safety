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

interface BlogDetailsPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: BlogDetailsPageProps): Promise<Metadata> {
  const { slug } = await params
  const decodedSlug = decodeURIComponent(slug)
  const post = await fetchPostBySlug(decodedSlug)

  if (!post) return { title: 'Article Not Found' }

  const title = post.seo?.metaTitle || post.title
  const description = post.seo?.metaDescription || post.description
  const image = post.seo?.shareImage || post.imageUrl

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
  const { slug } = await params
  const decodedSlug = decodeURIComponent(slug)

  const [post, recentPosts, categories, services] = await Promise.all([
    fetchPostBySlug(decodedSlug),
    fetchRecentPosts(4),
    fetchCategoryCounts(),
    fetchServices(),
  ])

  if (!post) notFound()

  return (
    <main className="bg-dark min-h-screen text-foreground py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center text-xs text-muted mb-6 space-x-2">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>›</span>
          <Link href="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
          <span>›</span>
          {post.category && (
            <>
              <Link
                href={`/blog?category=${encodeURIComponent(post.category)}`}
                className="hover:text-primary transition-colors"
              >
                {post.category}
              </Link>
              <span>›</span>
            </>
          )}
          <span className="text-foreground truncate max-w-[200px] sm:max-w-xs">
            {post.title}
          </span>
        </nav>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <article className="lg:col-span-8">
            {post.category && (
              <span className="bg-accent-gold/20 text-accent-gold text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm border border-accent-gold/30 inline-block mb-4">
                {post.category}
              </span>
            )}

            <h1 className="text-2xl sm:text-4xl font-extrabold text-foreground leading-tight mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-muted mb-6 pb-4 border-b border-card-border">
              <div>
                👤 By {post.author?.name || 'Rock and Safety Marketing Hub'}
              </div>
              <div>📅 {post.date}</div>
              <div>💬 {post.commentCount ?? 0} Comments</div>
              <div>⏱️ {post.readingTime || '7 min read'}</div>
            </div>

            {post.imageUrl && (
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-8 border border-card-border shadow-lg">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
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
            <div className="p-5 bg-card-bg rounded-xl border-l-4 border-primary border border-card-border my-8 shadow-sm">
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
            <div className="p-6 sm:p-8 bg-card-bg rounded-2xl border border-card-border my-10 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-md">
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
                className="z-10 shrink-0 bg-primary hover:bg-primary/90 text-dark font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-md uppercase tracking-wider"
              >
                Get Free Consultation
              </Link>
            </div>

            {/* Author Bio */}
            <BlogAuthorBio author={post.author} />

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
                    return (
                      <Link
                        key={related._id}
                        href={`/blog/${relatedSlug}`}
                        className="group bg-card-bg p-3.5 rounded-xl border border-card-border hover:border-primary/50 transition-all flex gap-3.5 items-center"
                      >
                        {related.imageUrl ? (
                          <div className="w-16 h-16 relative rounded-lg overflow-hidden shrink-0 bg-dark">
                            <Image
                              src={related.imageUrl}
                              alt={related.title}
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

          {/* Modular Sidebar */}
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
