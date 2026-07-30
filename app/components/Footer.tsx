'use client'

import LogoComponent from '@/app/components/Logo'
import FooterQuickLinks from '@/app/components/footer/FooterQuickLinks'
import FooterServicesList from '@/app/components/footer/FooterServicesList'
import FooterContact from '@/app/components/footer/FooterContact'
import FooterNewsletter from '@/app/components/footer/FooterNewsletter'
import FooterBottom from '@/app/components/footer/FooterBottom'

export default function Footer() {
  return (
    <footer className="bg-background text-muted py-12 px-4 sm:px-8 md:px-12 lg:px-16 border-t border-card-border text-xs">
      {/* Changed to lg:grid-cols-5 so every section takes exactly 1 column */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 items-start">
        <div className="sm:col-span-2 lg:col-span-1">
          <LogoComponent
            imageSizeClassName="h-9 sm:h-10"
            titleSizeClassName="text-xs sm:text-sm"
            dividerHeightClassName="h-6"
            subtitleSizeClassName="text-[9px] sm:text-[10px]"
          />
          <p className="leading-relaxed text-muted mt-3">
            We help businesses, authors, publishers and entrepreneurs grow
            through digital marketing strategy and design.
          </p>
        </div>
        <FooterQuickLinks />
        <FooterServicesList />
        <FooterContact />
        <FooterNewsletter />
      </div>

      <FooterBottom />
    </footer>
  )
}
