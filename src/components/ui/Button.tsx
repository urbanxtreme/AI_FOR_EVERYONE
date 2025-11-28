'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  href,
  ...props 
}: ButtonProps) {
  const baseStyles = 'font-display font-semibold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl inline-flex items-center justify-center'
  
  const variants = {
    primary: 'bg-gradient-to-r from-sunset-500 to-sunset-600 text-white hover:from-sunset-600 hover:to-sunset-700',
    secondary: 'bg-gradient-to-r from-palm-500 to-palm-600 text-white hover:from-palm-600 hover:to-palm-700',
    outline: 'border-2 border-sunset-500 text-sunset-600 hover:bg-sunset-50',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...(props as any)}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
