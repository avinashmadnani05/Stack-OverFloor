import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Menu, 
  X, 
  Heart, 
  Home,
  Pill,
  Brain,
  BookOpen,
  BarChart3,
  Camera,
  Calculator,
  Info,
  Phone,
  User,
  Settings
} from 'lucide-react'

const Navbar = ({ isSidebarOpen, setIsSidebarOpen, isMobile }) => {
  const location = useLocation()

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  const navigationItems = [
    { path: '/', icon: Home, label: 'Home', color: '#4A90E2' },
    { path: '/medication-tracker', icon: Pill, label: 'Medication', color: '#7ED321' },
    { path: '/mood-monitor', icon: Brain, label: 'Mood Monitor', color: '#9B59B6' },
    { path: '/journal', icon: BookOpen, label: 'Journal', color: '#E67E22' },
    { path: '/dashboard', icon: BarChart3, label: 'Dashboard', color: '#1ABC9C' },
    { path: '/medical-detector', icon: Camera, label: 'Image Detector', color: '#E74C3C' },
    { path: '/cost-calculator', icon: Calculator, label: 'Cost Calculator', color: '#F39C12' },
    { path: '/about', icon: Info, label: 'About', color: '#3498DB' },
    { path: '/contact', icon: Phone, label: 'Contact', color: '#2ECC71' }
  ]

  return (
    <>
      {/* Top Bar for Mobile */}
      <div className="top-bar">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
        <Link to="/" className="mobile-logo">
          <Heart size={24} />
          <span>HealthCare Pro</span>
        </Link>
        <div className="mobile-user">
          <User size={24} />
        </div>
      </div>

      {/* Floating Toggle Button for Desktop (when sidebar is hidden) */}
      {!isSidebarOpen && !isMobile && (
        <button className="floating-toggle-btn" onClick={toggleSidebar} title="Show Sidebar">
          <Menu size={24} />
        </button>
      )}

      {/* Overlay for mobile */}
      {isSidebarOpen && isMobile && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        {/* Sidebar Header */}
        <div className="sidebar-header">
          <Link to="/" className="sidebar-logo" onClick={() => isMobile && setIsSidebarOpen(false)}>
            <div className="logo-icon">
              <Heart size={32} />
            </div>
            <div className="logo-text">
              <span className="logo-title">HealthCare</span>
              <span className="logo-subtitle">Pro</span>
            </div>
          </Link>
          <button className="sidebar-toggle-desktop" onClick={toggleSidebar} title="Toggle Sidebar">
            <Menu size={20} />
          </button>
          <button className="sidebar-close" onClick={toggleSidebar}>
            <X size={20} />
          </button>
        </div>

        {/* User Profile Section */}
        <div className="sidebar-profile">
          <div className="profile-avatar">
            <User size={24} />
          </div>
          <div className="profile-info">
            <span className="profile-name">Welcome Back</span>
            <span className="profile-role">Patient Portal</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          <ul className="nav-list">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const active = isActive(item.path)
              
              return (
                <li key={item.path} className="nav-item">
                  <Link 
                    to={item.path} 
                    className={`nav-link-sidebar ${active ? 'active' : ''}`}
                    onClick={() => setIsSidebarOpen(false)}
                    style={{ 
                      '--nav-color': item.color,
                      backgroundColor: active ? `${item.color}15` : 'transparent',
                      borderRight: active ? `3px solid ${item.color}` : '3px solid transparent'
                    }}
                  >
                    <div className="nav-icon" style={{ color: active ? item.color : '#7F8C8D' }}>
                      <Icon size={20} />
                    </div>
                    <span className="nav-text">{item.label}</span>
                    {active && <div className="nav-indicator"></div>}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Sidebar Footer */}
        <div className="sidebar-footer">
          <div className="health-tip">
            <div className="tip-icon">💡</div>
            <div className="tip-content">
              <h4>Daily Tip</h4>
              <p>Drink 8 glasses of water for better health!</p>
            </div>
          </div>
          <button className="settings-btn">
            <Settings size={16} />
            <span>Settings</span>
          </button>
        </div>
      </aside>
    </>
  )
}

export default Navbar
