'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import AnimatedSection from '../ui/AnimatedSection'
import Button from '../ui/Button'

interface Story {
  id: number
  name: string
  age: number | null
  role: string
  story: string
  created_at: string
}

export default function ShareStory() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    role: '',
    story: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [stories, setStories] = useState<Story[]>([])

  useEffect(() => {
    fetchStories()
  }, [])

  const fetchStories = async () => {
    try {
      const res = await fetch('/api/stories')
      const data = await res.json()
      setStories(data.stories || [])
    } catch (err) {
      console.error('Error fetching stories:', err)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      const res = await fetch('/api/stories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok) {
        setSubmitted(true)
        setFormData({ name: '', age: '', role: '', story: '' })
        setTimeout(() => {
          setSubmitted(false)
          fetchStories()
        }, 3000)
      } else {
        setError(data.error || 'Failed to submit story')
      }
    } catch (err) {
      setError('Failed to submit story. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const charCount = formData.story.length
  const maxChars = 1000

  return (
    <AnimatedSection id="share-story" className="py-20 px-4 bg-gradient-to-b from-transparent via-sunset-50/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Share Your Story</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How has AI touched your life? Share your journey and inspire others in our community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-3xl p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-sunset-400 focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Age
                    </label>
                    <input
                      type="number"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-sunset-400 focus:outline-none transition-colors"
                      placeholder="Optional"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Role
                    </label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-sunset-400 focus:outline-none transition-colors"
                      placeholder="Student, Teacher, etc."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Your AI Story *
                  </label>
                  <textarea
                    required
                    value={formData.story}
                    onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-sunset-400 focus:outline-none transition-colors resize-none"
                    rows={6}
                    placeholder="Share how AI has impacted your life, what you've learned, or what you hope to achieve..."
                  />
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-sm text-gray-500">
                      {charCount < 10 ? 'At least 10 characters needed' : 'Looking good!'}
                    </p>
                    <p className={`text-sm ${charCount > maxChars ? 'text-red-500' : 'text-gray-500'}`}>
                      {charCount}/{maxChars}
                    </p>
                  </div>
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-100 border-2 border-red-300 text-red-700 px-4 py-3 rounded-xl"
                  >
                    {error}
                  </motion.div>
                )}

                <Button
                  type="submit"
                  disabled={submitting || submitted}
                  className="w-full"
                  size="lg"
                >
                  {submitting ? 'Submitting...' : submitted ? '✓ Story Shared!' : 'Share My Story 🌟'}
                </Button>
              </form>

              {submitted && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="mt-6 bg-palm-100 border-2 border-palm-300 text-palm-700 px-4 py-3 rounded-xl text-center font-semibold"
                >
                  🎉 Thank you for sharing your story!
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Recent Stories */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl font-bold mb-6 text-gray-800">
              Recent Community Stories
            </h3>
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
              {stories.length === 0 ? (
                <div className="glass rounded-2xl p-6 text-center text-gray-500">
                  Be the first to share your story!
                </div>
              ) : (
                stories.map((story, index) => (
                  <motion.div
                    key={story.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass rounded-2xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sunset-400 to-palm-400 flex items-center justify-center text-white font-bold">
                        {story.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{story.name}</p>
                        <p className="text-sm text-gray-500">
                          {story.role && `${story.role}`}
                          {story.age && `, ${story.age} years old`}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{story.story}</p>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}
