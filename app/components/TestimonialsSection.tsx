'use client'

import Image from 'next/image'
import Link from 'next/link'
import SectionHeader from '@/app/components/ui/SectionHeader'
import Button from '@/app/components/ui/Button'
import { TestimonialItem } from '@/app/types/testimonial'

interface TestimonialsSectionProps {
  testimonials: TestimonialItem[]
}

export default function TestimonialsSection({
  testimonials = [],
}: TestimonialsSectionProps) {
  if (!testimonials || testimonials.length === 0) return null

  // Duplicate items for continuous marquee loop
  const doubleTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="bg-surface-white py-12 border-b border-surface-white-border overflow-hidden">
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="space-y-6">
        <SectionHeader
          badge="TESTIMONIALS"
          title="What Our Clients Say"
          centered={true}
          lightMode={true}
        />

        <div className="relative w-full flex items-center py-4">
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-linear-to-r from-surface-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-linear-to-l from-surface-white to-transparent z-10 pointer-events-none" />

          <div className="flex gap-6 w-max animate-marquee whitespace-nowrap px-4">
            {doubleTestimonials.map((item, idx) => (
              <div
                key={`${item._id}-${idx}`}
                className="w-72 sm:w-80 bg-surface-white-muted p-6 sm:p-8 rounded-2xl border border-surface-white-border shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between shrink-0 select-none"
              >
                <div className="space-y-4 whitespace-normal">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-3xl text-primary-dark font-serif leading-none">
                      “
                    </span>
                    <div className="text-primary-dark text-sm tracking-widest">
                      ★★★★★
                    </div>
                  </div>
                  <p className="text-secondary text-sm italic leading-relaxed">
                    &quot;{item.quote}&quot;
                  </p>
                </div>

                <div className="flex items-center space-x-3 pt-4 mt-6 border-t border-surface-white-border">
                  <div className="w-10 h-10 rounded-full bg-card-bg overflow-hidden relative shrink-0 border border-surface-white-border">
                    {item.imageUrl ? (
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-bold text-primary text-xs bg-primary/10">
                        {item.name ? item.name.charAt(0) : '?'}
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm leading-none text-secondary/80">
                      {item.name}
                    </h4>
                    <p className="text-xs text-muted mt-1">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center pt-4">
          <Link href="#testimonials" className="inline-block">
            <Button
              variant="outline"
              className="text-secondary border-primary hover:bg-primary/10"
            >
              VIEW ALL REVIEWS →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
