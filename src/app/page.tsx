import Hero from '@/components/sections/Hero'
import EverydayStories from '@/components/sections/EverydayStories'
import Philosophy from '@/components/sections/Philosophy'
import Audience from '@/components/sections/Audience'
import ShareStory from '@/components/sections/ShareStory'
import Vision from '@/components/sections/Vision'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <EverydayStories />
      <Philosophy />
      <Audience />
      <ShareStory />
      <Vision />
    </main>
  )
}
