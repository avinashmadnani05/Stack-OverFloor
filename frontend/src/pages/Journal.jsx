import { useState } from 'react'
import { BookOpen, Save, Calendar, Clock, BarChart3 } from 'lucide-react'

const Journal = () => {
  const [journalEntry, setJournalEntry] = useState('')
  const [selectedMood, setSelectedMood] = useState('')
  const [isSaved, setIsSaved] = useState(false)

  const moods = [
    { emoji: '😊', label: 'Happy', value: 'happy' },
    { emoji: '😔', label: 'Sad', value: 'sad' },
    { emoji: '😴', label: 'Tired', value: 'tired' },
    { emoji: '😤', label: 'Angry', value: 'angry' },
    { emoji: '😰', label: 'Anxious', value: 'anxious' },
    { emoji: '😌', label: 'Calm', value: 'calm' },
    { emoji: '🤔', label: 'Thoughtful', value: 'thoughtful' },
    { emoji: '😍', label: 'Excited', value: 'excited' }
  ]

  const handleAnalyzeMood = () => {
    // Simulate mood analysis
    setTimeout(() => {
      setIsSaved(true)
      setTimeout(() => setIsSaved(false), 3000)
    }, 1000)
  }

  const handleSave = () => {
    // Simulate saving
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 3000)
  }

  return (
    <div className="journal-page" style={{ minHeight: '100vh', backgroundColor: 'var(--background-color)' }}>
      {/* Header with Journaling and Wellness Background */}
      <div style={{ 
        background: 'linear-gradient(135deg, rgba(56, 178, 172, 0.9) 0%, rgba(45, 55, 72, 0.9) 100%), url("https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white', 
        padding: '4rem 0',
        position: 'relative'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
            <div style={{
              width: '120px',
              height: '120px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem',
              backdropFilter: 'blur(10px)',
              border: '3px solid rgba(255, 255, 255, 0.3)'
            }}>
              <BookOpen size={60} />
            </div>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              Daily Wellness Journal
            </h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
              Reflect on your day, track your emotional well-being, and nurture your mental health through mindful journaling
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '3rem 1rem' }}>
        <div className="form-container" style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%), url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '16px',
          padding: '3rem 2rem',
          border: '1px solid rgba(56, 178, 172, 0.2)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '16px',
            zIndex: 1
          }}></div>
          
          <div style={{ position: 'relative', zIndex: 2 }}>
          {/* Date and Time */}
          <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
              <Calendar size={20} />
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
              <Clock size={20} />
              <span>{new Date().toLocaleTimeString()}</span>
            </div>
          </div>

          {/* Mood Selection */}
          <div className="form-group">
            <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              How are you feeling today?
            </h3>
            <div className="mood-selector">
              {moods.map((mood) => (
                <button
                  key={mood.value}
                  className={`mood-btn ${selectedMood === mood.value ? 'active' : ''}`}
                  onClick={() => setSelectedMood(mood.value)}
                >
                  <span className="mood-emoji">{mood.emoji}</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>{mood.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Journal Entry */}
          <div className="form-group">
            <label className="form-label" htmlFor="journal-entry">
              What's on your mind? Share your thoughts, experiences, or feelings...
            </label>
            <textarea
              id="journal-entry"
              className="form-textarea"
              placeholder="Today I felt... I'm grateful for... I learned that... I want to remember..."
              value={journalEntry}
              onChange={(e) => setJournalEntry(e.target.value)}
              rows={8}
              style={{ fontSize: '1rem', lineHeight: '1.6' }}
            />
            <div style={{ 
              fontSize: '0.9rem', 
              color: 'var(--text-secondary)', 
              textAlign: 'right', 
              marginTop: '0.5rem' 
            }}>
              {journalEntry.length} characters
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              className="btn btn-primary"
              onClick={handleAnalyzeMood}
              disabled={!journalEntry.trim() || !selectedMood}
              style={{ opacity: (!journalEntry.trim() || !selectedMood) ? 0.5 : 1 }}
            >
              <BarChart3 size={20} />
              Analyze Mood
            </button>
            <button
              className="btn btn-secondary"
              onClick={handleSave}
              disabled={!journalEntry.trim()}
              style={{ 
                opacity: !journalEntry.trim() ? 0.5 : 1,
                backgroundColor: 'var(--success-color)',
                color: 'white',
                border: 'none'
              }}
            >
              <Save size={20} />
              Save Entry
            </button>
          </div>

          {/* Success Message */}
          {isSaved && (
            <div className="alert alert-success" style={{ marginTop: '2rem', textAlign: 'center' }}>
              ✅ Journal entry saved successfully! Your mood data has been analyzed and added to your wellness dashboard.
            </div>
          )}

          {/* Tips Section */}
          <div style={{ 
            marginTop: '3rem', 
            padding: '2rem', 
            backgroundColor: 'var(--surface-color)', 
            borderRadius: '12px',
            border: '1px solid var(--border-color)'
          }}>
            <h4 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>
              💡 Journaling Tips
            </h4>
            <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              <li>Write freely without worrying about grammar or structure</li>
              <li>Focus on your emotions and how events made you feel</li>
              <li>Include things you're grateful for each day</li>
              <li>Note any patterns in your mood or behavior</li>
              <li>Be honest and authentic with yourself</li>
              <li>Try to write at the same time each day for consistency</li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Journal
