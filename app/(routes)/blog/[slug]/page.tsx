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
import { TocItem, RelatedPostSummary } from '@/app/types/post'

interface BlogDetailsPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({
  params,
}: BlogDetailsPageProps): Promise<Metadata> {
  const { slug } = await params
  const decodedSlug = decodeURIComponent(slug)
  const post = await fetchPostBySlug(decodedSlug)

  if (!post) {
    return { title: 'Article Not Found' }
  }

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

  if (!post) {
    notFound()
  }

  return (
    <main className="bg-dark min-h-screen text-foreground py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
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

        {/* Main Grid: Article Content (Left) + Sidebar (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content Area */}
          <article className="lg:col-span-8">
            {/* Category Tag */}
            {post.category && (
              <span className="bg-accent-gold/20 text-accent-gold text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm border border-accent-gold/30 inline-block mb-4">
                {post.category}
              </span>
            )}

            {/* Article Title */}
            <h1 className="text-2xl sm:text-4xl font-extrabold text-foreground leading-tight mb-4">
              {post.title}
            </h1>

            {/* Meta Bar */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted mb-6 pb-4 border-b border-card-border">
              <div className="flex items-center gap-1.5">
                <span className="text-primary">👤</span>
                <span>
                  By {post.author?.name || 'Rock and Safety Marketing Hub'}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-primary">📅</span>
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-primary">💬</span>
                <span>{post.commentCount ?? 0} Comments</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-primary">⏱️</span>
                <span>{post.readingTime || '7 min read'}</span>
              </div>
            </div>

            {/* Feature Image */}
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

            {/* Excerpt / Intro */}
            {post.description && (
              <p className="text-sm sm:text-base text-muted leading-relaxed mb-6">
                {post.description}
              </p>
            )}

            {/* Table of Contents */}
            {post.tableOfContents && post.tableOfContents.length > 0 && (
              <div className="p-6 bg-card-bg rounded-2xl border border-card-border mb-8">
                <h3 className="text-base font-bold text-foreground mb-4">
                  Table of Contents
                </h3>
                <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-primary font-medium">
                  {post.tableOfContents.map((item: TocItem, idx: number) => (
                    <li key={item.id} className="truncate">
                      <a href={`#${item.id}`} className="hover:underline">
                        {idx + 1}. {item.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Example Solution/Callout Box matching Screenshot */}
            <div className="p-5 bg-card-bg rounded-xl border-l-4 border-primary border border-card-border mb-8 shadow-sm">
              <div className="flex items-center gap-2 text-primary font-bold text-sm mb-1">
                <span>🛡️ Solution:</span>
              </div>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Define your ideal customer. Use precision targeting options to
                reach the right audience based on demographics, interests, and
                behaviors.
              </p>
            </div>

            {/* In-Article CTA Banner matching Screenshot */}
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

            {/* Social Share Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-card-border mb-10">
              <span className="text-xs font-bold text-foreground uppercase tracking-wider mr-2">
                Share This Post:
              </span>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  post.canonicalUrl || '',
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1877F2] text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 hover:opacity-90 transition-opacity"
              >
                <span>f</span> Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  post.canonicalUrl || '',
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-card-border hover:opacity-90 transition-opacity"
              >
                <span>𝕏</span> X (Twitter)
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                  post.canonicalUrl || '',
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0A66C2] text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 hover:opacity-90 transition-opacity"
              >
                <span>in</span> LinkedIn
              </a>
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                  post.title + ' ' + (post.canonicalUrl || ''),
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 hover:opacity-90 transition-opacity"
              >
                <span>💬</span> WhatsApp
              </a>
            </div>

            {/* Author Bio Box */}
            <div className="p-6 bg-card-bg rounded-2xl border border-card-border flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-12">
              {post.author?.imageUrl ? (
                <div className="w-16 h-16 rounded-full overflow-hidden relative shrink-0 border border-card-border">
                  <Image
                    src={post.author.imageUrl}
                    alt={post.author.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-16 h-16 rounded-full bg-dark border border-card-border flex items-center justify-center text-xl font-bold text-primary shrink-0">
                  {post.author?.name ? post.author.name.charAt(0) : 'R'}
                </div>
              )}
              <div className="text-center sm:text-left">
                <h4 className="font-bold text-foreground text-base">
                  {post.author?.name || 'Rock and Safety Marketing Hub'}
                </h4>
                <p className="text-xs text-muted mt-1 leading-relaxed">
                  {post.author?.bio ||
                    'We help businesses grow online with result-driven websites, Facebook ads, and digital marketing strategies that deliver real results.'}
                </p>
              </div>
            </div>

            {/* Related Articles Section */}
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
                        <div className="overflow-hidden">
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

          {/* Sidebar Area */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Search Widget */}
            <div className="p-5 bg-card-bg rounded-2xl border border-card-border shadow-sm">
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
                  className="bg-primary text-dark font-bold text-xs px-4 py-2 rounded-xl hover:bg-primary/90 transition-colors uppercase tracking-wider"
                >
                  Search
                </button>
              </form>
            </div>

            {/* Categories Widget */}
            <div className="p-5 bg-card-bg rounded-2xl border border-card-border shadow-sm">
              <h3 className="text-base font-bold text-foreground mb-4 pb-2 border-b border-card-border">
                Categories
              </h3>
              <ul className="space-y-2.5 text-xs">
                {categories.map((cat) => (
                  <li key={cat.name}>
                    <Link
                      href={`/blog?category=${encodeURIComponent(cat.name)}`}
                      className="flex items-center justify-between text-muted hover:text-primary transition-colors py-1"
                    >
                      <span>{cat.name}</span>
                      <span className="text-[11px] text-muted/70 bg-dark px-2 py-0.5 rounded-full border border-card-border">
                        ({cat.count})
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts Widget */}
            <div className="p-5 bg-card-bg rounded-2xl border border-card-border shadow-sm">
              <h3 className="text-base font-bold text-foreground mb-4 pb-2 border-b border-card-border">
                Recent Posts
              </h3>
              <div className="space-y-4">
                {recentPosts.map((rPost) => (
                  <Link
                    key={rPost._id}
                    href={`/blog/${rPost.slug}`}
                    className="flex items-center gap-3 group"
                  >
                    {rPost.imageUrl ? (
                      <div className="w-14 h-14 relative rounded-xl overflow-hidden shrink-0 bg-dark border border-card-border">
                        <Image
                          src={rPost.imageUrl}
                          alt={rPost.title}
                          fill
                          sizes="56px"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-xl bg-dark flex items-center justify-center text-[10px] text-muted shrink-0 border border-card-border">
                        No Image
                      </div>
                    )}
                    <div>
                      <h4 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                        {rPost.title}
                      </h4>
                      <p className="text-[10px] text-muted mt-1">
                        {rPost.date}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Lead Magnet / Newsletter Widget */}
            <div className="p-6 bg-card-bg rounded-2xl border border-card-border shadow-sm text-center relative overflow-hidden">
              <h3 className="text-base font-bold text-foreground">
                Get Our Free Marketing Guide
              </h3>
              <p className="text-xs text-muted mt-2 mb-4 leading-relaxed">
                Join our newsletter and get our FREE guide on how to grow your
                business online.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full bg-dark border border-card-border rounded-xl px-3.5 py-2.5 text-xs text-foreground focus:outline-none focus:border-primary text-center"
                />
                <button
                  type="submit"
                  className="w-full bg-primary text-dark font-bold text-xs py-2.5 rounded-xl hover:bg-primary/90 transition-colors uppercase tracking-wider"
                >
                  Get My Free Guide
                </button>
              </form>
              <p className="text-[10px] text-muted/60 mt-3">
                No spam, unsubscribe anytime.
              </p>
            </div>

            {/* Our Services Quick List */}
            <div className="p-5 bg-card-bg rounded-2xl border border-card-border shadow-sm">
              <h3 className="text-base font-bold text-foreground mb-4 pb-2 border-b border-card-border">
                Our Services
              </h3>
              <ul className="space-y-2.5 text-xs">
                {services.map((srv) => (
                  <li key={srv._id}>
                    <Link
                      href="/services"
                      className="flex items-center gap-2 text-muted hover:text-primary transition-colors py-1"
                    >
                      <span className="text-primary">📄</span>
                      <span>{srv.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Box */}
            <div className="p-6 bg-card-bg rounded-2xl border border-card-border shadow-sm text-center">
              <h3 className="text-base font-bold text-foreground">
                Need Help?
              </h3>
              <p className="text-xs text-muted mt-1 mb-4">
                Have a project in mind? Let&apos;s work together.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-accent-gold text-dark font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-accent-gold/90 transition-colors uppercase tracking-wider"
              >
                Contact Us Now →
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
