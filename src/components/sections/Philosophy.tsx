'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '../ui/AnimatedSection'

const philosophyPillars = [
  {
    icon: '🧠',
    title: 'Head',
    subtitle: 'Understanding',
    description: 'Learn what AI is, how it works, and why it matters. Build a foundation of knowledge that demystifies technology.',
    color: 'from-sunset-400 to-sunset-600',
    examples: ['What is AI?', 'How does it learn?', 'Where is it used?'],
  },
  {
    icon: '✋',
    title: 'Hand',
    subtitle: 'Creating',
    description: 'Get hands-on experience building, experimenting, and creating with AI tools. Learning by doing, not just watching.',
    color: 'from-palm-400 to-palm-600',
    examples: ['Build projects', 'Try AI tools', 'Solve problems'],
  },
  {
    icon: '❤️',
    title: 'Heart',
    subtitle: 'Caring',
    description: 'Understand the human impact of AI. Use technology ethically, inclusively, and for the betterment of our community.',
    color: 'from-backwater-400 to-backwater-600',
    examples: ['Ethics & fairness', 'Helping others', 'Building together'],
  },
]

export default function Philosophy() {
  return (
    <AnimatedSection className="py-20 px-4 bg-gradient-to-b from-transparent via-warm-50/50 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Head • Hand • Heart</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our philosophy is simple: true AI literacy comes from understanding (Head), 
            creating (Hand), and caring (Heart).
          </p>
        </motion.div>

        {/* Journey path */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-sunset-300 via-palm-300 to-backwater-300 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {philosophyPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative"
              >
                <div className="glass rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                  {/* Icon circle */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${pillar.color} flex items-center justify-center text-5xl shadow-lg`}
                  >
                    {pillar.icon}
                  </motion.div>

                  <h3 className="font-display text-3xl font-bold text-center mb-2">
                    {pillar.title}
                  </h3>
                  <p className={`text-center text-lg font-semibold mb-4 bg-gradient-to-r ${pillar.color} bg-clip-text text-transparent`}>
                    {pillar.subtitle}
                  </p>
                  
                  <p className="text-gray-700 text-center mb-6 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Examples */}
                  <div className="space-y-2">
                    {pillar.examples.map((example, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${pillar.color}`} />
                        {example}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Step number */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className={`absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br ${pillar.color} text-white font-bold text-xl flex items-center justify-center shadow-lg`}
                >
                  {index + 1}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed italic">
              "When we combine knowledge with practice and purpose, we don't just learn about AI—we 
              become empowered to shape how it serves our communities."
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
