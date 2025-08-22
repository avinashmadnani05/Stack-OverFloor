import { Heart, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="logo" style={{ color: 'white', marginBottom: '1rem' }}>
            <Heart size={28} />
            <span>HealthCare Pro</span>
          </div>
          <p style={{ color: '#BDC3C7', lineHeight: '1.6' }}>
            Your comprehensive healthcare companion for medication tracking, 
            mental health monitoring, and overall wellness management.
          </p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="/medication-tracker">Medication Tracker</a>
          <a href="/mood-monitor">Mood Monitor</a>
          <a href="/medical-detector">Medical Detector</a>
          <a href="/cost-calculator">Cost Calculator</a>
          <a href="/dashboard">Dashboard</a>
        </div>
        
        <div className="footer-section">
          <h4>Support</h4>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#help">Help Center</a>
        </div>
        
        <div className="footer-section">
          <h4>Contact Info</h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Mail size={16} />
            <span style={{ color: '#BDC3C7' }}>support@healthcarepro.com</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Phone size={16} />
            <span style={{ color: '#BDC3C7' }}>+1 (555) 123-4567</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin size={16} />
            <span style={{ color: '#BDC3C7' }}>123 Health St, Medical City</span>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 HealthCare Pro. All rights reserved. | Empowering your health journey.</p>
      </div>
    </footer>
  )
}

export default Footer
