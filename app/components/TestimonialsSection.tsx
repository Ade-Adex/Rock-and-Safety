import Image from 'next/image'

const testimonials = [
  {
    name: 'Sarah M.',
    title: 'Business Owner',
    quote:
      'Rock and Safety Marketing Hub transformed our online presence. Their strategy brought real results and growth to our business.',
  },
  {
    name: 'David A.',
    title: 'E-Commerce',
    quote:
      'Professional, responsive and delivered beyond our expectations. We highly recommend their services.',
  },
  {
    name: 'Moses O.',
    title: 'Author & Coach',
    quote:
      'Our Facebook Ads started generating quality leads within days. The team is amazing and very supportive.',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-card-bg text-foreground py-16 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <span className="text-accent-gold text-xs font-bold uppercase tracking-widest">
          TESTIMONIALS
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2 text-gray-900">
          What Our Clients Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-3xl text-accent-gold font-serif leading-none">
                  “
                </span>
                <div className="text-accent-gold text-xs tracking-widest">
                  ★★★★★
                </div>
              </div>
              <p className="text-gray-600 text-sm italic mb-8 leading-relaxed">
                &quot;{item.quote}&quot;
              </p>
            </div>
            <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
              <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
                  alt={item.name}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-none text-gray-900">
                  {item.name}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
