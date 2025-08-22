import { useState } from 'react'
import { 
  Pill, 
  Plus, 
  Clock, 
  Calendar,
  Bell,
  Check,
  AlertCircle,
  Edit,
  Trash2
} from 'lucide-react'

const MedicationTracker = () => {
  const [medications, setMedications] = useState([
    {
      id: 1,
      name: 'Vitamin D',
      dosage: '1000 IU',
      frequency: 'Daily',
      time: '8:00 AM',
      taken: true,
      nextDue: '8:00 AM Tomorrow'
    },
    {
      id: 2,
      name: 'Blood Pressure Medication',
      dosage: '10mg',
      frequency: 'Twice Daily',
      time: '8:00 AM, 8:00 PM',
      taken: false,
      nextDue: '8:00 PM Today'
    },
    {
      id: 3,
      name: 'Multivitamin',
      dosage: '1 tablet',
      frequency: 'Daily',
      time: '7:00 AM',
      taken: true,
      nextDue: '7:00 AM Tomorrow'
    }
  ])

  const [showAddForm, setShowAddForm] = useState(false)
  const [newMedication, setNewMedication] = useState({
    name: '',
    dosage: '',
    frequency: 'Daily',
    time: ''
  })

  const toggleMedication = (id) => {
    setMedications(medications.map(med => 
      med.id === id ? { ...med, taken: !med.taken } : med
    ))
  }

  const addMedication = (e) => {
    e.preventDefault()
    if (newMedication.name && newMedication.dosage && newMedication.time) {
      const medication = {
        id: Date.now(),
        ...newMedication,
        taken: false,
        nextDue: `${newMedication.time} Today`
      }
      setMedications([...medications, medication])
      setNewMedication({ name: '', dosage: '', frequency: 'Daily', time: '' })
      setShowAddForm(false)
    }
  }

  const deleteMedication = (id) => {
    setMedications(medications.filter(med => med.id !== id))
  }

  const todayStats = {
    total: medications.length,
    taken: medications.filter(med => med.taken).length,
    pending: medications.filter(med => !med.taken).length,
    adherence: Math.round((medications.filter(med => med.taken).length / medications.length) * 100)
  }

  return (
    <div style={{ backgroundColor: 'var(--background-color)', minHeight: '100vh' }}>
      {/* Header with Background Image */}
      <div style={{ 
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%), url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
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
              width: '100px',
              height: '100px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(255, 255, 255, 0.3)'
            }}>
              <Pill size={60} />
            </div>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              Medication Tracker
            </h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
              Never miss a dose with smart reminders and comprehensive tracking. Your health journey starts here.
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '3rem 1rem' }}>
        {/* Stats Cards with Images */}
        <div className="stats-grid" style={{ marginBottom: '3rem' }}>
          <div className="stat-card" style={{ 
            background: 'linear-gradient(135deg, #4A90E2 10%, rgba(74, 144, 226, 0.1) 100%)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '80px',
              height: '80px',
              backgroundImage: 'url("https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80")',
              backgroundSize: 'cover',
              borderRadius: '50%',
              opacity: 0.3
            }}></div>
            <Pill size={30} style={{ color: 'var(--primary-color)', marginBottom: '1rem', zIndex: 2, position: 'relative' }} />
            <span className="stat-value" style={{ position: 'relative', zIndex: 2 }}>{todayStats.total}</span>
            <div className="stat-label" style={{ position: 'relative', zIndex: 2 }}>Total Medications</div>
          </div>
          
          <div className="stat-card" style={{ 
            background: 'linear-gradient(135deg, #27AE60 10%, rgba(39, 174, 96, 0.1) 100%)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '80px',
              height: '80px',
              backgroundImage: 'url("https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80")',
              backgroundSize: 'cover',
              borderRadius: '50%',
              opacity: 0.3
            }}></div>
            <Check size={30} style={{ color: 'var(--success-color)', marginBottom: '1rem', zIndex: 2, position: 'relative' }} />
            <span className="stat-value" style={{ position: 'relative', zIndex: 2 }}>{todayStats.taken}</span>
            <div className="stat-label" style={{ position: 'relative', zIndex: 2 }}>Taken Today</div>
          </div>
          
          <div className="stat-card" style={{ 
            background: 'linear-gradient(135deg, #F39C12 10%, rgba(243, 156, 18, 0.1) 100%)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '80px',
              height: '80px',
              backgroundImage: 'url("https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80")',
              backgroundSize: 'cover',
              borderRadius: '50%',
              opacity: 0.3
            }}></div>
            <Clock size={30} style={{ color: 'var(--warning-color)', marginBottom: '1rem', zIndex: 2, position: 'relative' }} />
            <span className="stat-value" style={{ position: 'relative', zIndex: 2 }}>{todayStats.pending}</span>
            <div className="stat-label" style={{ position: 'relative', zIndex: 2 }}>Pending</div>
          </div>
          
          <div className="stat-card" style={{ 
            background: 'linear-gradient(135deg, #9B59B6 10%, rgba(155, 89, 182, 0.1) 100%)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '80px',
              height: '80px',
              backgroundImage: 'url("https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80")',
              backgroundSize: 'cover',
              borderRadius: '50%',
              opacity: 0.3
            }}></div>
            <Bell size={30} style={{ color: 'var(--accent-color)', marginBottom: '1rem', zIndex: 2, position: 'relative' }} />
            <span className="stat-value" style={{ position: 'relative', zIndex: 2 }}>{todayStats.adherence}%</span>
            <div className="stat-label" style={{ position: 'relative', zIndex: 2 }}>Adherence Rate</div>
          </div>
        </div>

        {/* Add Medication Button */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <button
            className="btn btn-primary"
            onClick={() => setShowAddForm(!showAddForm)}
          >
            <Plus size={20} />
            Add New Medication
          </button>
        </div>

        {/* Add Medication Form */}
        {showAddForm && (
          <div className="form-container" style={{ 
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%), url("https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border: '1px solid rgba(74, 144, 226, 0.2)',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              textAlign: 'center',
              marginBottom: '2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'var(--primary-color)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                color: 'white'
              }}>
                <Plus size={30} />
              </div>
              <h3 style={{ color: 'var(--text-primary)', margin: 0, fontSize: '1.8rem', fontWeight: '600' }}>
                Add New Medication
              </h3>
              <p style={{ color: 'var(--text-secondary)', margin: '0.5rem 0 0 0', fontSize: '1rem' }}>
                Fill in the details below to track your medication
              </p>
            </div>
            <form onSubmit={addMedication}>
              <div className="form-group">
                <label className="form-label">Medication Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g., Aspirin"
                  value={newMedication.name}
                  onChange={(e) => setNewMedication({...newMedication, name: e.target.value})}
                  required
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Dosage</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g., 100mg"
                    value={newMedication.dosage}
                    onChange={(e) => setNewMedication({...newMedication, dosage: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Frequency</label>
                  <select
                    className="form-select"
                    value={newMedication.frequency}
                    onChange={(e) => setNewMedication({...newMedication, frequency: e.target.value})}
                  >
                    <option value="Daily">Daily</option>
                    <option value="Twice Daily">Twice Daily</option>
                    <option value="Three Times Daily">Three Times Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="As Needed">As Needed</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Time</label>
                <input
                  type="time"
                  className="form-input"
                  value={newMedication.time}
                  onChange={(e) => setNewMedication({...newMedication, time: e.target.value})}
                  required
                />
              </div>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button type="submit" className="btn btn-primary">
                  <Plus size={20} />
                  Add Medication
                </button>
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={() => setShowAddForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Medication List */}
        <div>
          <h3 style={{ marginBottom: '2rem', color: 'var(--text-primary)', textAlign: 'center' }}>
            Today's Medications
          </h3>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {medications.map((medication, index) => {
              // Array of pill images for variety
              const pillImages = [
                "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
                "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
                "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
              ];
              
              return (
                <div
                  key={medication.id}
                  className="feature-card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '2rem',
                    backgroundColor: medication.taken ? '#f8fff8' : 'var(--surface-color)',
                    border: `2px solid ${medication.taken ? 'var(--success-color)' : 'var(--border-color)'}`,
                    borderRadius: '16px',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Background pill image */}
                  <div style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    width: '120px',
                    height: '120px',
                    backgroundImage: `url("${pillImages[index % pillImages.length]}")`,
                    backgroundSize: 'cover',
                    borderRadius: '50%',
                    opacity: 0.1,
                    transform: 'rotate(15deg)'
                  }}></div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: 1, position: 'relative', zIndex: 2 }}>
                    {/* Pill Image */}
                    <div style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '12px',
                      backgroundImage: `url("${pillImages[index % pillImages.length]}")`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      border: `3px solid ${medication.taken ? 'var(--success-color)' : 'var(--primary-color)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      {medication.taken && (
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'rgba(39, 174, 96, 0.9)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white'
                        }}>
                          <Check size={28} />
                        </div>
                      )}
                    </div>
                    
                    <button
                      onClick={() => toggleMedication(medication.id)}
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        border: `3px solid ${medication.taken ? 'var(--success-color)' : 'var(--border-color)'}`,
                        background: medication.taken ? 'var(--success-color)' : 'transparent',
                        color: medication.taken ? 'white' : 'var(--text-secondary)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                        boxShadow: medication.taken ? '0 4px 12px rgba(39, 174, 96, 0.3)' : 'none'
                      }}
                    >
                      {medication.taken && <Check size={24} />}
                    </button>
                    
                    <div style={{ flex: 1 }}>
                      <h4 style={{ 
                        margin: 0, 
                        color: 'var(--text-primary)',
                        textDecoration: medication.taken ? 'line-through' : 'none',
                        opacity: medication.taken ? 0.7 : 1,
                        fontSize: '1.2rem',
                        fontWeight: '600'
                      }}>
                        {medication.name}
                      </h4>
                      <p style={{ 
                        margin: '0.5rem 0', 
                        color: 'var(--text-secondary)', 
                        fontSize: '1rem',
                        fontWeight: '500'
                      }}>
                        {medication.dosage} • {medication.frequency}
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.9rem' }}>
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '0.5rem', 
                          color: 'var(--text-secondary)',
                          background: 'rgba(74, 144, 226, 0.1)',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '20px'
                        }}>
                          <Clock size={16} />
                          {medication.time}
                        </div>
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '0.5rem', 
                          color: medication.taken ? 'var(--success-color)' : 'var(--warning-color)',
                          background: medication.taken ? 'rgba(39, 174, 96, 0.1)' : 'rgba(243, 156, 18, 0.1)',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '20px',
                          fontSize: '0.85rem',
                          fontWeight: '500'
                        }}>
                          <AlertCircle size={16} />
                          {medication.nextDue}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '0.75rem', position: 'relative', zIndex: 2 }}>
                    <button
                      style={{
                        background: 'rgba(74, 144, 226, 0.1)',
                        border: '1px solid rgba(74, 144, 226, 0.2)',
                        color: 'var(--primary-color)',
                        cursor: 'pointer',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease'
                      }}
                      onClick={() => {/* Edit functionality */}}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'var(--primary-color)';
                        e.target.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(74, 144, 226, 0.1)';
                        e.target.style.color = 'var(--primary-color)';
                      }}
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      style={{
                        background: 'rgba(231, 76, 60, 0.1)',
                        border: '1px solid rgba(231, 76, 60, 0.2)',
                        color: 'var(--error-color)',
                        cursor: 'pointer',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease'
                      }}
                      onClick={() => deleteMedication(medication.id)}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'var(--error-color)';
                        e.target.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(231, 76, 60, 0.1)';
                        e.target.style.color = 'var(--error-color)';
                      }}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Tips Section with Medical Background */}
        <div style={{ 
          marginTop: '4rem', 
          padding: '3rem', 
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%), url("https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '16px',
          border: '1px solid var(--border-color)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(74, 144, 226, 0.05) 0%, rgba(155, 89, 182, 0.05) 100%)',
            zIndex: 1
          }}></div>
          
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'var(--primary-color)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem'
              }}>
                💡
              </div>
              <div>
                <h4 style={{ margin: 0, color: 'var(--primary-color)', fontSize: '1.8rem', fontWeight: '700' }}>
                  Medication Management Tips
                </h4>
                <p style={{ margin: '0.5rem 0 0 0', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                  Expert advice for better medication adherence
                </p>
              </div>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '1.5rem',
              color: 'var(--text-secondary)', 
              lineHeight: '1.8',
              fontSize: '1rem'
            }}>
              {[
                { icon: '⏰', text: 'Set up automatic reminders for all your medications' },
                { icon: '📦', text: 'Keep a weekly pill organizer for easy tracking' },
                { icon: '👨‍⚕️', text: 'Never stop or change medications without consulting your doctor' },
                { icon: '🏠', text: 'Store medications in a cool, dry place away from children' },
                { icon: '📅', text: 'Check expiration dates regularly and dispose of old medications safely' },
                { icon: '📋', text: 'Bring an updated medication list to all medical appointments' }
              ].map((tip, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '12px',
                  border: '1px solid rgba(74, 144, 226, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'var(--primary-color)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    flexShrink: 0
                  }}>
                    {tip.icon}
                  </div>
                  <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>
                    {tip.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MedicationTracker
