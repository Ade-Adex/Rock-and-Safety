import Image from 'next/image'

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
    <section className="bg-background text-foreground py-20 px-6 md:px-16">
      <div className="flex justify-between items-end max-w-6xl mx-auto mb-12">
        <div>
          <span className="text-[#cca352] text-xs font-bold uppercase tracking-wider">
            OUR BLOG
          </span>
          <h2 className="text-3xl font-bold mt-2">Latest Insights & Tips</h2>
        </div>
        <a href="#" className="text-xs font-bold hover:text-[#cca352]">
          VIEW ALL POSTS →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {posts.map((post, idx) => (
          <div
            key={idx}
            className="bg-background rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm"
          >
            <Image
              src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a"
              alt="Blog Post"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="text-xs text-gray-400">{post.date}</span>
              <h3 className="font-bold mt-2 mb-4 leading-snug">{post.title}</h3>
              <a
                href="#"
                className="text-xs font-bold text-[#cca352] hover:underline"
              >
                READ MORE →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
