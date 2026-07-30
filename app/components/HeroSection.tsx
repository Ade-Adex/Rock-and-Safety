import Image from 'next/image'
import Link from 'next/link'
import MarketMock from '@/public/Images/Market.jpeg'
import WhatsAppButton from '@/app/components/WhatsAppButton'
import Button from '@/app/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="bg-dark text-foreground py-8 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left Text Content */}
        <div className="flex flex-col items-start text-left">
          <span className="inline-block bg-primary/10 text-primary text-xs font-extrabold tracking-widest uppercase px-3 py-1.5 rounded-full border border-primary/20 mb-4">
            WE BUILD BRANDS. WE DRIVE GROWTH.
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight sm:leading-snug text-foreground">
            Grow Your Business with{' '}
            <span className="text-primary">Digital Marketing</span> That
            Delivers Results
          </h1>
          <p className="text-muted text-sm sm:text-base mt-4 max-w-xl leading-relaxed">
            We help businesses, startups, authors, publishers, churches, and
            entrepreneurs increase their online visibility, attract more
            customers, and grow their revenue.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row w-full sm:w-auto gap-4">
            <Link href="#get-started">
              <Button variant="primary" className="w-full sm:w-auto">
                <span>GET STARTED</span>
                <span className="ml-2">→</span>
              </Button>
            </Link>
            <WhatsAppButton />
          </div>

          {/* Feature Highlights Grid */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 sm:mt-12 pt-8 border-t border-card-border text-xs text-muted">
            <div className="flex flex-col items-start">
              <span className="text-xl">📊</span>
              <span className="font-semibold mt-1.5 text-foreground">
                Result Driven
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xl">💡</span>
              <span className="font-semibold mt-1.5 text-foreground">
                Creative Solutions
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xl">🎧</span>
              <span className="font-semibold mt-1.5 text-foreground">
                Dedicated Support
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xl">⏱️</span>
              <span className="font-semibold mt-1.5 text-foreground">
                On-Time Delivery
              </span>
            </div>
          </div>
        </div>

        {/* Right Media Display */}
        <div className="relative w-full aspect-4/3 sm:aspect-video lg:aspect-square max-h-120 rounded-2xl overflow-hidden shadow-2xl border border-card-border">
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
