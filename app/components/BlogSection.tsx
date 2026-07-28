import Image from 'next/image'
import Link from 'next/link'

const posts = [
  {
    title: '10 Digital Marketing Strategies That Drive Real Results',
    date: 'May 10, 2026',
  },
  {
    title: 'Why Your Business Needs a Professional Website',
    date: 'May 12, 2026',
  },
  {
    title: 'How Authors Can Market Their Books Successfully Online',
    date: 'May 15, 2026',
  },
]

export default function BlogSection() {
  return (
    <section className="bg-card-bg text-foreground py-16 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between max-w-6xl mx-auto mb-10 sm:mb-12 gap-4">
        <div>
          <span className="text-accent-gold text-xs font-bold uppercase tracking-widest">
            OUR BLOG
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2 text-gray-900">
            Latest Insights & Tips
          </h2>
        </div>
        <Link
          href="#blog"
          className="text-xs font-bold text-accent-gold hover:underline flex items-center space-x-1 self-start sm:self-auto uppercase"
        >
          <span>VIEW ALL POSTS</span>
          <span>→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {posts.map((post, idx) => (
          <article
            key={idx}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            <div className="relative w-full aspect-16/10 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a"
                alt="Blog Post"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <span className="text-xs text-gray-400 font-medium">
                  {post.date}
                </span>
                <h3 className="font-bold text-base mt-2 mb-4 leading-snug text-gray-900 group-hover:text-accent-gold transition-colors">
                  {post.title}
                </h3>
              </div>
              <Link
                href="#blog"
                className="text-xs font-extrabold text-accent-gold inline-flex items-center space-x-1 mt-2 uppercase"
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
