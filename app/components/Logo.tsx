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
        className={`block w-px bg-primary/40 group-hover:bg-primary transition-colors shrink-0 ${dividerHeightClassName}`}
      />

      <div className="flex flex-col justify-center leading-none whitespace-nowrap">
        <span
          className={`text-foreground text-sm md:text-base font-black tracking-wider group-hover:text-primary transition-colors ${titleSizeClassName}`}
        >
          ROCK{' '}
          <span className="text-primary group-hover:text-foreground">&</span>{' '}
          SAFETY
        </span>
        <span
          className={`font-bold text-muted group-hover:text-foreground text-xs md:text-sm tracking-[0.2em] uppercase mt-1 ${subtitleSizeClassName}`}
        >
          Marketing Hub
        </span>
      </div>
    </Link>
  )
}
