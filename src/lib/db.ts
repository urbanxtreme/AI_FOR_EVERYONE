import Database from 'better-sqlite3'
import path from 'path'

const dbPath = path.join(process.cwd(), 'data', 'stories.db')
const db = new Database(dbPath)

// Initialize database
export function initDB() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS stories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      age INTEGER,
      role TEXT,
      story TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      approved BOOLEAN DEFAULT 0
    )
  `)
}

// Get all approved stories
export function getApprovedStories() {
  const stmt = db.prepare('SELECT * FROM stories WHERE approved = 1 ORDER BY created_at DESC LIMIT 20')
  return stmt.all()
}

// Add a new story
export function addStory(name: string, age: number | null, role: string, story: string) {
  const stmt = db.prepare('INSERT INTO stories (name, age, role, story, approved) VALUES (?, ?, ?, ?, 1)')
  return stmt.run(name, age, role, story)
}

// Initialize DB on import
initDB()

export default db
