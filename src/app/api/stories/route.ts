import { NextRequest, NextResponse } from 'next/server'
import { addStory, getApprovedStories } from '@/lib/db'

export async function GET() {
  try {
    const stories = getApprovedStories()
    return NextResponse.json({ stories })
  } catch (error) {
    console.error('Error fetching stories:', error)
    return NextResponse.json({ error: 'Failed to fetch stories' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, age, role, story } = body

    // Validation
    if (!name || !story) {
      return NextResponse.json(
        { error: 'Name and story are required' },
        { status: 400 }
      )
    }

    if (story.length < 10 || story.length > 1000) {
      return NextResponse.json(
        { error: 'Story must be between 10 and 1000 characters' },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const sanitizedName = name.trim().slice(0, 100)
    const sanitizedRole = role ? role.trim().slice(0, 100) : ''
    const sanitizedStory = story.trim().slice(0, 1000)
    const parsedAge = age ? parseInt(age) : null

    // Add to database
    addStory(sanitizedName, parsedAge, sanitizedRole, sanitizedStory)

    return NextResponse.json({ success: true, message: 'Story submitted successfully!' })
  } catch (error) {
    console.error('Error submitting story:', error)
    return NextResponse.json({ error: 'Failed to submit story' }, { status: 500 })
  }
}
