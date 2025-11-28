'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '../ui/AnimatedSection'

const audiences = [
  {
    id: 'kuttymakers',
    emoji: '🎨',
    title: 'KuttyMakers',
    subtitle: 'Ages 8-12',
    description: 'Young explorers learning AI through play, creativity, and fun projects. Build games, create art, and discover how AI works!',
    color: 'from-sunset-400 to-sunset-600',
    features: ['Fun AI projects', 'Creative coding', 'Games & stories'],
  },
  {
    id: 'youngmakers',
    emoji: '🚀',
    title: 'Young Makers',
    subtitle: 'Ages 13-18',
    description: 'Teen innovators building real AI projects and solving community problems. Learn advanced skills and create meaningful impact.',
    color: 'from-palm-400 to-palm-600',
    features: ['Real-world projects', 'Advanced AI tools', 'Community impact'],
  },
  {
    id: 'friends',
    emoji: '🤝',
    title: 'Friends of the Movement',
    subtitle: 'All Ages',
    description: 'Educators, parents, and community supporters helping spread AI literacy. Guide, mentor, and grow together with us.',
    color: 'from-backwater-400 to-backwater-600',
    features: ['Teaching resources', 'Community events', 'Mentorship'],
  },
]

export default function Audience() {
  return (
    <AnimatedSection className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Who It's For</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI literacy is for everyone. Find your place in our movement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -12 }}
              className="relative group"
            >
              <div className="glass rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                {/* Animated emoji */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                  className="text-7xl mb-6 text-center"
                >
                  {audience.emoji}
                </motion.div>

                <h3 className="font-display text-3xl font-bold text-center mb-2">
                  {audience.title}
                </h3>
                
                <p className={`text-center text-sm font-semibold mb-4 bg-gradient-to-r ${audience.color} bg-clip-text text-transparent`}>
                  {audience.subtitle}
                </p>

                <div className={`w-20 h-1 bg-gradient-to-r ${audience.color} rounded-full mx-auto mb-6`} />

                <p className="text-gray-700 text-center mb-6 leading-relaxed">
                  {audience.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {audience.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + i * 0.1 }}
                      className="flex items-center gap-3 text-gray-600"
                    >
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${audience.color} flex-shrink-0`} />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${audience.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No matter your age or background, there's a place for you in Kerala's AI literacy movement. 
            <span className="font-semibold text-sunset-600"> Join us today!</span>
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
