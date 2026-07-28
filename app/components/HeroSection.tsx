import Image from 'next/image'
import Link from 'next/link'
import MarketMock from '@/public/Images/Market.jpeg'

export default function HeroSection() {
  return (
    <section className="bg-dark text-white py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left Text Content */}
        <div className="flex flex-col items-start text-left">
          <span className="inline-block bg-accent-gold/10 text-accent-gold text-xs font-extrabold tracking-widest uppercase px-3 py-1.5 rounded-full border border-accent-gold/20 mb-4">
            WE BUILD BRANDS. WE DRIVE GROWTH.
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight sm:leading-snug">
            Grow Your Business with{' '}
            <span className="text-accent-gold">Digital Marketing</span> That
            Delivers Results
          </h1>
          <p className="text-gray-400 text-sm sm:text-base mt-4 max-w-xl leading-relaxed">
            We help businesses, startups, authors, publishers, churches, and
            entrepreneurs increase their online visibility, attract more
            customers, and grow their revenue.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row w-full sm:w-auto gap-4">
            <Link
              href="#get-started"
              className="bg-accent-gold hover:bg-gold-dark text-black font-extrabold text-sm px-7 py-3.5 rounded-md flex items-center justify-center space-x-2 transition-all shadow-lg hover:shadow-accent-gold/20 active:scale-[0.98]"
            >
              <span>GET STARTED</span>
              <span>→</span>
            </Link>
            <Link
              href="#consultation"
              className="border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-black font-extrabold text-sm px-7 py-3.5 rounded-md text-center transition-all active:scale-[0.98]"
            >
              BOOK A FREE CONSULTATION
            </Link>
          </div>

          {/* Feature Highlights Grid */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 sm:mt-12 pt-8 border-t border-gray-800/80 text-xs text-gray-300">
            <div className="flex flex-col items-start">
              <span className="text-xl">📊</span>
              <span className="font-semibold mt-1.5 text-white">
                Result Driven
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xl">💡</span>
              <span className="font-semibold mt-1.5 text-white">
                Creative Solutions
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xl">🎧</span>
              <span className="font-semibold mt-1.5 text-white">
                Dedicated Support
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xl">⏱️</span>
              <span className="font-semibold mt-1.5 text-white">
                On-Time Delivery
              </span>
            </div>
          </div>
        </div>

        {/* Right Media Display */}
        <div className="relative w-full aspect-4/3 sm:aspect-video lg:aspect-square max-h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
          <Image
            src={MarketMock}
            alt="Marketing Workspace Mockup"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
