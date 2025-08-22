import { useState } from 'react'
import { Calculator, DollarSign, FileText, TrendingUp, AlertCircle, PieChart } from 'lucide-react'

const CostCalculator = () => {
  const [calculationType, setCalculationType] = useState('procedure')
  const [formData, setFormData] = useState({
    procedure: '',
    location: '',
    insurance: 'none',
    income: '',
    zipCode: '',
    urgency: 'routine'
  })
  const [costEstimate, setCostEstimate] = useState(null)
  const [showBreakdown, setShowBreakdown] = useState(false)

  const procedures = [
    { value: 'routine_checkup', label: 'Routine Checkup', avgCost: 200 },
    { value: 'blood_work', label: 'Blood Work Panel', avgCost: 150 },
    { value: 'mri_scan', label: 'MRI Scan', avgCost: 1200 },
    { value: 'ct_scan', label: 'CT Scan', avgCost: 800 },
    { value: 'x_ray', label: 'X-Ray', avgCost: 100 },
    { value: 'dental_cleaning', label: 'Dental Cleaning', avgCost: 120 },
    { value: 'eye_exam', label: 'Eye Examination', avgCost: 180 },
    { value: 'physical_therapy', label: 'Physical Therapy Session', avgCost: 90 },
    { value: 'emergency_visit', label: 'Emergency Room Visit', avgCost: 1500 },
    { value: 'specialist_visit', label: 'Specialist Consultation', avgCost: 350 }
  ]

  const insuranceTypes = [
    { value: 'none', label: 'No Insurance' },
    { value: 'basic', label: 'Basic Plan' },
    { value: 'standard', label: 'Standard Plan' },
    { value: 'premium', label: 'Premium Plan' },
    { value: 'medicare', label: 'Medicare' },
    { value: 'medicaid', label: 'Medicaid' }
  ]

  const locations = [
    { value: 'hospital', label: 'Hospital', multiplier: 1.3 },
    { value: 'clinic', label: 'Clinic', multiplier: 1.0 },
    { value: 'urgent_care', label: 'Urgent Care', multiplier: 0.8 },
    { value: 'private_practice', label: 'Private Practice', multiplier: 1.1 }
  ]

  const calculateCost = () => {
    const selectedProcedure = procedures.find(p => p.value === formData.procedure)
    if (!selectedProcedure) return

    let baseCost = selectedProcedure.avgCost
    
    // Location multiplier
    const locationMultiplier = locations.find(l => l.value === formData.location)?.multiplier || 1.0
    baseCost *= locationMultiplier

    // Insurance adjustments
    let insuranceCoverage = 0
    let copay = 0
    let deductible = 0

    switch (formData.insurance) {
      case 'basic':
        insuranceCoverage = 0.6
        copay = 30
        deductible = 2000
        break
      case 'standard':
        insuranceCoverage = 0.8
        copay = 25
        deductible = 1000
        break
      case 'premium':
        insuranceCoverage = 0.9
        copay = 15
        deductible = 500
        break
      case 'medicare':
        insuranceCoverage = 0.8
        copay = 20
        deductible = 200
        break
      case 'medicaid':
        insuranceCoverage = 0.95
        copay = 5
        deductible = 0
        break
      default:
        insuranceCoverage = 0
        copay = 0
        deductible = 0
    }

    // Calculate final costs
    const totalCost = Math.round(baseCost)
    const insuranceCovers = Math.round(totalCost * insuranceCoverage)
    const yourCost = Math.max(totalCost - insuranceCovers + copay, copay)
    
    setCostEstimate({
      procedureName: selectedProcedure.label,
      totalCost,
      insuranceCovers,
      yourCost,
      copay,
      deductible,
      breakdown: {
        baseCost: selectedProcedure.avgCost,
        locationAdjustment: Math.round((locationMultiplier - 1) * selectedProcedure.avgCost),
        locationMultiplier,
        insuranceCoverage: Math.round(insuranceCoverage * 100)
      }
    })
    setShowBreakdown(true)
  }

  const savingsPrograms = [
    {
      name: 'Hospital Financial Assistance',
      description: 'Many hospitals offer charity care or payment plans for uninsured patients',
      savings: 'Up to 100%'
    },
    {
      name: 'GoodRx Prescription Discounts',
      description: 'Free discount program for prescription medications',
      savings: 'Up to 80%'
    },
    {
      name: 'Health Savings Account (HSA)',
      description: 'Tax-advantaged account for medical expenses',
      savings: 'Tax deductible'
    },
    {
      name: 'Flexible Spending Account (FSA)',
      description: 'Pre-tax dollars for healthcare expenses',
      savings: 'Tax savings'
    }
  ]

  return (
    <div style={{ backgroundColor: 'var(--background-color)', minHeight: '100vh' }}>
      {/* Header with Healthcare Financial Planning Background */}
      <div style={{ 
        background: 'linear-gradient(135deg, rgba(56, 178, 172, 0.9) 0%, rgba(45, 55, 72, 0.9) 100%), url("https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
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
              <Calculator size={60} />
            </div>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              Healthcare Cost Calculator
            </h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
              Transparent healthcare cost estimation and financial planning tools for informed medical decisions
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '3rem 1rem' }}>
        {/* Calculator Type Selection */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              className={`btn ${calculationType === 'procedure' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setCalculationType('procedure')}
            >
              <FileText size={20} />
              Procedure Cost
            </button>
            <button
              className={`btn ${calculationType === 'annual' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setCalculationType('annual')}
            >
              <TrendingUp size={20} />
              Annual Planning
            </button>
            <button
              className={`btn ${calculationType === 'comparison' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setCalculationType('comparison')}
            >
              <PieChart size={20} />
              Cost Comparison
            </button>
          </div>
        </div>

        {/* Procedure Cost Calculator */}
        {calculationType === 'procedure' && (
          <div className="form-container" style={{ marginBottom: '3rem' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-primary)' }}>
              Calculate Procedure Costs
            </h3>

            <div className="form-group">
              <label className="form-label">Select Procedure</label>
              <select
                className="form-select"
                value={formData.procedure}
                onChange={(e) => setFormData({...formData, procedure: e.target.value})}
              >
                <option value="">Choose a procedure...</option>
                {procedures.map((proc) => (
                  <option key={proc.value} value={proc.value}>
                    {proc.label} (Est. ${proc.avgCost})
                  </option>
                ))}
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Location Type</label>
                <select
                  className="form-select"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                >
                  <option value="">Select location...</option>
                  {locations.map((loc) => (
                    <option key={loc.value} value={loc.value}>
                      {loc.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Insurance Coverage</label>
                <select
                  className="form-select"
                  value={formData.insurance}
                  onChange={(e) => setFormData({...formData, insurance: e.target.value})}
                >
                  {insuranceTypes.map((ins) => (
                    <option key={ins.value} value={ins.value}>
                      {ins.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">ZIP Code (for regional pricing)</label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter your ZIP code"
                value={formData.zipCode}
                onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
              />
            </div>

            <div style={{ textAlign: 'center' }}>
              <button
                className="btn btn-primary"
                onClick={calculateCost}
                disabled={!formData.procedure || !formData.location}
                style={{ 
                  padding: '1rem 2rem',
                  fontSize: '1.1rem',
                  opacity: (!formData.procedure || !formData.location) ? 0.5 : 1
                }}
              >
                <Calculator size={20} />
                Calculate Costs
              </button>
            </div>
          </div>
        )}

        {/* Cost Estimate Results */}
        {costEstimate && showBreakdown && (
          <div className="chart-container" style={{ marginBottom: '3rem' }}>
            <h3 style={{ marginBottom: '2rem', color: 'var(--text-primary)', textAlign: 'center' }}>
              Cost Estimate for {costEstimate.procedureName}
            </h3>

            {/* Cost Summary Cards */}
            <div className="stats-grid" style={{ marginBottom: '2rem' }}>
              <div className="stat-card">
                <DollarSign size={30} style={{ color: 'var(--primary-color)', marginBottom: '1rem' }} />
                <span className="stat-value">${costEstimate.totalCost}</span>
                <div className="stat-label">Total Procedure Cost</div>
              </div>
              
              <div className="stat-card">
                <span style={{ fontSize: '2rem', marginBottom: '1rem' }}>🏥</span>
                <span className="stat-value">${costEstimate.insuranceCovers}</span>
                <div className="stat-label">Insurance Covers</div>
              </div>
              
              <div className="stat-card" style={{ backgroundColor: '#fff8e1', border: '2px solid var(--warning-color)' }}>
                <AlertCircle size={30} style={{ color: 'var(--warning-color)', marginBottom: '1rem' }} />
                <span className="stat-value" style={{ color: 'var(--warning-color)' }}>
                  ${costEstimate.yourCost}
                </span>
                <div className="stat-label">Your Estimated Cost</div>
              </div>
              
              <div className="stat-card">
                <span style={{ fontSize: '2rem', marginBottom: '1rem' }}>💳</span>
                <span className="stat-value">${costEstimate.copay}</span>
                <div className="stat-label">Copay</div>
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div style={{ 
              backgroundColor: '#f8f9fa', 
              padding: '2rem', 
              borderRadius: '12px',
              border: '1px solid var(--border-color)'
            }}>
              <h4 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                Cost Breakdown
              </h4>
              
              <div style={{ display: 'grid', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>
                  <span>Base Procedure Cost:</span>
                  <span style={{ fontWeight: '600' }}>${costEstimate.breakdown.baseCost}</span>
                </div>
                
                {costEstimate.breakdown.locationAdjustment !== 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>
                    <span>Location Adjustment ({Math.round((costEstimate.breakdown.locationMultiplier - 1) * 100)}%):</span>
                    <span style={{ fontWeight: '600', color: costEstimate.breakdown.locationAdjustment > 0 ? 'var(--error-color)' : 'var(--success-color)' }}>
                      {costEstimate.breakdown.locationAdjustment > 0 ? '+' : ''}${costEstimate.breakdown.locationAdjustment}
                    </span>
                  </div>
                )}
                
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>
                  <span>Total Procedure Cost:</span>
                  <span style={{ fontWeight: '600' }}>${costEstimate.totalCost}</span>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>
                  <span>Insurance Coverage ({costEstimate.breakdown.insuranceCoverage}%):</span>
                  <span style={{ fontWeight: '600', color: 'var(--success-color)' }}>-${costEstimate.insuranceCovers}</span>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>
                  <span>Copay:</span>
                  <span style={{ fontWeight: '600' }}>${costEstimate.copay}</span>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '1rem', fontSize: '1.1rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                  <span>Your Total Cost:</span>
                  <span>${costEstimate.yourCost}</span>
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button className="btn btn-primary">
                  Find Providers
                </button>
                <button className="btn btn-secondary">
                  Payment Plans
                </button>
                <button className="btn btn-secondary">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Money Saving Programs */}
        <div className="chart-container" style={{ marginBottom: '3rem' }}>
          <h3 style={{ marginBottom: '2rem', color: 'var(--text-primary)', textAlign: 'center' }}>
            Money-Saving Programs & Resources
          </h3>
          
          <div className="features-grid">
            {savingsPrograms.map((program, index) => (
              <div key={index} className="feature-card">
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h4 style={{ color: 'var(--primary-color)', margin: 0 }}>{program.name}</h4>
                    <span style={{ 
                      backgroundColor: 'var(--success-color)', 
                      color: 'white', 
                      padding: '0.25rem 0.5rem', 
                      borderRadius: '4px', 
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}>
                      {program.savings}
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', margin: 0, lineHeight: '1.5' }}>
                    {program.description}
                  </p>
                </div>
                <button className="btn btn-secondary" style={{ width: '100%' }}>
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div style={{ 
          padding: '2rem', 
          backgroundColor: 'var(--surface-color)', 
          borderRadius: '12px',
          border: '1px solid var(--border-color)'
        }}>
          <h4 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>
            💡 Healthcare Cost-Saving Tips
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <div>
              <h5 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Before Treatment</h5>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                <li>Get multiple quotes from different providers</li>
                <li>Ask about cash discounts (typically 10-30% off)</li>
                <li>Check if the procedure is covered by your insurance</li>
                <li>Consider telehealth options when appropriate</li>
              </ul>
            </div>
            <div>
              <h5 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Insurance Optimization</h5>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                <li>Use in-network providers whenever possible</li>
                <li>Understand your deductible and out-of-pocket limits</li>
                <li>Get pre-authorization for expensive procedures</li>
                <li>Appeal denied claims if necessary</li>
              </ul>
            </div>
            <div>
              <h5 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Alternative Options</h5>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
                <li>Consider urgent care instead of ER for non-emergencies</li>
                <li>Look into community health centers</li>
                <li>Ask about generic medication alternatives</li>
                <li>Explore clinical trials for expensive treatments</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CostCalculator
