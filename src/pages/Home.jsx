import React, { useState } from 'react'
import './Home.css'

// Home page - main detection interface with feature cards
function Home() {
  const [inputText, setInputText] = useState('')
  const [result, setResult] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  // Send text to Flask backend for prediction
  const handleDetect = async () => {
    if (inputText.trim() === '') {
      setError('Please enter some text first.')
      setResult(null)
      return
    }

    setError(null)
    setResult(null)
    setIsLoading(true)

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: inputText }),
      })

      if (!response.ok) {
        throw new Error('Server error.')
      }

      const data = await response.json()
      setResult(data)
    } catch (err) {
      setError('Could not connect to server. Make sure Flask backend is running on port 5000.')
    } finally {
      setIsLoading(false)
    }
  }

  // Clear all fields
  const handleClear = () => {
    setInputText('')
    setResult(null)
    setError(null)
  }

  return (
    <div className="home-wrapper">

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-badge">AI-Powered Safety Tool</div>
        <h1 className="hero-title">Hate Speech Detection System</h1>
        <p className="hero-subtitle">
          Analyze any text instantly using machine learning to detect harmful or hateful language.
        </p>
      </div>

      {/* Stats Row */}
      <div className="stats-row">
        <div className="stat-card">
          <span className="stat-number">95%</span>
          <span className="stat-label">Accuracy</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">&lt;1s</span>
          <span className="stat-label">Response Time</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">2</span>
          <span className="stat-label">Classes Detected</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">NLP</span>
          <span className="stat-label">Model Type</span>
        </div>
      </div>

      {/* Detection Input Box */}
      <div className="detection-box">
        <h2 className="detection-title">Analyze Text</h2>
        <p className="detection-hint">Paste or type any text below and click Detect</p>

        <textarea
          className="text-input"
          placeholder="Enter text here to check for hate speech..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          rows={5}
        />

        <div className="char-count">{inputText.length} characters</div>

        <div className="button-group">
          <button className="detect-btn" onClick={handleDetect} disabled={isLoading}>
            {isLoading ? 'Detecting...' : 'Detect'}
          </button>
          <button className="clear-btn" onClick={handleClear}>
            Clear
          </button>
        </div>

        {/* Error message */}
        {error && (
          <div className="error-box">⚠️ {error}</div>
        )}

        {/* Result display */}
        {result && (
          <div className={`result-box ${result.prediction === 'Hate' ? 'result-hate' : 'result-not-hate'}`}>
            <p className="result-label">Detection Result</p>
            <p className="result-value">
              {result.prediction === 'Hate' ? '🚫 Hate Speech Detected' : '✅ Not Hate Speech'}
            </p>
            {result.confidence && (
              <p className="result-confidence">Confidence: {result.confidence}</p>
            )}
          </div>
        )}
      </div>

      {/* Feature Cards Section */}
      <div className="features-section">
        <h2 className="section-heading">Why Use This Tool?</h2>
        <div className="features-grid">

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3 className="feature-title">Fast Detection</h3>
            <p className="feature-text">
              Get instant results in under a second. The ML model processes
              your text and returns a clear prediction immediately.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🧠</div>
            <h3 className="feature-title">ML Powered</h3>
            <p className="feature-text">
              Built using a trained Natural Language Processing model that
              understands context and patterns in text.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3 className="feature-title">Safe & Private</h3>
            <p className="feature-text">
              Your text is only used for prediction. No data is stored or
              shared with any third party.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3 className="feature-title">Social Impact</h3>
            <p className="feature-text">
              Helps create safer online spaces by identifying and flagging
              harmful content before it spreads further.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3 className="feature-title">Clear Results</h3>
            <p className="feature-text">
              Results are shown in a simple color-coded format — red for
              hate speech, green for safe content.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🛠️</div>
            <h3 className="feature-title">Easy to Use</h3>
            <p className="feature-text">
              No technical knowledge needed. Just paste your text, click
              detect, and get an instant answer.
            </p>
          </div>

        </div>
      </div>

      {/* How It Works Section */}
      <div className="how-section">
        <h2 className="section-heading">How It Works</h2>
        <div className="steps-row">
          <div className="step">
            <div className="step-number">1</div>
            <p className="step-text">Enter your text in the input box</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-number">2</div>
            <p className="step-text">Click Detect to analyze</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-number">3</div>
            <p className="step-text">View the result instantly</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
