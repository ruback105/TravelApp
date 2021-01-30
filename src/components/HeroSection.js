import React from 'react'
import Button from './Button.js'
import ReactPlayer from 'react-player'
import './HeroSection.scss'

function HeroSection() {
  return (
    <section className="hero-container container">
      <div
        className="video"
        style={{ backgroundImage: 'url("/images/background.jpg")' }}
      >
        <video
          className="video"
          autoPlay
          loop
          muted
          src="/videos/preview.mp4"
        />
        <div className="video-content">
          <h1>Adventure Awaits</h1>
          <h3>What are you waiting for?</h3>
          <div className="buttons">
            <Button
              className="btns"
              buttonClass="btn--outline"
              buttonSize="btn--large"
              to="/services"
            >
              Get Started
            </Button>
            <Button
              className="btns"
              buttonClass="btn--outline"
              buttonSize="btn--large"
              to="/services"
            >
              <i className="far fa-play-circle">Watch Trailer</i>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
