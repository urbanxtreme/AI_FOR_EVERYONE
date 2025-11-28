'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useMemo } from 'react'
import Button from '../ui/Button'

export default function Hero() {
  const [text, setText] = useState('')
  const [mounted, setMounted] = useState(false)
  const fullText = 'AI for Everyone'
  
  // Generate particles only on client side to avoid hydration mismatch
  const particles = useMemo(() => {
    if (!mounted) return []
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      xOffset: Math.random() * 20 - 10,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }))
  }, [mounted])
  
  useEffect(() => {
    setMounted(true)
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-sunset-300/30 to-palm-300/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.3, 1],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-backwater-300/30 to-warm-300/30 rounded-full blur-3xl"
        />
        
        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            animate={{
              y: [0, -30, 0],
              x: [0, particle.xOffset, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
            className="absolute w-2 h-2 bg-gradient-to-r from-sunset-400 to-palm-400 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-4">
            <span className="gradient-text">{text}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-1 h-16 md:h-24 bg-sunset-500 ml-2"
            />
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-2xl md:text-3xl font-display text-gray-700 mb-4"
        >
          A New Story for Kerala
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Empowering every Keralite—from students to grandparents, farmers to teachers—with 
          the knowledge and confidence to embrace AI as a tool for creativity, connection, and growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button size="lg" href="#stories">
            Discover Stories 📖
          </Button>
          <Button variant="outline" size="lg" href="#share-story">
            Share Your Journey ✨
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 3, duration: 0.5 },
            y: { duration: 2, repeat: Infinity }
          }}
          className="mt-20"
        >
          <div className="text-gray-500 text-sm mb-2">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
