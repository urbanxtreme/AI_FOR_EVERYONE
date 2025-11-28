'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

export default function Card({ children, className = '', hover = true, glow = false }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      className={`
        glass rounded-2xl p-6 shadow-lg
        ${hover ? 'hover:shadow-2xl cursor-pointer' : ''}
        ${glow ? 'pulse-glow' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  )
}
