import Image from 'next/image'
import Link from 'next/link'

export default function PortfolioSection() {
  const tabs = [
    'All',
    'Web Design',
    'Branding',
    'UI/UX Design',
    'Marketing',
    'Publishing',
  ]

  return (
    <section className="bg-dark text-white py-16 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <span className="text-accent-gold text-xs font-bold uppercase tracking-widest">
          OUR PORTFOLIO
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2">
          Our Recent Projects
        </h2>
      </div>

      {/* Tabs Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-3xl mx-auto">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
              i === 0
                ? 'bg-accent-gold text-black shadow-md shadow-accent-gold/20'
                : 'bg-gray-900 text-gray-300 border border-gray-800 hover:bg-gray-800 hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-7xl mx-auto">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="relative group rounded-xl overflow-hidden bg-gray-900 border border-gray-800 aspect-4/3 sm:aspect-square"
          >
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="Project image"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
              className="object-cover group-hover:scale-110 transition duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-xs font-bold text-white tracking-wide">
                Project View →
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="#portfolio"
          className="inline-block border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-black font-bold text-xs px-8 py-3.5 rounded-md transition-all active:scale-[0.98] uppercase"
        >
          VIEW ALL PROJECTS →
        </Link>
      </div>
    </section>
  )
}
