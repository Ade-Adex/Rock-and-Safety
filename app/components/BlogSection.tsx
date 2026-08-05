'use client'

import Link from 'next/link'
import SectionHeader from '@/app/components/ui/SectionHeader'
import BlogCard from '@/app/components/blog/BlogCard'
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
          <BlogCard key={post._id} post={post} />
        ))}
      </div>
    </section>
  )
}
