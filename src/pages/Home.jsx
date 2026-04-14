import React, { useState } from 'react'
import './Home.css'

// Home page - main detection interface
function Home() {
  // State for user input text
  const [inputText, setInputText] = useState('')

  // State for the result from the API
  const [result, setResult] = useState(null)

  // State to show loading while waiting for response
  const [isLoading, setIsLoading] = useState(false)

  // State for error message if API fails
  const [error, setError] = useState(null)

  // This function runs when user clicks the "Detect" button
  const handleDetect = async () => {
    // Don't do anything if input is empty
    if (inputText.trim() === '') {
      setError('Please enter some text first.')
      setResult(null)
      return
    }

    // Reset previous results and errors
    setError(null)
    setResult(null)
    setIsLoading(true)

    try {
      // Send POST request to the Flask backend
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      })

      // Check if request was successful
      if (!response.ok) {
        throw new Error('Server returned an error. Please try again.')
      }

      const data = await response.json()

      // Save the result to display on screen
      setResult(data)
    } catch (err) {
      // Show error if something went wrong (e.g., server not running)
      setError('Could not connect to the server. Make sure the backend is running on port 5000.')
    } finally {
      setIsLoading(false)
    }
  }

  // Clear the input and result
  const handleClear = () => {
    setInputText('')
    setResult(null)
    setError(null)
  }

  return (
    <div className="home-container">
      <h1 className="main-heading">Hate Speech Detection System</h1>
      <p className="sub-heading">Enter text below to check if it contains hate speech</p>

      {/* Text input area */}
      <div className="input-section">
        <textarea
          className="text-input"
          placeholder="Type or paste your text here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          rows={6}
        />
      </div>

      {/* Action buttons */}
      <div className="button-group">
        <button className="detect-btn" onClick={handleDetect} disabled={isLoading}>
          {isLoading ? 'Detecting...' : 'Detect'}
        </button>
        <button className="clear-btn" onClick={handleClear}>
          Clear
        </button>
      </div>

      {/* Show error message if something went wrong */}
      {error && (
        <div className="error-box">
          ⚠️ {error}
        </div>
      )}

      {/* Show result if we got a response from backend */}
      {result && (
        <div className={`result-box ${result.prediction === 'Hate' ? 'result-hate' : 'result-not-hate'}`}>
          <p className="result-label">Result:</p>
          <p className="result-value">
            {result.prediction === 'Hate' ? '🚫 Hate Speech Detected' : '✅ Not Hate Speech'}
          </p>
          {/* Show confidence if backend provides it */}
          {result.confidence && (
            <p className="result-confidence">Confidence: {result.confidence}</p>
          )}
        </div>
      )}
    </div>
  )
}

export default Home