'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#050506] text-gray-400 py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-16 border-t border-gray-900 text-xs">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
        <div className="sm:col-span-2 lg:col-span-1">
          <h3 className="text-white font-black text-sm tracking-wider mb-4">
            ROCK AND SAFETY
          </h3>
          <p className="leading-relaxed text-gray-400">
            We help businesses, authors, publishers and entrepreneurs grow
            through digital marketing strategy and design.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 tracking-wide">
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            {['Home', 'About Us', 'Services', 'Portfolio', 'Contact'].map(
              (item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-accent-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 tracking-wide">
            Our Services
          </h4>
          <ul className="space-y-2.5">
            {[
              'Digital Marketing',
              'Web Design',
              'UI/UX Design',
              'Branding',
              'Sales Funnels',
            ].map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="hover:text-accent-gold transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 tracking-wide">
            Contact Us
          </h4>
          <ul className="space-y-2.5">
            <li>📞 +234 815 224 5314</li>
            <li className="break-all">✉️ info@rockandsafetymarketinghub.com</li>
            <li>📍 Nigeria</li>
            <li>🕒 Mon - Fri: 8:00 AM - 6:00 PM</li>
          </ul>
        </div>

        <div className="sm:col-span-2 lg:col-span-1">
          <h4 className="text-white font-bold mb-4 tracking-wide">
            Newsletter
          </h4>
          <p className="mb-3 leading-relaxed">
            Subscribe to get the latest news, tips and offers.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col space-y-2"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-accent-gold transition-colors"
            />
            <button
              type="submit"
              className="w-full bg-accent-gold hover:bg-gold-dark text-black font-extrabold py-2.5 rounded-lg transition-all active:scale-[0.98] uppercase"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-900/80 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 text-center sm:text-left">
        <p>© Rock and Safety Marketing Hub. All Rights Reserved.</p>
        <div className="flex space-x-4">
          <Link href="#" className="hover:text-gray-300 transition-colors">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link href="#" className="hover:text-gray-300 transition-colors">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  )
}
