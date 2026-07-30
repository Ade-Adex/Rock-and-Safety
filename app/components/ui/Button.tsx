import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'white'
  className?: string
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-md transition-all duration-300 cursor-pointer'

  const variants = {
    primary:
      'bg-primary text-dark hover:bg-primary-dark shadow-md hover:shadow-lg',
    secondary:
      'bg-card-bg text-foreground border border-card-border hover:border-primary',
    outline:
      'bg-transparent text-foreground border border-primary hover:bg-primary/10',
    white:
      'bg-white text-gray-900 hover:bg-gray-100 shadow-sm border border-gray-200',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
