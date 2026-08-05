'use client'

import Image from 'next/image'
import Link from 'next/link'
import SectionHeader from '@/app/components/ui/SectionHeader'
import { PostItem } from '@/app/types/post'

interface BlogSectionProps {
  posts: PostItem[]
}

export default function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section className="bg-card-bg text-foreground py-12 px-4 sm:px-8 md:px-12 lg:px-16 border-t border-card-border">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between max-w-6xl mx-auto gap-4">
        <div className="w-full md:w-1/2">
          <SectionHeader
            badge="OUR BLOG"
            title="Latest Insights & Tips"
            centered={false}
          />
        </div>
        <Link
          href="/blog"
          className="hidden md:flex text-xs font-bold text-primary hover:underline items-center space-x-1 self-start sm:self-auto uppercase mb-12 sm:mb-16"
        >
          <span>VIEW ALL POSTS</span>
          <span>→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 max-w-6xl mx-auto">
        {posts.map((post) => (
          <article
            key={post._id}
            className="group bg-dark rounded-2xl overflow-hidden border border-card-border shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative w-full aspect-16/10 overflow-hidden">
                {post.imageUrl ? (
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-card-border flex items-center justify-center text-muted">
                    No Image
                  </div>
                )}
              </div>
              <div className="p-6">
                <span className="text-xs text-muted font-medium">
                  {post.date}
                </span>
                <h3 className="font-bold text-base mt-2 leading-snug text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
              </div>
            </div>
            <div className="px-6 pb-6">
              <Link
                href="/blog"
                className="text-xs font-extrabold text-primary inline-flex items-center space-x-1 uppercase"
              >
                <span>READ MORE</span>
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
