import Link from 'next/link'
import Logo from '@/public/Images/Logo.jpeg'
import Image from 'next/image'

interface LogoProps {
  className?: string
  imageSizeClassName?: string
  titleSizeClassName?: string
  dividerHeightClassName?: string
  subtitleSizeClassName?: string
}

export default function LogoComponent({
  className = '',
  imageSizeClassName = 'h-12 sm:h-14',
  titleSizeClassName = 'text-base sm:text-lg',
  dividerHeightClassName = 'h-8',
  subtitleSizeClassName = 'text-[10px] sm:text-[11px]',
}: LogoProps) {
  return (
    <Link href="/" className={`flex items-center space-x-3 group ${className}`}>
      <div
        className={`relative w-auto aspect-square overflow-hidden rounded-md shrink-0 ${imageSizeClassName}`}
      >
        <Image
          src={Logo}
          alt="Rock and Safety Logo"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div
        className={`hidden sm:block w-px bg-accent-gold/40 group-hover:bg-accent-gold transition-colors shrink-0 ${dividerHeightClassName}`}
      />

      <div className="hidden sm:flex flex-col justify-center leading-none whitespace-nowrap">
        <span
          className={`text-white font-black tracking-wider group-hover:text-accent-gold transition-colors ${titleSizeClassName}`}
        >
          ROCK <span className="text-accent-gold">&</span> SAFETY
        </span>
        <span
          className={`font-bold text-gray-400 tracking-[0.2em] uppercase mt-1 ${subtitleSizeClassName}`}
        >
          Marketing Hub
        </span>
      </div>
    </Link>
  )
}
