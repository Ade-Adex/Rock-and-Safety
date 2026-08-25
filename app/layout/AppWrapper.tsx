'use client'

import { usePathname } from 'next/navigation'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

interface AppWrapperProps {
  children: React.ReactNode
}

export default function AppWrapper({ children }: AppWrapperProps) {
  const pathname = usePathname()

  // Exclude the header and footer from Sanity Studio routes
  if (pathname?.startsWith('/studio')) {
    return <>{children}</>
  }

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}
