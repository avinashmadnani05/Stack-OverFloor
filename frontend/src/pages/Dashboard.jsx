import { useState, useEffect } from 'react'
import { 
  BarChart3, 
  TrendingUp, 
  Heart, 
  Pill, 
  Brain,
  Calendar,
  Award,
  Target
} from 'lucide-react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
)

const Dashboard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('week')

  // Mock data for demonstration
  const moodData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Mood Score',
        data: [7, 6, 8, 5, 9, 8, 7],
        borderColor: '#4A90E2',
        backgroundColor: 'rgba(74, 144, 226, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  }

  const medicationData = {
    labels: ['Morning', 'Afternoon', 'Evening', 'Night'],
    datasets: [
      {
        label: 'Medications Taken',
        data: [12, 8, 15, 6],
        backgroundColor: [
          '#4A90E2',
          '#7ED321',
          '#50E3C2',
          '#9013FE',
        ],
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
      },
    },
  }

  const stats = [
    {
      icon: <Heart size={30} />,
      title: 'Overall Health Score',
      value: '85%',
      change: '+5%',
      color: '#E74C3C'
    },
    {
      icon: <Pill size={30} />,
      title: 'Medication Adherence',
      value: '94%',
      change: '+2%',
      color: '#4A90E2'
    },
    {
      icon: <Brain size={30} />,
      title: 'Mental Wellness',
      value: '7.2/10',
      change: '+0.5',
      color: '#9B59B6'
    },
    {
      icon: <Target size={30} />,
      title: 'Health Goals',
      value: '3/5',
      change: '+1',
      color: '#27AE60'
    }
  ]

  const wellnessTips = [
    {
      icon: '💧',
      title: 'Stay Hydrated',
      description: 'Drink at least 8 glasses of water daily for optimal health.'
    },
    {
      icon: '🚶‍♀️',
      title: 'Daily Exercise',
      description: 'Aim for 30 minutes of moderate physical activity each day.'
    },
    {
      icon: '😴',
      title: 'Quality Sleep',
      description: 'Get 7-9 hours of sleep nightly for better recovery and mood.'
    },
    {
      icon: '🧘‍♂️',
      title: 'Practice Mindfulness',
      description: 'Spend 10 minutes daily on meditation or breathing exercises.'
    }
  ]

  return (
    <div className="dashboard" style={{ backgroundColor: 'var(--background-color)', minHeight: '100vh' }}>
      {/* Header with Healthcare Analytics Background */}
      <div style={{ 
        background: 'linear-gradient(135deg, rgba(56, 178, 172, 0.9) 0%, rgba(45, 55, 72, 0.9) 100%), url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
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
              <BarChart3 size={60} />
            </div>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              Health Analytics Dashboard
            </h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
              Comprehensive health insights, analytics, and personalized wellness recommendations
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '3rem 1rem' }}>
        {/* Key Stats */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                marginBottom: '1rem' 
              }}>
                <div style={{ color: stat.color }}>
                  {stat.icon}
                </div>
                <span style={{ 
                  color: '#27AE60', 
                  fontSize: '0.9rem', 
                  fontWeight: '600' 
                }}>
                  {stat.change}
                </span>
              </div>
              <div>
                <span className="stat-value">{stat.value}</span>
                <div className="stat-label">{stat.title}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          {/* Mood Trend Chart */}
          <div className="chart-container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--text-primary)' }}>Weekly Mood Trend</h3>
              <select 
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="form-select"
                style={{ width: 'auto' }}
              >
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>
            </div>
            <Line data={moodData} options={lineChartOptions} />
          </div>

          {/* Medication Chart */}
          <div className="chart-container">
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '2rem' }}>Daily Medication Schedule</h3>
            <Bar data={medicationData} options={chartOptions} />
          </div>
        </div>

        {/* Wellness Tips */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ 
            textAlign: 'center', 
            marginBottom: '2rem', 
            color: 'var(--text-primary)',
            fontSize: '2rem'
          }}>
            Wellness Tips for Today
          </h3>
          <div className="features-grid">
            {wellnessTips.map((tip, index) => (
              <div key={index} className="feature-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                  {tip.icon}
                </div>
                <h4 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>
                  {tip.title}
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="chart-container">
          <h3 style={{ marginBottom: '2rem', color: 'var(--text-primary)' }}>Recent Activity</h3>
          <div style={{ space: '1rem' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem', 
              padding: '1rem', 
              borderLeft: '4px solid var(--primary-color)',
              backgroundColor: '#f8f9fa',
              borderRadius: '4px',
              marginBottom: '1rem'
            }}>
              <Calendar size={20} color="var(--primary-color)" />
              <div>
                <strong>Medication Reminder</strong>
                <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Took morning vitamins - 2 hours ago
                </p>
              </div>
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem', 
              padding: '1rem', 
              borderLeft: '4px solid var(--success-color)',
              backgroundColor: '#f8f9fa',
              borderRadius: '4px',
              marginBottom: '1rem'
            }}>
              <Heart size={20} color="var(--success-color)" />
              <div>
                <strong>Mood Entry</strong>
                <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Logged feeling happy - 4 hours ago
                </p>
              </div>
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem', 
              padding: '1rem', 
              borderLeft: '4px solid var(--warning-color)',
              backgroundColor: '#f8f9fa',
              borderRadius: '4px'
            }}>
              <Award size={20} color="var(--warning-color)" />
              <div>
                <strong>Health Goal</strong>
                <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Completed 30-minute walk - 6 hours ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
