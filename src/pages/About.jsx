import React from 'react'
import './About.css'

// About page - explains what this project is and why it matters
function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About This Project</h1>

      {/* Section 1 - What is this project */}
      <div className="about-card">
        <h2 className="card-title">📌 What is this?</h2>
        <p className="card-text">
          The Hate Speech Detection System is a web application that uses a
          machine learning model to analyze text and determine whether it
          contains hate speech or not. The user enters any text, and the
          system predicts if the text is harmful or safe.
        </p>
        <p className="card-text">
          The frontend (this website) is built using React and Vite. It
          communicates with a Python Flask backend that runs the actual
          machine learning model for prediction.
        </p>
      </div>

      {/* Section 2 - Why it is important */}
      <div className="about-card">
        <h2 className="card-title">⚠️ Why is it Important?</h2>
        <p className="card-text">
          Hate speech online is a growing problem. Every day, millions of
          messages, comments, and posts are shared on social media platforms.
          Some of these contain language that targets people based on their
          religion, race, gender, or other characteristics.
        </p>
        <p className="card-text">
          Manually reviewing all this content is impossible. This is where
          automated hate speech detection systems become important — they
          can quickly scan large amounts of text and flag harmful content
          before it spreads further.
        </p>
      </div>

      {/* Section 3 - Impact on society */}
      <div className="about-card">
        <h2 className="card-title">🌍 Impact on Society</h2>
        <ul className="impact-list">
          <li>Helps create safer online spaces for everyone</li>
          <li>Reduces harm caused by targeted harassment and abuse</li>
          <li>Supports social media platforms in content moderation</li>
          <li>Protects vulnerable communities from online hate</li>
          <li>Can be used in schools, forums, and comment sections</li>
          <li>Encourages responsible use of AI for social good</li>
        </ul>
      </div>

      {/* Tech stack info */}
      <div className="about-card">
        <h2 className="card-title">🛠️ Tech Stack</h2>
        <p className="card-text">
          <span className="tech-label">Frontend:</span> React, Vite, React Router
        </p>
        <p className="card-text">
          <span className="tech-label">Backend:</span> Python, Flask
        </p>
        <p className="card-text">
          <span className="tech-label">Model:</span> Machine Learning (NLP-based classifier)
        </p>
      </div>
    </div>
  )
}

export default About