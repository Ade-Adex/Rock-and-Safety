export default function Footer() {
  return (
    <footer className="bg-[#050506] text-gray-400 py-16 px-6 md:px-16 border-t border-gray-900 text-xs">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-1">
          <h3 className="text-white font-bold text-sm mb-3">ROCK AND SAFETY</h3>
          <p className="leading-relaxed mb-4">
            We help businesses, authors, publishers and entrepreneurs grow
            through digital marketing strategy and design.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-3">Our Services</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Digital Marketing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Web Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                UI/UX Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Branding
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Sales Funnels
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-3">Contact Us</h4>
          <ul className="space-y-2">
            <li>📞 +234 810 000 0000</li>
            <li>✉️ info@rockandsafetymarketinghub.com</li>
            <li>📍 Nigeria</li>
            <li>🕒 Mon - Fri: 8:00 AM - 6:00 PM</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-3">Newsletter</h4>
          <p className="mb-3">
            Subscribe to get the latest news, tips and offers.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 rounded bg-gray-900 border border-gray-800 text-white mb-2"
          />
          <button className="w-full bg-[#cca352] text-black font-bold py-2 rounded">
            SUBSCRIBE
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-900 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-gray-500">
        <p>© Rock and Safety Marketing Hub. All Rights Reserved.</p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a href="#" className="hover:text-gray-300">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="#" className="hover:text-gray-300">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  )
}
