import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AI for Everyone - Kerala\'s AI Literacy Movement',
  description: 'Empowering Kerala with AI literacy through storytelling. Join our movement to make AI accessible to students, parents, teachers, farmers, and everyone.',
  keywords: ['AI literacy', 'Kerala', 'education', 'AI for everyone', 'storytelling', 'technology education'],
  authors: [{ name: 'AI for Everyone Movement' }],
  openGraph: {
    title: 'AI for Everyone - Kerala\'s AI Literacy Movement',
    description: 'Empowering Kerala with AI literacy through storytelling',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="smooth-scroll" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
