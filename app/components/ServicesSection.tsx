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
    <section className="bg-background text-foreground py-20 px-6 md:px-16 border-b border-gray-100">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-[#cca352] text-xs font-bold uppercase tracking-wider">
          OUR SERVICES
        </span>
        <h2 className="text-3xl font-bold mt-2">
          Powerful Solutions For Your Business Growth
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-background p-6 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition"
          >
            <div className="text-3xl mb-4">{service.icon}</div>
            <h3 className="font-bold text-lg mb-2">{service.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
              {service.desc}
            </p>
            <a
              href="#"
              className="text-xs font-bold hover:text-[#cca352] flex items-center space-x-1"
            >
              <span>LEARN MORE</span>
              <span>→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
