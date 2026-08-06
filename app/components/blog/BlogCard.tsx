import Image from 'next/image'
import Link from 'next/link'
import { PostItem } from '@/app/types/post'
import { formatDate } from '@/app/lib/utils'

interface BlogCardProps {
  post: PostItem
}

export default function BlogCard({ post }: BlogCardProps) {
  const rawSlug = post.slug as unknown
  const slugValue =
    typeof rawSlug === 'string'
      ? rawSlug
      : (rawSlug as { current?: string })?.current || post._id

  const postHref = slugValue ? `/blog/${slugValue}` : '#'
  const imageUrl = typeof post.imageUrl === 'string' ? post.imageUrl : null
  const categoryName =
    typeof post.category === 'string'
      ? post.category
      : (post.category as { title?: string } | undefined)?.title || null

  return (
    <article className="group bg-card-bg rounded-2xl overflow-hidden border border-card-border shadow-md hover:border-primary/50 transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        <Link
          href={postHref}
          className="block relative w-full aspect-16/10 overflow-hidden bg-card-border"
        >
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={post.title || 'Blog card image'}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted text-xs">
              No Image
            </div>
          )}
          {categoryName && (
            <span className="absolute top-3 left-3 bg-dark/80 backdrop-blur-md text-accent-gold text-[10px] font-bold px-2.5 py-1 rounded-md border border-card-border uppercase">
              {categoryName}
            </span>
          )}
        </Link>

        <div className="p-6">
          <div className="flex items-center gap-3 text-xs text-muted mb-2">
            {post.date && <span>{formatDate(post.date)}</span>}
            {post.readingTime && (
              <>
                <span>•</span>
                <span>{post.readingTime}</span>
              </>
            )}
          </div>
          <h3 className="font-bold text-lg leading-snug text-foreground group-hover:text-primary transition-colors">
            <Link href={postHref}>{post.title}</Link>
          </h3>
          {post.description && (
            <p className="text-muted text-xs mt-3 line-clamp-2 leading-relaxed">
              {post.description}
            </p>
          )}
        </div>
      </div>

      <div className="p-6 pt-0">
        <Link
          href={postHref}
          className="text-xs font-bold text-primary inline-flex items-center space-x-1 uppercase hover:underline"
        >
          <span>READ ARTICLE</span>
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  )
}
