import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="bg-dark text-white py-20 px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <span className="text-[#cca352] text-xs font-semibold tracking-widest uppercase">
          WE BUILD BRANDS. WE DRIVE GROWTH.
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-3 leading-tight">
          Grow Your Business with{' '}
          <span className="text-[#cca352]">Digital Marketing</span> That
          Delivers Results
        </h1>
        <p className="text-gray-400 text-sm mt-4 max-w-lg leading-relaxed">
          We help businesses, startups, authors, publishers, churches, and
          entrepreneurs increase their online visibility, attract more
          customers, and grow their revenue.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#"
            className="bg-[#cca352] hover:bg-gold-dark text-black font-semibold text-sm px-6 py-3 rounded flex items-center space-x-2"
          >
            <span>GET STARTED</span>
            <span>→</span>
          </a>
          <a
            href="#"
            className="border border-[#cca352] text-[#cca352] hover:bg-[#cca352] hover:text-black font-semibold text-sm px-6 py-3 rounded transition"
          >
            BOOK A FREE CONSULTATION
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-800 text-xs">
          <div>
            📊 <span className="block font-semibold mt-1">Result Driven</span>
          </div>
          <div>
            💡{' '}
            <span className="block font-semibold mt-1">Creative Solutions</span>
          </div>
          <div>
            🎧{' '}
            <span className="block font-semibold mt-1">Dedicated Support</span>
          </div>
          <div>
            ⏱️{' '}
            <span className="block font-semibold mt-1">On-Time Delivery</span>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center">
        <Image
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Marketing Workspace Mockup"
          width={600}
          height={400}
          className="rounded-lg shadow-2xl object-cover"
        />
      </div>
    </section>
  )
}
