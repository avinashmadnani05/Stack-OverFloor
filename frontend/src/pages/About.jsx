import { Heart, Users, Award, Shield, Target, Lightbulb } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: <Heart size={40} />,
      title: "Patient-Centered Care",
      description: "We put your health and well-being at the center of everything we do, providing personalized solutions for your unique healthcare journey."
    },
    {
      icon: <Shield size={40} />,
      title: "Privacy & Security",
      description: "Your health data is protected with bank-level encryption and security measures. We never share your information without explicit consent."
    },
    {
      icon: <Lightbulb size={40} />,
      title: "AI-Powered Insights",
      description: "Leverage cutting-edge artificial intelligence to get personalized health insights and early warning signs for better health outcomes."
    },
    {
      icon: <Users size={40} />,
      title: "Community Support",
      description: "Connect with a supportive community of users and healthcare professionals who understand your health journey."
    }
  ]

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      image: "👩‍⚕️",
      description: "Board-certified physician with 15+ years in digital health"
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      image: "👨‍💻",
      description: "Former Google engineer specializing in healthcare AI"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Mental Health Director",
      image: "🧠",
      description: "Licensed psychologist and researcher in digital therapy"
    },
    {
      name: "David Kim",
      role: "Head of Product",
      image: "📱",
      description: "10+ years designing user-centered healthcare solutions"
    }
  ]

  const milestones = [
    { year: "2020", title: "Company Founded", description: "Started with a mission to democratize healthcare access" },
    { year: "2021", title: "AI Platform Launch", description: "Launched our first AI-powered health monitoring tools" },
    { year: "2022", title: "50K+ Users", description: "Reached our first major user milestone" },
    { year: "2023", title: "Medical Partnerships", description: "Partnered with leading healthcare institutions" },
    { year: "2024", title: "Advanced Features", description: "Introduced comprehensive health management suite" }
  ]

  return (
    <div style={{ backgroundColor: 'var(--background-color)', minHeight: '100vh' }}>
      {/* Header with Healthcare Team Background */}
      <div style={{ 
        background: 'linear-gradient(135deg, rgba(56, 178, 172, 0.9) 0%, rgba(45, 55, 72, 0.9) 100%), url("https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white', 
        padding: '4rem 0',
        position: 'relative'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              About HealthCare Pro
            </h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.95, lineHeight: '1.6' }}>
              We're revolutionizing healthcare by making it more accessible, personalized, and intelligent. 
              Our mission is to empower individuals with the tools and insights they need to take control 
              of their health journey.
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '4rem 1rem' }}>
        {/* Mission Statement */}
        <section style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <div style={{ 
            maxWidth: '800px', 
            margin: '0 auto',
            padding: '3rem',
            backgroundColor: 'var(--surface-color)',
            borderRadius: '16px',
            boxShadow: 'var(--shadow)'
          }}>
            <Target size={60} style={{ color: 'var(--primary-color)', marginBottom: '2rem' }} />
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              Our Mission
            </h2>
            <p style={{ 
              fontSize: '1.1rem', 
              color: 'var(--text-secondary)', 
              lineHeight: '1.8',
              marginBottom: '2rem'
            }}>
              To bridge the gap between traditional healthcare and modern technology, creating an 
              ecosystem where everyone can access personalized, intelligent, and affordable healthcare 
              solutions. We believe that technology should enhance the human aspect of healthcare, 
              not replace it.
            </p>
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>50K+</div>
                <div style={{ color: 'var(--text-secondary)' }}>Users Helped</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>99.9%</div>
                <div style={{ color: 'var(--text-secondary)' }}>Uptime</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>24/7</div>
                <div style={{ color: 'var(--text-secondary)' }}>Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            textAlign: 'center', 
            marginBottom: '3rem', 
            color: 'var(--text-primary)' 
          }}>
            What Drives Us
          </h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            textAlign: 'center', 
            marginBottom: '3rem', 
            color: 'var(--text-primary)' 
          }}>
            Meet Our Team
          </h2>
          <div className="features-grid">
            {team.map((member, index) => (
              <div key={index} className="feature-card" style={{ textAlign: 'center' }}>
                <div style={{ 
                  fontSize: '4rem', 
                  marginBottom: '1rem',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--background-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem'
                }}>
                  {member.image}
                </div>
                <h3 style={{ marginBottom: '0.5rem' }}>{member.name}</h3>
                <div style={{ 
                  color: 'var(--primary-color)', 
                  fontWeight: '600', 
                  marginBottom: '1rem',
                  fontSize: '0.95rem'
                }}>
                  {member.role}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            textAlign: 'center', 
            marginBottom: '3rem', 
            color: 'var(--text-primary)' 
          }}>
            Our Journey
          </h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '2rem',
                  position: 'relative'
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-color)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  marginRight: '2rem',
                  flexShrink: 0
                }}>
                  {milestone.year}
                </div>
                <div style={{
                  backgroundColor: 'var(--surface-color)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  flex: 1,
                  boxShadow: 'var(--shadow)'
                }}>
                  <h4 style={{ 
                    color: 'var(--text-primary)', 
                    marginBottom: '0.5rem',
                    fontSize: '1.2rem'
                  }}>
                    {milestone.title}
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recognition */}
        <section style={{ textAlign: 'center' }}>
          <div style={{
            backgroundColor: 'var(--surface-color)',
            padding: '3rem',
            borderRadius: '16px',
            boxShadow: 'var(--shadow)'
          }}>
            <Award size={60} style={{ color: 'var(--primary-color)', marginBottom: '2rem' }} />
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>
              Recognition & Certifications
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '2rem',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <div>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>HIPAA Compliant</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Fully compliant with healthcare privacy regulations
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>SOC 2 Certified</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Rigorous security and availability standards
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>FDA Registered</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Medical device software registration
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
