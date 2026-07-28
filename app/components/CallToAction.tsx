import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="bg-dark text-white py-16 px-4 sm:px-8 border-t border-gray-800 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <span className="text-accent-gold text-xs font-extrabold tracking-widest uppercase">
          READY TO GROW YOUR BUSINESS?
        </span>
        <h2 className="text-3xl sm:text-4xl font-black mt-2 mb-4">
          Let’s Build Something Amazing Together!
        </h2>
        <p className="text-gray-400 text-sm max-w-xl mx-auto mb-8">
          Partner with Rock and Safety Marketing Hub and let us help you build a
          powerful brand, attract more customers, and achieve measurable growth.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#contact"
            className="bg-accent-gold hover:bg-gold-dark text-black font-extrabold text-xs px-8 py-3.5 rounded-md transition-all uppercase"
          >
            GET STARTED TODAY →
          </Link>
          <Link
            href="#consultation"
            className="border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-black font-extrabold text-xs px-8 py-3.5 rounded-md transition-all uppercase"
          >
            BOOK A CONSULTATION
          </Link>
        </div>
      </div>
    </section>
  )
}
