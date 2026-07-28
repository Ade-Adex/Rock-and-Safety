import Link from 'next/link'

const services = [
  {
    title: 'Digital Marketing',
    icon: '📣',
    desc: 'Facebook Ads, Instagram Ads, Google Ads, Lead Generation, and Marketing Strategies that drive real ROI.',
  },
  {
    title: 'Web Design',
    icon: '💻',
    desc: 'Modern, responsive, and high-converting websites built to connect with your target customers.',
  },
  {
    title: 'UI/UX Design',
    icon: '🎨',
    desc: 'Beautiful, intuitive designs for web and mobile to improve user experience and delight your users.',
  },
  {
    title: 'Branding',
    icon: '💎',
    desc: 'Logo Design, Visual Identity, and Brand Strategy that help your business stand out and grow.',
  },
  {
    title: 'Social Media Management',
    icon: '👥',
    desc: 'Content Creation, Page Management, and Growth Strategy that builds a strong online community.',
  },
  {
    title: 'Sales Funnels',
    icon: '⏳',
    desc: 'High-converting funnels, landing pages, and email automation that turn strangers into buyers and sales.',
  },
  {
    title: 'Book Publishing & Marketing',
    icon: '📖',
    desc: 'Professional Amazon Kindle, Paperback, and Hardcover publishing, design, and marketing for authors.',
  },
  {
    title: 'Consulting',
    icon: '💼',
    desc: '1-on-1 expert advisory and strategy sessions to help your business scale faster and hit its goals.',
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-card-bg text-foreground py-16 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-16 border-b border-gray-200">
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <span className="text-accent-gold text-xs font-extrabold uppercase tracking-widest">
          OUR SERVICES
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2 tracking-tight text-gray-900">
          Powerful Solutions For Your Business Growth
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="group flex flex-col justify-between bg-white p-6 rounded-xl border border-gray-200 hover:border-accent-gold/60 hover:shadow-xl transition-all duration-300"
          >
            <div>
              <div className="text-3xl mb-4 p-3 bg-gray-50 w-fit rounded-lg border border-gray-100">
                {service.icon}
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-accent-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
            </div>
            <Link
              href="#services"
              className="text-xs font-extrabold text-gray-900 hover:text-accent-gold flex items-center space-x-1 transition-colors mt-auto uppercase"
            >
              <span>LEARN MORE</span>
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
