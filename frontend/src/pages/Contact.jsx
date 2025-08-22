import { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, AlertCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'general',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const categories = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'billing', label: 'Billing Question' },
    { value: 'feature', label: 'Feature Request' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'press', label: 'Press Inquiry' }
  ]

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email Support',
      info: 'support@healthcarepro.com',
      description: 'We typically respond within 24 hours'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone Support',
      info: '+1 (555) 123-4567',
      description: 'Available Mon-Fri, 9 AM - 6 PM EST'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Office Location',
      info: '123 Health Street, Medical City, MC 12345',
      description: 'By appointment only'
    },
    {
      icon: <MessageCircle size={24} />,
      title: 'Live Chat',
      info: 'Available in-app',
      description: '24/7 automated support with human escalation'
    }
  ]

  const faqs = [
    {
      question: 'Is my health data secure?',
      answer: 'Yes, we use bank-level encryption and are fully HIPAA compliant. Your data is never shared without your explicit consent.'
    },
    {
      question: 'How accurate are the AI predictions?',
      answer: 'Our AI models have 87-95% accuracy depending on the specific feature. However, they should supplement, not replace, professional medical advice.'
    },
    {
      question: 'Can I export my health data?',
      answer: 'Absolutely. You can export your data at any time in various formats including PDF reports and CSV files.'
    },
    {
      question: 'Do you offer enterprise solutions?',
      answer: 'Yes, we offer enterprise and healthcare provider solutions. Contact us to discuss custom implementations.'
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        category: 'general',
        message: ''
      })
    }, 2000)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div style={{ backgroundColor: 'var(--background-color)', minHeight: '100vh' }}>
      {/* Header with Healthcare Support Background */}
      <div style={{ 
        background: 'linear-gradient(135deg, rgba(56, 178, 172, 0.9) 0%, rgba(45, 55, 72, 0.9) 100%), url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
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
              <MessageCircle size={60} />
            </div>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              Get in Touch
            </h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
              We're here to help with any questions about your health journey and our platform
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '4rem 1rem' }}>
        {/* Emergency Notice */}
        <div style={{
          backgroundColor: '#fee',
          border: '2px solid var(--error-color)',
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '3rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <AlertCircle size={32} style={{ color: 'var(--error-color)', flexShrink: 0 }} />
          <div>
            <h4 style={{ color: 'var(--error-color)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
              Medical Emergency?
            </h4>
            <p style={{ color: 'var(--error-color)', margin: 0 }}>
              If you're experiencing a medical emergency, please call <strong>911</strong> immediately. 
              This contact form is not monitored for urgent medical situations.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '4rem' }}>
          {/* Contact Form */}
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>
              Send us a Message
            </h2>
            
            {isSubmitted ? (
              <div className="alert alert-success" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ color: 'var(--success-color)', marginBottom: '1rem' }}>Message Sent!</h3>
                <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => setIsSubmitted(false)}
                  style={{ marginTop: '1rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ backgroundColor: 'var(--surface-color)', padding: '2rem', borderRadius: '12px', boxShadow: 'var(--shadow)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      className="form-input"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      className="form-input"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Category</label>
                  <select
                    name="category"
                    className="form-select"
                    value={formData.category}
                    onChange={handleInputChange}
                  >
                    {categories.map(cat => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    className="form-input"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea
                    name="message"
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Please provide details about your inquiry. The more information you provide, the better we can assist you."
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                  style={{ 
                    width: '100%', 
                    padding: '1rem',
                    fontSize: '1.1rem',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner" style={{ width: '20px', height: '20px', marginRight: '0.5rem' }}></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>

                <p style={{ 
                  fontSize: '0.9rem', 
                  color: 'var(--text-secondary)', 
                  textAlign: 'center', 
                  marginTop: '1rem' 
                }}>
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>
              Other Ways to Reach Us
            </h2>

            <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '3rem' }}>
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1.5rem',
                    backgroundColor: 'var(--surface-color)',
                    borderRadius: '12px',
                    boxShadow: 'var(--shadow)'
                  }}
                >
                  <div style={{ color: 'var(--primary-color)', marginTop: '0.25rem' }}>
                    {info.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                      {info.title}
                    </h4>
                    <div style={{ 
                      fontWeight: '600', 
                      color: 'var(--primary-color)', 
                      marginBottom: '0.25rem' 
                    }}>
                      {info.info}
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div style={{
              backgroundColor: 'var(--surface-color)',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: 'var(--shadow)',
              marginBottom: '2rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <Clock size={24} style={{ color: 'var(--primary-color)' }} />
                <h4 style={{ color: 'var(--text-primary)', margin: 0 }}>Business Hours</h4>
              </div>
              <div style={{ display: 'grid', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Monday - Friday</span>
                  <span style={{ fontWeight: '600' }}>9:00 AM - 6:00 PM EST</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Saturday</span>
                  <span style={{ fontWeight: '600' }}>10:00 AM - 4:00 PM EST</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Sunday</span>
                  <span style={{ fontWeight: '600' }}>Closed</span>
                </div>
                <div style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                  <strong>Live Chat:</strong> Available 24/7 with AI assistance
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section style={{ marginTop: '4rem' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            textAlign: 'center', 
            marginBottom: '3rem', 
            color: 'var(--text-primary)' 
          }}>
            Frequently Asked Questions
          </h2>
          <div style={{ 
            maxWidth: '800px', 
            margin: '0 auto',
            display: 'grid',
            gap: '1rem'
          }}>
            {faqs.map((faq, index) => (
              <details 
                key={index}
                style={{
                  backgroundColor: 'var(--surface-color)',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  boxShadow: 'var(--shadow)',
                  cursor: 'pointer'
                }}
              >
                <summary style={{
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  fontSize: '1.1rem',
                  marginBottom: '1rem',
                  cursor: 'pointer',
                  listStyle: 'none',
                  position: 'relative',
                  paddingRight: '2rem'
                }}>
                  {faq.question}
                  <span style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    fontSize: '1.5rem',
                    color: 'var(--primary-color)'
                  }}>
                    +
                  </span>
                </summary>
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  lineHeight: '1.6',
                  margin: 0 
                }}>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Additional Resources */}
        <section style={{ 
          marginTop: '4rem', 
          textAlign: 'center',
          backgroundColor: 'var(--surface-color)',
          padding: '3rem',
          borderRadius: '16px',
          boxShadow: 'var(--shadow)'
        }}>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>
            Need Immediate Help?
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Check out our help resources for quick answers to common questions.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary">Help Center</button>
            <button className="btn btn-secondary">Video Tutorials</button>
            <button className="btn btn-secondary">Community Forum</button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact
