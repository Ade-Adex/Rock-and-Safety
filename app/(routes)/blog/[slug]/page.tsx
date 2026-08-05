import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { fetchPostBySlug } from '@/sanity/services/contentService'
import { RelatedPostSummary, TocItem } from '@/app/types/post'

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
    return {
      title: 'Article Not Found',
    }
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
  const post = await fetchPostBySlug(decodedSlug)

  if (!post) {
    notFound()
  }

  return (
    <main className="bg-dark min-h-screen text-foreground py-16 px-4 sm:px-8 md:px-12 lg:px-16">
      <article className="max-w-4xl mx-auto">
        {/* Navigation Back Link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-xs font-bold text-primary hover:underline uppercase inline-flex items-center gap-1.5 transition-colors"
          >
            <span>←</span>
            <span>Back to all posts</span>
          </Link>
        </div>

        {/* Header */}
        <header className="space-y-4 mb-8">
          {post.category && (
            <span className="text-primary text-xs font-bold tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-md border border-primary/20 inline-block">
              {post.category}
            </span>
          )}

          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight text-foreground">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-card-border">
            {/* Author Information */}
            <div className="flex items-center gap-3">
              {post.author?.imageUrl ? (
                <div className="w-11 h-11 rounded-full overflow-hidden relative border border-card-border shrink-0">
                  <Image
                    src={post.author.imageUrl}
                    alt={post.author.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-11 h-11 rounded-full bg-card-bg border border-card-border flex items-center justify-center font-bold text-xs text-primary shrink-0">
                  {post.author?.name ? post.author.name.charAt(0) : 'E'}
                </div>
              )}
              <div>
                <p className="text-sm font-bold text-foreground">
                  {post.author?.name || 'Editorial Team'}
                </p>
                {post.author?.role && (
                  <p className="text-xs text-muted">{post.author.role}</p>
                )}
              </div>
            </div>

            {/* Post Metadata */}
            <div className="text-xs text-muted flex items-center gap-2">
              {post.date && <span>{post.date}</span>}
              {post.readingTime && (
                <>
                  <span>•</span>
                  <span>{post.readingTime}</span>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Feature Image */}
        {post.imageUrl && (
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-10 border border-card-border shadow-md">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        )}

        {/* Description Excerpt */}
        {post.description && (
          <p className="text-base sm:text-lg text-muted italic border-l-2 border-primary pl-4 my-8 leading-relaxed">
            {post.description}
          </p>
        )}

        {/* Table of Contents */}
        {post.tableOfContents && post.tableOfContents.length > 0 && (
          <div className="p-6 bg-card-bg rounded-2xl border border-card-border my-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-primary mb-4">
              Table of Contents
            </h2>
            <nav>
              <ul className="space-y-2.5 text-xs text-muted">
                {post.tableOfContents.map((item: TocItem) => (
                  <li
                    key={item.id}
                    className="hover:text-primary transition-colors"
                  >
                    <a
                      href={`#${item.id}`}
                      className="inline-block hover:underline"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 my-8 pt-6 border-t border-card-border">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium bg-card-bg text-muted px-3 py-1 rounded-full border border-card-border"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Related Articles */}
        {post.relatedArticles && post.relatedArticles.length > 0 && (
          <section className="mt-20 pt-12 border-t border-card-border">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                Related Articles
              </h2>
              <Link
                href="/blog"
                className="text-xs font-extrabold text-primary uppercase hover:underline"
              >
                View all articles →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {post.relatedArticles.map((related: RelatedPostSummary) => {
                const rawSlug = related.slug as unknown
                const relatedSlug =
                  typeof rawSlug === 'string'
                    ? rawSlug
                    : (rawSlug as { current?: string })?.current || related._id

                const relatedHref = relatedSlug ? `/blog/${relatedSlug}` : '#'

                return (
                  <Link
                    key={related._id}
                    href={relatedHref}
                    className="group bg-card-bg p-4 rounded-2xl border border-card-border hover:border-primary/50 transition-all flex gap-4 items-center shadow-sm hover:shadow-md"
                  >
                    {related.imageUrl ? (
                      <div className="w-20 h-20 relative rounded-xl overflow-hidden shrink-0 bg-card-border">
                        <Image
                          src={related.imageUrl}
                          alt={related.title}
                          fill
                          sizes="80px"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className="w-20 h-20 rounded-xl bg-card-border flex items-center justify-center text-[10px] text-muted shrink-0">
                        No Image
                      </div>
                    )}

                    <div className="overflow-hidden">
                      {related.category && (
                        <span className="text-[10px] text-primary font-bold uppercase tracking-wider block mb-1">
                          {related.category}
                        </span>
                      )}
                      <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                        {related.title}
                      </h3>
                      {related.date && (
                        <p className="text-[11px] text-muted mt-1.5">
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
    </main>
  )
}
