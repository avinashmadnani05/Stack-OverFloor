// import { useState } from 'react'
// import { Camera, Upload, Scan, AlertTriangle, CheckCircle, Info, Eye, Download } from 'lucide-react'

// const MedicalImageDetector = () => {
//   const [selectedFile, setSelectedFile] = useState(null)
//   const [previewUrl, setPreviewUrl] = useState(null)
//   const [isAnalyzing, setIsAnalyzing] = useState(false)
//   const [analysisResult, setAnalysisResult] = useState(null)
//   const [uploadMethod, setUploadMethod] = useState('file')

//   const supportedFormats = ['JPEG', 'PNG', 'DICOM', 'TIFF']
//   const analysisTypes = [
//     'X-Ray Analysis',
//     'MRI Scan Review', 
//     'CT Scan Analysis',
//     'Skin Lesion Detection',
//     'Retinal Imaging',
//     'General Anomaly Detection'
//   ]

//   const handleFileSelect = (event) => {
//     const file = event.target.files[0]
//     if (file) {
//       setSelectedFile(file)
//       const reader = new FileReader()
//       reader.onload = (e) => setPreviewUrl(e.target.result)
//       reader.readAsDataURL(file)
//       setAnalysisResult(null)
//     }
//   }

//   const handleAnalyze = () => {
//     if (!selectedFile) return
    
//     setIsAnalyzing(true)
//     // Simulate AI analysis
//     setTimeout(() => {
//       setAnalysisResult({
//         confidence: 87,
//         findings: [
//           { type: 'Normal', description: 'No significant abnormalities detected', severity: 'low' },
//           { type: 'Attention Required', description: 'Minor opacity in left lower lobe - recommend follow-up', severity: 'medium' },
//           { type: 'Technical Quality', description: 'Good image quality and positioning', severity: 'low' }
//         ],
//         recommendations: [
//           'Consult with a radiologist for professional interpretation',
//           'Follow-up imaging may be recommended in 3-6 months',
//           'Discuss findings with your healthcare provider'
//         ],
//         disclaimer: 'This AI analysis is for educational purposes only and should not replace professional medical diagnosis.'
//       })
//       setIsAnalyzing(false)
//     }, 3000)
//   }

//   const getSeverityColor = (severity) => {
//     switch (severity) {
//       case 'high': return 'var(--error-color)'
//       case 'medium': return 'var(--warning-color)'
//       case 'low': return 'var(--success-color)'
//       default: return 'var(--text-secondary)'
//     }
//   }

//   const getSeverityIcon = (severity) => {
//     switch (severity) {
//       case 'high': return <AlertTriangle size={20} />
//       case 'medium': return <Info size={20} />
//       case 'low': return <CheckCircle size={20} />
//       default: return <Info size={20} />
//     }
//   }

//   return (
//     <div style={{ backgroundColor: 'var(--background-color)', minHeight: '100vh' }}>
//       {/* Header with Medical Imaging Background */}
//       <div style={{ 
//         background: 'linear-gradient(135deg, rgba(56, 178, 172, 0.9) 0%, rgba(45, 55, 72, 0.9) 100%), url("https://images.unsplash.com/photo-1582560469781-1965b9af903e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed',
//         color: 'white', 
//         padding: '4rem 0',
//         position: 'relative'
//       }}>
//         <div className="container">
//           <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
//             <div style={{
//               width: '120px',
//               height: '120px',
//               background: 'rgba(255, 255, 255, 0.2)',
//               borderRadius: '50%',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               margin: '0 auto 2rem',
//               backdropFilter: 'blur(10px)',
//               border: '3px solid rgba(255, 255, 255, 0.3)'
//             }}>
//               <Camera size={60} />
//             </div>
//             <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
//               AI Medical Image Detector
//             </h1>
//             <p style={{ fontSize: '1.2rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
//               Advanced artificial intelligence for medical image analysis and early anomaly detection
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="container" style={{ padding: '3rem 1rem' }}>
//         {/* Disclaimer Banner */}
//         <div style={{
//           backgroundColor: '#fff3cd',
//           border: '1px solid #ffeaa7',
//           borderRadius: '8px',
//           padding: '1rem',
//           marginBottom: '2rem',
//           display: 'flex',
//           alignItems: 'center',
//           gap: '1rem'
//         }}>
//           <AlertTriangle size={24} style={{ color: '#856404' }} />
//           <div>
//             <strong style={{ color: '#856404' }}>Important Medical Disclaimer:</strong>
//             <p style={{ margin: '0.25rem 0 0 0', color: '#856404' }}>
//               This tool is for educational purposes only. Always consult qualified healthcare professionals 
//               for medical diagnosis and treatment decisions.
//             </p>
//           </div>
//         </div>

//         {/* Upload Section */}
//         <div className="form-container" style={{ marginBottom: '3rem' }}>
//           <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-primary)' }}>
//             Upload Medical Image for Analysis
//           </h3>

//           {/* Upload Method Selection */}
//           <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
//             <button
//               className={`btn ${uploadMethod === 'file' ? 'btn-primary' : 'btn-secondary'}`}
//               onClick={() => setUploadMethod('file')}
//             >
//               <Upload size={20} />
//               Upload File
//             </button>
//             <button
//               className={`btn ${uploadMethod === 'camera' ? 'btn-primary' : 'btn-secondary'}`}
//               onClick={() => setUploadMethod('camera')}
//             >
//               <Camera size={20} />
//               Take Photo
//             </button>
//           </div>

//           {/* File Upload */}
//           {uploadMethod === 'file' && (
//             <div>
//               <div style={{
//                 border: '2px dashed var(--border-color)',
//                 borderRadius: '12px',
//                 padding: '3rem',
//                 textAlign: 'center',
//                 backgroundColor: 'var(--surface-color)',
//                 transition: 'all 0.3s ease'
//               }}>
//                 <Upload size={48} style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }} />
//                 <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
//                   Drop your medical image here
//                 </h4>
//                 <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
//                   or click to browse files
//                 </p>
//                 <input
//                   type="file"
//                   accept="image/*,.dcm"
//                   onChange={handleFileSelect}
//                   style={{ display: 'none' }}
//                   id="file-upload"
//                 />
//                 <label htmlFor="file-upload" className="btn btn-primary">
//                   Choose File
//                 </label>
//               </div>
              
//               <div style={{ 
//                 display: 'flex', 
//                 justifyContent: 'center', 
//                 gap: '1rem', 
//                 marginTop: '1rem',
//                 fontSize: '0.9rem',
//                 color: 'var(--text-secondary)'
//               }}>
//                 <span>Supported formats:</span>
//                 {supportedFormats.map((format, index) => (
//                   <span key={format} style={{ color: 'var(--primary-color)', fontWeight: '500' }}>
//                     {format}{index < supportedFormats.length - 1 ? ',' : ''}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Image Preview */}
//           {previewUrl && (
//             <div style={{ marginTop: '2rem' }}>
//               <h4 style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--text-primary)' }}>
//                 Image Preview
//               </h4>
//               <div style={{ 
//                 display: 'flex', 
//                 justifyContent: 'center',
//                 marginBottom: '2rem'
//               }}>
//                 <img
//                   src={previewUrl}
//                   alt="Medical image preview"
//                   style={{
//                     maxWidth: '400px',
//                     maxHeight: '400px',
//                     borderRadius: '8px',
//                     border: '1px solid var(--border-color)',
//                     objectFit: 'contain'
//                   }}
//                 />
//               </div>
              
//               <div style={{ textAlign: 'center' }}>
//                 <button
//                   className="btn btn-primary"
//                   onClick={handleAnalyze}
//                   disabled={isAnalyzing}
//                   style={{
//                     padding: '1rem 2rem',
//                     fontSize: '1.1rem',
//                     opacity: isAnalyzing ? 0.7 : 1
//                   }}
//                 >
//                   {isAnalyzing ? (
//                     <>
//                       <div className="spinner" style={{ width: '20px', height: '20px', marginRight: '0.5rem' }}></div>
//                       Analyzing...
//                     </>
//                   ) : (
//                     <>
//                       <Scan size={20} />
//                       Analyze Image
//                     </>
//                   )}
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Analysis Results */}
//         {analysisResult && (
//           <div className="chart-container" style={{ marginBottom: '3rem' }}>
//             <h3 style={{ marginBottom: '2rem', color: 'var(--text-primary)', textAlign: 'center' }}>
//               AI Analysis Results
//             </h3>
            
//             {/* Confidence Score */}
//             <div style={{ 
//               textAlign: 'center', 
//               marginBottom: '2rem',
//               padding: '1rem',
//               backgroundColor: '#f8f9fa',
//               borderRadius: '8px'
//             }}>
//               <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
//                 Analysis Confidence
//               </div>
//               <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
//                 {analysisResult.confidence}%
//               </div>
//             </div>

//             {/* Findings */}
//             <div style={{ marginBottom: '2rem' }}>
//               <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Findings</h4>
//               <div style={{ display: 'grid', gap: '1rem' }}>
//                 {analysisResult.findings.map((finding, index) => (
//                   <div
//                     key={index}
//                     style={{
//                       display: 'flex',
//                       alignItems: 'flex-start',
//                       gap: '1rem',
//                       padding: '1rem',
//                       backgroundColor: 'var(--surface-color)',
//                       borderRadius: '8px',
//                       border: `1px solid ${getSeverityColor(finding.severity)}`,
//                       borderLeft: `4px solid ${getSeverityColor(finding.severity)}`
//                     }}
//                   >
//                     <div style={{ color: getSeverityColor(finding.severity) }}>
//                       {getSeverityIcon(finding.severity)}
//                     </div>
//                     <div style={{ flex: 1 }}>
//                       <div style={{ 
//                         fontWeight: '600', 
//                         color: 'var(--text-primary)', 
//                         marginBottom: '0.25rem' 
//                       }}>
//                         {finding.type}
//                       </div>
//                       <div style={{ color: 'var(--text-secondary)' }}>
//                         {finding.description}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Recommendations */}
//             <div style={{ marginBottom: '2rem' }}>
//               <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Recommendations</h4>
//               <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
//                 {analysisResult.recommendations.map((rec, index) => (
//                   <li key={index}>{rec}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Action Buttons */}
//             <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
//               <button className="btn btn-primary">
//                 <Download size={20} />
//                 Download Report
//               </button>
//               <button className="btn btn-secondary">
//                 <Eye size={20} />
//                 View Detailed Analysis
//               </button>
//               <button 
//                 className="btn btn-secondary"
//                 onClick={() => {
//                   setSelectedFile(null)
//                   setPreviewUrl(null)
//                   setAnalysisResult(null)
//                 }}
//               >
//                 Analyze New Image
//               </button>
//             </div>

//             {/* Disclaimer */}
//             <div style={{
//               marginTop: '2rem',
//               padding: '1rem',
//               backgroundColor: '#e8f4fd',
//               borderRadius: '8px',
//               border: '1px solid #bee5eb'
//             }}>
//               <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
//                 <Info size={20} style={{ color: '#0c5460' }} />
//                 <strong style={{ color: '#0c5460' }}>Medical Disclaimer</strong>
//               </div>
//               <p style={{ margin: 0, color: '#0c5460', fontSize: '0.9rem' }}>
//                 {analysisResult.disclaimer}
//               </p>
//             </div>
//           </div>
//         )}

//         {/* Supported Analysis Types */}
//         <div className="chart-container">
//           <h3 style={{ marginBottom: '2rem', color: 'var(--text-primary)', textAlign: 'center' }}>
//             Supported Analysis Types
//           </h3>
//           <div className="features-grid">
//             {analysisTypes.map((type, index) => (
//               <div key={index} className="feature-card" style={{ textAlign: 'center' }}>
//                 <div className="feature-icon" style={{ margin: '0 auto 1rem' }}>
//                   <Scan size={30} />
//                 </div>
//                 <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{type}</h4>
//                 <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
//                   Advanced AI analysis for accurate detection and assessment
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Technical Info */}
//         <div style={{ 
//           marginTop: '3rem',
//           padding: '2rem', 
//           backgroundColor: 'var(--surface-color)', 
//           borderRadius: '12px',
//           border: '1px solid var(--border-color)'
//         }}>
//           <h4 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>
//             🔬 Technical Information
//           </h4>
//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
//             <div>
//               <strong style={{ color: 'var(--text-primary)' }}>AI Model:</strong>
//               <p style={{ color: 'var(--text-secondary)', margin: '0.25rem 0 0 0' }}>
//                 Deep Learning CNN trained on medical imaging datasets
//               </p>
//             </div>
//             <div>
//               <strong style={{ color: 'var(--text-primary)' }}>Accuracy:</strong>
//               <p style={{ color: 'var(--text-secondary)', margin: '0.25rem 0 0 0' }}>
//                 87-95% depending on image type and quality
//               </p>
//             </div>
//             <div>
//               <strong style={{ color: 'var(--text-primary)' }}>Processing Time:</strong>
//               <p style={{ color: 'var(--text-secondary)', margin: '0.25rem 0 0 0' }}>
//                 Typically 15-30 seconds per image
//               </p>
//             </div>
//             <div>
//               <strong style={{ color: 'var(--text-primary)' }}>Privacy:</strong>
//               <p style={{ color: 'var(--text-secondary)', margin: '0.25rem 0 0 0' }}>
//                 Images are processed securely and not stored
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default MedicalImageDetector
import { useState } from 'react';
import { Camera, Upload, Scan, AlertTriangle, CheckCircle, Info, Eye, Download } from 'lucide-react';

const MedicalImageDetector = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [uploadMethod, setUploadMethod] = useState('file');

  const supportedFormats = ['JPEG', 'PNG', 'DICOM', 'TIFF'];
  const analysisTypes = [
    'X-Ray Analysis',
    'MRI Scan Review', 
    'CT Scan Analysis',
    'Skin Lesion Detection',
    'Retinal Imaging',
    'General Anomaly Detection'
  ];

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => setPreviewUrl(e.target.result);
      reader.readAsDataURL(file);
      setAnalysisResult(null);
    }
  };

  // Updated handleAnalyze to call backend
  const handleAnalyze = async () => {
    if (!selectedFile) return;

    setIsAnalyzing(true);
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await fetch("http://127.0.0.1:8000/predict/", {
        method: "POST",
        body: formData
      });

      if (!response.ok) throw new Error("Failed to analyze image");

      const data = await response.json();
      setAnalysisResult(data);
    } catch (error) {
      console.error(error);
      alert("Error analyzing image: " + error.message);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'var(--error-color)';
      case 'medium': return 'var(--warning-color)';
      case 'low': return 'var(--success-color)';
      default: return 'var(--text-secondary)';
    }
  };

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case 'high': return <AlertTriangle size={20} />;
      case 'medium': return <Info size={20} />;
      case 'low': return <CheckCircle size={20} />;
      default: return <Info size={20} />;
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--background-color)', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ 
        background: 'linear-gradient(135deg, rgba(56, 178, 172, 0.9) 0%, rgba(45, 55, 72, 0.9) 100%), url("https://images.unsplash.com/photo-1582560469781-1965b9af903e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
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
              <Camera size={60} />
            </div>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '700', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              AI Medical Image Detector
            </h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
              Advanced artificial intelligence for medical image analysis and early anomaly detection
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '3rem 1rem' }}>
        {/* Disclaimer */}
        <div style={{
          backgroundColor: '#fff3cd',
          border: '1px solid #ffeaa7',
          borderRadius: '8px',
          padding: '1rem',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <AlertTriangle size={24} style={{ color: '#856404' }} />
          <div>
            <strong style={{ color: '#856404' }}>Important Medical Disclaimer:</strong>
            <p style={{ margin: '0.25rem 0 0 0', color: '#856404' }}>
              This tool is for educational purposes only. Always consult qualified healthcare professionals 
              for medical diagnosis and treatment decisions.
            </p>
          </div>
        </div>

        {/* Upload */}
        <div className="form-container" style={{ marginBottom: '3rem' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-primary)' }}>
            Upload Medical Image for Analysis
          </h3>

          <div style={{
            border: '2px dashed var(--border-color)',
            borderRadius: '12px',
            padding: '3rem',
            textAlign: 'center',
            backgroundColor: 'var(--surface-color)',
            transition: 'all 0.3s ease'
          }}>
            <Upload size={48} style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }} />
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              Drop your medical image here
            </h4>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              or click to browse files
            </p>
            <input
              type="file"
              accept="image/*,.dcm"
              onChange={handleFileSelect}
              style={{ display: 'none' }}
              id="file-upload"
            />
            <label htmlFor="file-upload" className="btn btn-primary">
              Choose File
            </label>
          </div>

          {previewUrl && (
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <img src={previewUrl} alt="Preview" style={{ maxWidth: '400px', maxHeight: '400px', objectFit: 'contain', borderRadius: '8px', border: '1px solid var(--border-color)' }} />
              <div style={{ marginTop: '1rem' }}>
                <button
                  className="btn btn-primary"
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  style={{ padding: '1rem 2rem', fontSize: '1.1rem', opacity: isAnalyzing ? 0.7 : 1 }}
                >
                  {isAnalyzing ? "Analyzing..." : "Analyze Image"}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        {analysisResult && (
          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--text-primary)' }}>AI Analysis Results</h3>
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>Confidence: <strong>{analysisResult.confidence}%</strong></div>

            <div>
              {analysisResult.findings.map((finding, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem', border: `2px solid ${getSeverityColor(finding.severity)}`, borderRadius: '8px', padding: '0.5rem' }}>
                  <div>{getSeverityIcon(finding.severity)}</div>
                  <div>
                    <strong>{finding.type}:</strong> {finding.description}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1rem' }}>
              <h4>Recommendations:</h4>
              <ul>
                {analysisResult.recommendations.map((rec, idx) => <li key={idx}>{rec}</li>)}
              </ul>
            </div>

            <div style={{ marginTop: '1rem', padding: '0.5rem', border: '1px solid #bee5eb', borderRadius: '8px', backgroundColor: '#e8f4fd' }}>
              <Info size={20} /> {analysisResult.disclaimer}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicalImageDetector;
