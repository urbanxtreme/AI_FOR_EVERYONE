'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '../ui/AnimatedSection'
import Button from '../ui/Button'

export default function Vision() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AnimatedSection className="py-20 px-4 bg-gradient-to-b from-transparent via-palm-50/30 to-warm-50/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-8">
            <span className="gradient-text">Our Vision</span>
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass rounded-3xl p-12 mb-12 shadow-2xl"
          >
            <div className="text-6xl mb-6">🌟</div>
            <p className="text-2xl md:text-3xl font-display font-semibold text-gray-800 mb-6 leading-relaxed">
              A Kerala where AI literacy is a public good—accessible to everyone, 
              regardless of age, background, or location.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We envision a future where every person in Kerala has the knowledge, skills, and 
              confidence to understand, use, and shape AI technologies. Where technology serves 
              humanity, not the other way around. Where innovation is inclusive, ethical, and 
              rooted in our values of community and care.
            </p>
          </motion.div>

          {/* Key principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: '🌍', title: 'Inclusive', desc: 'AI for all ages, all backgrounds' },
              { icon: '🤝', title: 'Community-Driven', desc: 'Learning and growing together' },
              { icon: '💡', title: 'Empowering', desc: 'Knowledge as a public good' },
            ].map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl p-6 shadow-lg"
              >
                <div className="text-5xl mb-3">{principle.icon}</div>
                <h3 className="font-display text-xl font-bold mb-2">{principle.title}</h3>
                <p className="text-gray-600">{principle.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="space-y-6"
          >
            <p className="text-xl text-gray-700 font-semibold">
              Ready to be part of this movement?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" href="#share-story">
                Share Your Story 📝
              </Button>
              <Button variant="secondary" size="lg" href="#stories">
                Read More Stories 📚
              </Button>
            </div>
          </motion.div>

          {/* Footer quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="mt-16 pt-8 border-t-2 border-gray-200"
          >
            <p className="text-lg italic text-gray-600">
              "The future of AI in Kerala isn't just about technology—it's about people. 
              It's about stories. It's about <span className="font-semibold text-sunset-600">everyone</span>."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
