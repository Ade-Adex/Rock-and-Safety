import Image from 'next/image'
import Logo from '@/public/Images/Logo.jpeg'

export default function Header() {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#0b0c0e] text-gray-400 text-xs py-2 px-6 border-b border-gray-800 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <span>📞 +234 810 000 0000</span>
          <span>✉️ info@rockandsafetymarketinghub.com</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>Follow Us:</span>
          <a href="#" className="hover:text-white">
            Facebook
          </a>
          <a href="#" className="hover:text-white">
            Instagram
          </a>
          <a href="#" className="hover:text-white">
            LinkedIn
          </a>
          <a href="#" className="hover:text-white">
            YouTube
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="bg-dark text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <a href="#" className="flex items-center space-x-2">
          <Image
            src={Logo}
            alt="Rock and Safety Marketing Hub Logo"
            width={380}
            height={50}
            priority
            className="h-20 w-auto object-contain"
          />
        </a>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#" className="text-[#cca352]">
            HOME
          </a>
          <a href="#" className="hover:text-[#cca352]">
            ABOUT US
          </a>
          <a href="#" className="hover:text-[#cca352]">
            SERVICES ▾
          </a>
          <a href="#" className="hover:text-[#cca352]">
            PORTFOLIO
          </a>
          <a href="#" className="hover:text-[#cca352]">
            PRICING
          </a>
          <a href="#" className="hover:text-[#cca352]">
            BLOG
          </a>
          <a href="#" className="hover:text-[#cca352]">
            CONTACT
          </a>
        </nav>

        <a
          href="#"
          className="bg-[#cca352] hover:bg-gold-dark text-black font-semibold text-xs px-5 py-2.5 rounded uppercase tracking-wider"
        >
          Get A Quote
        </a>
      </header>
    </>
  )
}
