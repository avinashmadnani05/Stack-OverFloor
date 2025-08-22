import { useState } from 'react'
import { Brain, TrendingUp, Calendar, BarChart3, Heart, Lightbulb } from 'lucide-react'

const MoodMonitor = () => {
  const [currentMood, setCurrentMood] = useState('')
  const [moodIntensity, setMoodIntensity] = useState(5)
  const [triggers, setTriggers] = useState([])
  const [notes, setNotes] = useState('')

  const moods = [
    { emoji: '😊', label: 'Happy', value: 'happy', color: '#27AE60' },
    { emoji: '😔', label: 'Sad', value: 'sad', color: '#3498DB' },
    { emoji: '😤', label: 'Angry', value: 'angry', color: '#E74C3C' },
    { emoji: '😰', label: 'Anxious', value: 'anxious', color: '#F39C12' },
    { emoji: '😌', label: 'Calm', value: 'calm', color: '#50E3C2' },
    { emoji: '😴', label: 'Tired', value: 'tired', color: '#9B59B6' },
    { emoji: '😍', label: 'Excited', value: 'excited', color: '#E91E63' },
    { emoji: '🤔', label: 'Thoughtful', value: 'thoughtful', color: '#795548' }
  ]

  const commonTriggers = [
    'Work Stress', 'Family', 'Health', 'Money', 'Relationships', 
    'Sleep', 'Weather', 'Exercise', 'Social Media', 'News'
  ]

  const moodHistory = [
    { date: 'Today', mood: 'happy', intensity: 7, color: '#27AE60' },
    { date: 'Yesterday', mood: 'anxious', intensity: 4, color: '#F39C12' },
    { date: '2 days ago', mood: 'calm', intensity: 8, color: '#50E3C2' },
    { date: '3 days ago', mood: 'happy', intensity: 6, color: '#27AE60' },
    { date: '4 days ago', mood: 'tired', intensity: 3, color: '#9B59B6' },
  ]

  const wellnessTips = [
    {
      mood: 'anxious',
      tips: [
        'Practice deep breathing exercises (4-7-8 technique)',
        'Try progressive muscle relaxation',
        'Limit caffeine intake',
        'Consider talking to a friend or counselor'
      ]
    },
    {
      mood: 'sad',
      tips: [
        'Engage in physical activity, even a short walk',
        'Connect with supportive friends or family',
        'Practice self-compassion',
        'Consider journaling your feelings'
      ]
    },
    {
      mood: 'happy',
      tips: [
        'Savor this positive moment mindfully',
        'Share your joy with others',
        'Take note of what contributed to this feeling',
        'Use this energy for productive activities'
      ]
    }
  ]

  const handleMoodSubmit = () => {
    // Simulate mood logging
    alert('Mood logged successfully! Check your dashboard for insights.')
  }

  const toggleTrigger = (trigger) => {
    setTriggers(prev => 
      prev.includes(trigger) 
        ? prev.filter(t => t !== trigger)
        : [...prev, trigger]
    )
  }

  const getCurrentMoodData = () => {
    return moods.find(mood => mood.value === currentMood)
  }

  const getCurrentTips = () => {
    const tipSet = wellnessTips.find(tip => tip.mood === currentMood)
    return tipSet ? tipSet.tips : []
  }

  return (
    <div style={{ backgroundColor: 'var(--background-color)', minHeight: '100vh' }}>
      {/* Header with Mental Health Professional Background */}
      <div style={{ 
        background: 'linear-gradient(135deg, rgba(56, 178, 172, 0.9) 0%, rgba(45, 55, 72, 0.9) 100%), url("https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
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
              <Brain size={60} />
            </div>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              Mental Health Mood Monitor
            </h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
              Track your emotional well-being and get personalized insights from mental health professionals
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '3rem 1rem' }}>
        {/* Current Mood Selector with Therapy Background */}
        <div className="form-container" style={{ 
          marginBottom: '3rem',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%), url("https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")',
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
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '3rem'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundImage: 'url("https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80")',
                backgroundSize: 'cover',
                borderRadius: '50%',
                border: '3px solid var(--primary-color)',
                marginBottom: '1rem'
              }}></div>
              <h3 style={{ textAlign: 'center', margin: '0 0 1rem 0', color: 'var(--text-primary)', fontSize: '2rem', fontWeight: '600' }}>
                How are you feeling right now?
              </h3>
              <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '500px' }}>
                Take a moment to reflect on your current emotional state. Your feelings are valid and important.
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              {moods.map((mood) => (
                <button
                  key={mood.value}
                  onClick={() => setCurrentMood(mood.value)}
                  style={{
                    borderColor: currentMood === mood.value ? mood.color : 'var(--border-color)',
                    backgroundColor: currentMood === mood.value ? `${mood.color}15` : 'rgba(255, 255, 255, 0.8)',
                    padding: '1.5rem 1rem',
                    borderRadius: '16px',
                    border: '2px solid',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.75rem',
                    boxShadow: currentMood === mood.value ? `0 8px 20px ${mood.color}30` : '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                >
                  <span style={{ fontSize: '2.5rem' }}>{mood.emoji}</span>
                  <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>{mood.label}</span>
                </button>
              ))}
            </div>

            {/* Mood Intensity */}
            {currentMood && (
              <div style={{ marginTop: '2rem' }}>
                <label className="form-label" style={{ textAlign: 'center', display: 'block', fontSize: '1.2rem', fontWeight: '600' }}>
                  How intense is this feeling? (1-10)
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
                  <span style={{ fontWeight: '600' }}>1</span>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={moodIntensity}
                    onChange={(e) => setMoodIntensity(e.target.value)}
                    style={{ flex: 1, maxWidth: '300px', height: '8px', borderRadius: '5px' }}
                  />
                  <span style={{ fontWeight: '600' }}>10</span>
                  <div style={{ 
                    minWidth: '50px', 
                    height: '50px', 
                    borderRadius: '50%', 
                    backgroundColor: getCurrentMoodData()?.color || 'var(--primary-color)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    boxShadow: `0 4px 12px ${getCurrentMoodData()?.color || 'var(--primary-color)'}40`
                  }}>
                    {moodIntensity}
                  </div>
                </div>
              </div>
            )}

            {/* Triggers */}
            <div style={{ marginTop: '3rem' }}>
              <label className="form-label" style={{ textAlign: 'center', display: 'block', fontSize: '1.2rem', fontWeight: '600', marginBottom: '1.5rem' }}>
                What might be influencing this mood?
              </label>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.75rem', 
                justifyContent: 'center'
              }}>
                {commonTriggers.map((trigger) => (
                  <button
                    key={trigger}
                    onClick={() => toggleTrigger(trigger)}
                    style={{
                      padding: '0.75rem 1.5rem',
                      border: `2px solid ${triggers.includes(trigger) ? 'var(--primary-color)' : 'var(--border-color)'}`,
                      borderRadius: '25px',
                      background: triggers.includes(trigger) ? 'var(--primary-color)' : 'rgba(255, 255, 255, 0.8)',
                      color: triggers.includes(trigger) ? 'white' : 'var(--text-primary)',
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                      fontWeight: '500',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {trigger}
                  </button>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div className="form-group" style={{ marginTop: '2rem' }}>
              <label className="form-label" style={{ fontSize: '1.2rem', fontWeight: '600' }}>
                Additional notes (optional)
              </label>
              <textarea
                className="form-textarea"
                placeholder="Describe what happened today, any specific thoughts, or context about your mood..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                style={{ borderRadius: '12px', padding: '1rem' }}
              />
            </div>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button
                className="btn btn-primary"
                onClick={handleMoodSubmit}
                disabled={!currentMood}
                style={{ 
                  opacity: !currentMood ? 0.5 : 1,
                  padding: '1rem 2rem',
                  fontSize: '1.1rem',
                  borderRadius: '25px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  margin: '0 auto'
                }}
              >
                <Heart size={20} />
                Log Mood
              </button>
            </div>
          </div>
        </div>

        {/* Mood Insights */}
        {currentMood && (
          <div className="chart-container" style={{ marginBottom: '3rem' }}>
            <h3 style={{ marginBottom: '2rem', color: 'var(--text-primary)', textAlign: 'center' }}>
              Personalized Wellness Tips
            </h3>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {getCurrentTips().map((tip, index) => (
                <div 
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1rem',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    borderLeft: `4px solid ${getCurrentMoodData()?.color}`
                  }}
                >
                  <Lightbulb size={20} style={{ color: getCurrentMoodData()?.color, marginTop: '0.1rem' }} />
                  <p style={{ margin: 0, color: 'var(--text-primary)' }}>{tip}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mood History */}
        <div className="chart-container" style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h3 style={{ color: 'var(--text-primary)' }}>Recent Mood History</h3>
            <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
              <BarChart3 size={16} />
              View Detailed Analytics
            </button>
          </div>
          
          <div style={{ display: 'grid', gap: '1rem' }}>
            {moodHistory.map((entry, index) => (
              <div 
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem',
                  backgroundColor: 'var(--surface-color)',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    backgroundColor: entry.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold'
                  }}>
                    {moods.find(m => m.value === entry.mood)?.emoji}
                  </div>
                  <div>
                    <div style={{ fontWeight: '600', color: 'var(--text-primary)', textTransform: 'capitalize' }}>
                      {entry.mood}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      {entry.date}
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <TrendingUp size={16} style={{ color: entry.color }} />
                  <span style={{ fontWeight: '600', color: entry.color }}>
                    {entry.intensity}/10
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mental Health Resources */}
        <div style={{ 
          padding: '2rem', 
          backgroundColor: 'var(--surface-color)', 
          borderRadius: '12px',
          border: '1px solid var(--border-color)',
          textAlign: 'center'
        }}>
          <h4 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>
            🧠 Mental Health Resources
          </h4>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            If you're struggling with your mental health, remember that help is available.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary">Find a Therapist</button>
            <button className="btn btn-secondary">Crisis Resources</button>
            <button className="btn btn-secondary">Self-Help Tools</button>
          </div>
          <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <p>
              <strong>Crisis Support:</strong> If you're in immediate danger, please call emergency services or 
              the National Suicide Prevention Lifeline at <strong>988</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoodMonitor
