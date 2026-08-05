import Image from 'next/image'
import Link from 'next/link'
import { PostItem } from '@/app/types/post'

interface BlogCardProps {
  post: PostItem
}

export default function BlogCard({ post }: BlogCardProps) {
  // Extract slug value securely regardless of whether Sanity returns a string or an object
  const slugValue =
    typeof post.slug === 'string'
      ? post.slug
      : typeof post.slug === 'object' && post.slug !== null
        ? (post.slug as { current?: string }).current
        : post._id

  const postHref = slugValue ? `/blog/${slugValue}` : '#'

  return (
    <article className="group bg-card-bg rounded-2xl overflow-hidden border border-card-border shadow-md hover:border-primary/50 transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        <Link
          href={postHref}
          className="block relative w-full aspect-16/10 overflow-hidden bg-card-border"
        >
          {post.imageUrl ? (
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted text-xs">
              No Image
            </div>
          )}
          {post.category && (
            <span className="absolute top-3 left-3 bg-dark/80 backdrop-blur-md text-accent-gold text-[10px] font-bold px-2.5 py-1 rounded-md border border-card-border uppercase">
              {post.category}
            </span>
          )}
        </Link>

        <div className="p-6">
          <div className="flex items-center gap-3 text-xs text-muted mb-2">
            {post.date && <span>{post.date}</span>}
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
