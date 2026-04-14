import React from 'react'
import './About.css'

// About page - explains the project in detail
function About() {
  return (
    <div className="about-wrapper">

      {/* Page Header */}
      <div className="about-hero">
        <div className="about-badge">Project Info</div>
        <h1 className="about-heading">About This Project</h1>
        <p className="about-subheading">
          Learn what this system does, why it was built, and how it helps society.
        </p>
      </div>

      {/* What is this project */}
      <div className="about-card">
        <div className="card-left-bar"></div>
        <div className="card-body">
          <div className="card-icon"></div>
          <h2 className="card-title">What is This Project?</h2>
          <p className="card-text">
            The Hate Speech Detection System is a web application that uses a machine
            learning model to analyze text and determine whether it contains hate speech
            or not. The user simply enters any text, and the system predicts whether
            the content is harmful or safe.
          </p>
          <p className="card-text">
            The frontend is built using <span className="highlight">React</span> and{' '}
            <span className="highlight">Vite</span>. It communicates with a{' '}
            <span className="highlight">Python Flask</span> backend that runs the actual
            machine learning model for prediction using NLP techniques.
          </p>
        </div>
      </div>

      {/* Why it is important */}
      <div className="about-card">
        <div className="card-left-bar"></div>
        <div className="card-body">
          <div className="card-icon"></div>
          <h2 className="card-title">Why is it Important?</h2>
          <p className="card-text">
            Hate speech online is a growing and serious problem. Every day, millions of
            messages, comments, and posts are shared across social media platforms. Some
            of this content contains language that targets people based on their religion,
            race, gender, or other personal characteristics.
          </p>
          <p className="card-text">
            Manually reviewing all this content is simply impossible at scale. This is
            exactly where automated hate speech detection systems become critical — they
            can quickly scan large amounts of text and flag harmful content before it
            spreads or causes real damage.
          </p>
        </div>
      </div>

      {/* Impact on society */}
      <div className="about-card">
        <div className="card-left-bar"></div>
        <div className="card-body">
          <div className="card-icon"></div>
          <h2 className="card-title">Impact on Society</h2>
          <div className="impact-grid">
            <div className="impact-item">
              <span className="impact-dot"></span>
              <span>Creates safer online spaces for everyone</span>
            </div>
            <div className="impact-item">
              <span className="impact-dot"></span>
              <span>Reduces harm from targeted harassment and abuse</span>
            </div>
            <div className="impact-item">
              <span className="impact-dot"></span>
              <span>Supports social media platforms in content moderation</span>
            </div>
            <div className="impact-item">
              <span className="impact-dot"></span>
              <span>Protects vulnerable communities from online hate</span>
            </div>
            <div className="impact-item">
              <span className="impact-dot"></span>
              <span>Can be used in schools, forums, and comment sections</span>
            </div>
            <div className="impact-item">
              <span className="impact-dot"></span>
              <span>Encourages responsible use of AI for social good</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="about-card">
        <div className="card-left-bar"></div>
        <div className="card-body">
          <div className="card-icon"></div>
          <h2 className="card-title">Tech Stack</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <span className="tech-layer">Frontend</span>
              <span className="tech-value">React + Vite + React Router</span>
            </div>
            <div className="tech-item">
              <span className="tech-layer">Backend</span>
              <span className="tech-value">Python + Flask</span>
            </div>
            <div className="tech-item">
              <span className="tech-layer">ML Model</span>
              <span className="tech-value">NLP-based Text Classifier</span>
            </div>
            <div className="tech-item">
              <span className="tech-layer">Styling</span>
              <span className="tech-value">Plain CSS (No Frameworks)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Team / Developer Note */}
      <div className="about-card">
        <div className="card-left-bar"></div>
        <div className="card-body">
          <div className="card-icon"></div>
          <h2 className="card-title">Developer Note</h2>
          <p className="card-text">
            This project was developed as a Final Year Project to demonstrate how
            artificial intelligence and natural language processing can be applied to
            real-world social problems. The goal is not just to build a working system,
            but to raise awareness about the importance of responsible AI in combating
            online hate.
          </p>
          <p className="card-text">
            The system is designed to be simple, explainable, and easy to extend.
            Future improvements may include multi-language support, confidence scores,
            and category-based classification.
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="about-cta">
        <p className="cta-text">Ready to try it out?</p>
        <a href="/" className="cta-button">Go to Detection →</a>
      </div>

    </div>
  )
}

export default About
