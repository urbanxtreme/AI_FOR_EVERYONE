'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import AnimatedSection from '../ui/AnimatedSection'

const stories = [
  {
    id: 1,
    emoji: '👧',
    name: 'Meera',
    role: 'Student, Age 11',
    title: 'From Curious to Creator',
    story: 'Meera was always curious about how apps worked. Through our KuttyMakers program, she learned to build her first AI chatbot. Now she teaches her classmates how to code!',
    color: 'from-sunset-400 to-sunset-600',
  },
  {
    id: 2,
    emoji: '👨‍👩‍👧',
    name: 'Rajesh',
    role: 'Parent & Shop Owner',
    title: 'AI as a Daily Helper',
    story: 'Rajesh learned to use AI translation tools to help customers from different states. He also uses AI to manage inventory and predict busy days at his shop.',
    color: 'from-palm-400 to-palm-600',
  },
  {
    id: 3,
    emoji: '👵',
    name: 'Lakshmi Amma',
    role: 'Grandmother, Age 68',
    title: 'Voice of Connection',
    story: 'Lakshmi Amma was hesitant about technology. Now she uses voice assistants to call her grandchildren, set reminders for medicines, and even listen to her favorite devotional songs.',
    color: 'from-backwater-400 to-backwater-600',
  },
  {
    id: 4,
    emoji: '👨‍🌾',
    name: 'Suresh',
    role: 'Farmer',
    title: 'Smart Farming, Better Yields',
    story: 'Suresh uses AI-powered weather predictions and crop health monitoring on his phone. This season, he saved 30% on water usage and increased his yield by planning better.',
    color: 'from-palm-500 to-palm-700',
  },
  {
    id: 5,
    emoji: '👩‍🏫',
    name: 'Priya Teacher',
    role: 'School Teacher',
    title: 'Personalized Learning',
    story: 'Priya uses AI tools to create customized worksheets for students at different learning levels. Every child in her class now gets lessons that match their pace and style.',
    color: 'from-sunset-500 to-sunset-700',
  },
  {
    id: 6,
    emoji: '🛍️',
    name: 'Anil',
    role: 'Small Business Owner',
    title: 'Growing with AI',
    story: 'Anil runs a small textile business. He learned to use AI for customer service chatbots and social media marketing. His online sales doubled in just three months!',
    color: 'from-warm-400 to-warm-600',
  },
]

export default function EverydayStories() {
  const [flipped, setFlipped] = useState<number | null>(null)

  return (
    <AnimatedSection id="stories" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Everyday Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real people, real transformations. See how AI literacy is changing lives across Kerala.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative h-80 cursor-pointer"
              style={{ perspective: '1000px' }}
              onClick={() => setFlipped(flipped === story.id ? null : story.id)}
              onMouseEnter={() => setFlipped(story.id)}
              onMouseLeave={() => setFlipped(null)}
            >
              <motion.div
                animate={{ rotateY: flipped === story.id ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front of card */}
                <div
                  className="absolute w-full h-full glass rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-xl"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="text-7xl mb-4">{story.emoji}</div>
                  <h3 className="font-display text-2xl font-bold mb-2 text-gray-800">
                    {story.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{story.role}</p>
                  <div className={`w-16 h-1 bg-gradient-to-r ${story.color} rounded-full mb-4`} />
                  <p className="font-semibold text-lg text-gray-700">{story.title}</p>
                  <p className="text-sm text-gray-500 mt-4">Click to read story →</p>
                </div>

                {/* Back of card */}
                <div
                  className={`absolute w-full h-full bg-gradient-to-br ${story.color} rounded-2xl p-8 flex flex-col justify-center shadow-xl`}
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <p className="text-white text-lg leading-relaxed">
                    {story.story}
                  </p>
                  <div className="mt-6 text-white/80 text-sm">
                    — {story.name}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 italic">
            These are just a few stories. Every person has their own AI journey. What will yours be?
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
