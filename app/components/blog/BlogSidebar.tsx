import Image from 'next/image'
import Link from 'next/link'
import { CategoryCount, PostItem } from '@/app/types/post'
import { ServiceItem } from '@/app/types/service'

interface BlogSidebarProps {
  categories: CategoryCount[]
  recentPosts: PostItem[]
  services: ServiceItem[]
}

export default function BlogSidebar({
  categories,
  recentPosts,
  services,
}: BlogSidebarProps) {
  // Defensive: never render the same category twice, even if the incoming
  // list contains duplicates with different casing / whitespace
  const seen = new Set<string>()
  const uniqueCategories = categories.filter((cat) => {
    if (!cat?.name) return false
    const key = cat.name.trim().toLowerCase()
    if (!key || seen.has(key)) return false
    seen.add(key)
    return true
  })

  return (
    <aside className="lg:col-span-4 space-y-8">
      {/* Search Widget */}
      <div className="hidden lg:block p-5 bg-card-bg rounded-2xl border border-card-border shadow-sm">
        <form action="/blog" method="GET" className="flex items-center gap-2">
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
      <div className="hidden lg:block p-5 bg-card-bg rounded-2xl border border-card-border shadow-sm">
        <h3 className="text-base font-bold text-foreground mb-4 pb-2 border-b border-card-border">
          Categories
        </h3>
        <ul className="space-y-2.5 text-xs">
          {uniqueCategories.map((cat) => (
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
                <p className="text-[10px] text-muted mt-1">{rPost.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Lead Magnet */}
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

      {/* Services List */}
      <div className="p-5 bg-card-bg rounded-2xl border border-card-border shadow-sm">
        <h3 className="text-base font-bold text-foreground mb-4 pb-2 border-b border-card-border">
          Our Services
        </h3>
        <ul className="space-y-2.5 text-xs">
          {services.map((srv) => (
            <li key={srv._id}>
              <Link
                href="/services"
                className="flex items-center gap-2.5 text-muted hover:text-primary transition-colors py-1 group"
              >
                {srv.icon ? (
                  <span className="text-primary text-sm shrink-0">
                    {srv.icon}
                  </span>
                ) : (
                  <svg
                    className="w-4 h-4 text-primary shrink-0 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
                <span className="truncate">{srv.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Callout */}
      <div className="p-6 bg-card-bg rounded-2xl border border-card-border shadow-sm text-center">
        <h3 className="text-base font-bold text-foreground">Need Help?</h3>
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
  )
}
