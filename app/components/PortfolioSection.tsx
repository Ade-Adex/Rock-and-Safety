import Image from 'next/image'

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
    <section className="bg-dark text-white py-20 px-6 md:px-16">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-[#cca352] text-xs font-bold uppercase tracking-wider">
          OUR PORTFOLIO
        </span>
        <h2 className="text-3xl font-bold mt-2">Our Recent Projects</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-12 text-xs">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded transition ${
              i === 0
                ? 'bg-[#cca352] text-black font-semibold'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 max-w-7xl mx-auto">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="relative rounded overflow-hidden group bg-gray-900"
          >
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="Project image"
              width={300}
              height={200}
              className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="#"
          className="inline-block border border-[#cca352] text-[#cca352] hover:bg-[#cca352] hover:text-black font-semibold text-xs px-6 py-3 rounded transition"
        >
          VIEW ALL PROJECTS →
        </a>
      </div>
    </section>
  )
}
