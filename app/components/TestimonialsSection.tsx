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
    <section className="bg-background text-foreground py-20 px-6 md:px-16">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-[#cca352] text-xs font-bold uppercase tracking-wider">
          TESTIMONIALS
        </span>
        <h2 className="text-3xl font-bold mt-2">What Our Clients Say</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm"
          >
            <div className="text-2xl text-[#cca352] font-serif mb-2">“</div>
            <div className="text-[#cca352] text-sm mb-3">★★★★★</div>
            <p className="text-gray-600 dark:text-gray-300 text-sm italic mb-6">
              &quot;{item.quote}&quot;
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-sm">{item.name}</h4>
                <p className="text-xs text-gray-500">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
