import { Link } from 'react-router-dom'
import { 
  Pill, 
  Heart, 
  Camera, 
  Calculator, 
  BookOpen, 
  BarChart3, 
  Shield, 
  Clock,
  Award,
  Users
} from 'lucide-react'

const HomePage = () => {
  const features = [
    {
      icon: <Pill size={40} />,
      title: "Medication Tracker",
      description: "Never miss a dose with smart reminders and comprehensive medication management.",
      link: "/medication-tracker"
    },
    {
      icon: <Heart size={40} />,
      title: "Mental Health Monitor",
      description: "Track your mood, emotions, and mental wellness with AI-powered insights.",
      link: "/mood-monitor"
    },
    {
      icon: <Camera size={40} />,
      title: "Medical Image Detector",
      description: "AI-powered medical image analysis for early anomaly detection and health insights.",
      link: "/medical-detector"
    },
    {
      icon: <Calculator size={40} />,
      title: "Healthcare Cost Calculator",
      description: "Estimate and plan your healthcare expenses with our comprehensive cost calculator.",
      link: "/cost-calculator"
    },
    {
      icon: <BookOpen size={40} />,
      title: "Health Journal",
      description: "Document your health journey with our intuitive journaling system.",
      link: "/journal"
    },
    {
      icon: <BarChart3 size={40} />,
      title: "Analytics Dashboard",
      description: "Visualize your health data with comprehensive charts and insights.",
      link: "/dashboard"
    }
  ]

  const stats = [
    { icon: <Users size={30} />, value: "50K+", label: "Active Users" },
    { icon: <Shield size={30} />, value: "99.9%", label: "Data Security" },
    { icon: <Clock size={30} />, value: "24/7", label: "Support" },
    { icon: <Award size={30} />, value: "4.9★", label: "User Rating" }
  ]

  return (
    <div className="homepage">
      {/* Hero Section with Medical Background */}
      <section className="hero" style={{
        background: 'linear-gradient(135deg, rgba(45, 55, 72, 0.9) 0%, rgba(26, 32, 44, 0.9) 100%), url("https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}>
        {/* Floating Medical Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '100px',
          height: '100px',
          backgroundImage: 'url("https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80")',
          backgroundSize: 'cover',
          borderRadius: '50%',
          opacity: 0.3,
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '80px',
          height: '80px',
          backgroundImage: 'url("https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80")',
          backgroundSize: 'cover',
          borderRadius: '50%',
          opacity: 0.2,
          animation: 'float 4s ease-in-out infinite reverse'
        }}></div>

        <div className="hero-content fade-in-up" style={{
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '2rem',
          position: 'relative',
          zIndex: 2
        }}>
          {/* Doctor Avatar */}
          <div style={{
            width: '150px',
            height: '150px',
            backgroundImage: 'url("https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '50%',
            margin: '0 auto 2rem',
            border: '5px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
          }}></div>

          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '700',
            color: 'white',
            marginBottom: '1.5rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            lineHeight: '1.2'
          }}>
            Your Complete Healthcare Companion
          </h1>
          <p style={{
            fontSize: '1.3rem',
            color: 'rgba(255, 255, 255, 0.95)',
            marginBottom: '3rem',
            lineHeight: '1.6',
            textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
          }}>
            Manage medications, monitor mental health, analyze medical images, 
            and track healthcare costs - all in one intelligent platform.
          </p>
          <div className="cta-buttons" style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link to="/dashboard" className="btn btn-primary" style={{
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              fontWeight: '600',
              borderRadius: '50px',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease',
              transform: 'translateY(0)'
            }}>
              Get Started
            </Link>
            <Link to="/about" className="btn btn-secondary" style={{
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              fontWeight: '600',
              borderRadius: '50px',
              background: 'rgba(255, 255, 255, 0.2)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(10px)',
              color: 'white'
            }}>
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section with Healthcare Background */}
      <section style={{ 
        padding: '5rem 0', 
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%), url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(255, 255, 255, 0.8)',
          zIndex: 1
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              color: 'var(--primary-color)',
              marginBottom: '1rem',
              fontWeight: '700'
            }}>
              Trusted by Healthcare Professionals
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Join thousands of users who trust us with their healthcare management
            </p>
          </div>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card fade-in-up" style={{ 
                animationDelay: `${index * 0.1}s`,
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(74, 144, 226, 0.1)',
                borderRadius: '20px',
                padding: '2.5rem 1.5rem',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Background medical icons */}
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  fontSize: '4rem',
                  opacity: 0.1,
                  color: 'var(--primary-color)'
                }}>
                  {index === 0 ? '👥' : index === 1 ? '🔒' : index === 2 ? '⏰' : '⭐'}
                </div>
                
                <div className="feature-icon" style={{ 
                  margin: '0 auto 1.5rem',
                  width: '70px',
                  height: '70px',
                  background: 'var(--primary-color)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}>
                  {stat.icon}
                </div>
                <span className="stat-value" style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  color: 'var(--primary-color)',
                  display: 'block',
                  marginBottom: '0.5rem'
                }}>
                  {stat.value}
                </span>
                <div className="stat-label" style={{
                  fontSize: '1.1rem',
                  color: 'var(--text-secondary)',
                  fontWeight: '600'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Individual Images */}
      <section className="features-section" style={{
        padding: '6rem 0',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
      }}>
        <div className="container">
          <h2 className="section-title" style={{
            fontSize: '3rem',
            textAlign: 'center',
            marginBottom: '1rem',
            color: 'var(--text-primary)'
          }}>
            Comprehensive Health Management
          </h2>
          <p className="section-subtitle" style={{
            textAlign: 'center',
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            maxWidth: '700px',
            margin: '0 auto 4rem',
            lineHeight: '1.6'
          }}>
            Everything you need to take control of your health and wellness journey
          </p>
          
          <div className="features-grid">
            {features.map((feature, index) => {
              // Define specific images for each feature
              const featureImages = [
                "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", // Pills for medication
                "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", // Mental health
                "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", // Medical imaging
                "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", // Calculator/costs
                "https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", // Journal/notes
                "https://images.unsplash.com/photo-1551838719-d64fb15d5c2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"  // Dashboard/analytics
              ];

              return (
                <div key={index} className="feature-card fade-in-up" style={{ 
                  animationDelay: `${index * 0.1}s`,
                  background: 'white',
                  borderRadius: '20px',
                  padding: '0',
                  overflow: 'hidden',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}>
                  {/* Feature Image Header */}
                  <div style={{
                    height: '200px',
                    backgroundImage: `url("${featureImages[index]}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(56, 178, 172, 0.9) 0%, rgba(45, 55, 72, 0.9) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div className="feature-icon" style={{
                        width: '80px',
                        height: '80px',
                        background: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        backdropFilter: 'blur(10px)',
                        border: '2px solid rgba(255, 255, 255, 0.3)'
                      }}>
                        {feature.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div style={{
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '1'
                  }}>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      marginBottom: '1rem'
                    }}>
                      {feature.title}
                    </h3>
                    <p style={{
                      color: 'var(--text-secondary)',
                      lineHeight: '1.6',
                      marginBottom: '2rem',
                      flex: '1'
                    }}>
                      {feature.description}
                    </p>
                    <Link 
                      to={feature.link} 
                      className="btn btn-primary" 
                      style={{ 
                        alignSelf: 'flex-start',
                        borderRadius: '25px',
                        padding: '0.75rem 1.5rem',
                        fontWeight: '600',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      Explore Feature →
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section with Medical Team */}
      <section style={{ 
        padding: '6rem 0', 
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%), url("https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(248, 250, 252, 0.9)',
          zIndex: 1
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            {/* Medical Team Images */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '3rem',
              flexWrap: 'wrap'
            }}>
              {[
                "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                "https://images.unsplash.com/photo-1594824140840-4b2fbd88f9a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
              ].map((img, index) => (
                <div key={index} style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundImage: `url("${img}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '3px solid var(--primary-color)',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                  animation: `float ${3 + index}s ease-in-out infinite`,
                  animationDelay: `${index * 0.5}s`
                }}>
                </div>
              ))}
            </div>

            <h2 className="section-title" style={{
              fontSize: '3rem',
              marginBottom: '1rem',
              color: 'var(--primary-color)'
            }}>
              Why Choose HealthCare Pro?
            </h2>
            
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--text-secondary)',
              marginBottom: '4rem',
              lineHeight: '1.6'
            }}>
              Trusted by healthcare professionals and loved by patients worldwide
            </p>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '3rem', 
              marginTop: '3rem' 
            }}>
              {[
                {
                  emoji: '🔒',
                  image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
                  title: 'Secure & Private',
                  description: 'Your health data is encrypted and protected with bank-level security. We never share your personal information without your explicit consent.'
                },
                {
                  emoji: '🤖',
                  image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
                  title: 'AI-Powered Insights',
                  description: 'Our advanced AI analyzes your health patterns to provide personalized recommendations and early warning signs.'
                },
                {
                  emoji: '📱',
                  image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
                  title: 'Cross-Platform Access',
                  description: 'Access your health data anytime, anywhere. Our responsive design works seamlessly across all devices.'
                },
                {
                  emoji: '🏥',
                  image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
                  title: 'Healthcare Integration',
                  description: 'Seamlessly integrate with healthcare providers and share your health data with medical professionals when needed.'
                }
              ].map((item, index) => (
                <div key={index} style={{ 
                  textAlign: 'left',
                  background: 'rgba(255, 255, 255, 0.8)',
                  padding: '2rem',
                  borderRadius: '20px',
                  border: '1px solid rgba(74, 144, 226, 0.1)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    width: '80px',
                    height: '80px',
                    backgroundImage: `url("${item.image}")`,
                    backgroundSize: 'cover',
                    borderRadius: '50%',
                    opacity: 0.2
                  }}></div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1rem',
                    position: 'relative',
                    zIndex: 2
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
                      {item.emoji}
                    </div>
                    <h3 style={{ 
                      color: 'var(--primary-color)', 
                      margin: 0, 
                      fontSize: '1.4rem',
                      fontWeight: '600'
                    }}>
                      {item.title}
                    </h3>
                  </div>
                  <p style={{ 
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    margin: 0,
                    position: 'relative',
                    zIndex: 2
                  }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
