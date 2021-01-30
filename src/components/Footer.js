import React, { useState } from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import Button from './Button.js'

function Footer() {
  const [email, setEmail] = useState('')
  return (
    <section className="container-footer container">
      <div className="subscribe-info">
        <h1 className="label">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          nesciunt!
        </h1>
        <h3 className="note">Lorem ipsum dolor sit amet.</h3>
        <form action="/" className="subscribe">
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your Email"
          />
          <Button buttonClass="btn--outline" to="/">
            Subscribe
          </Button>
        </form>
      </div>
      <div className="footer-info">
        <div className="about-wrapper wrapper">
          <h1 className="title">About Us</h1>
          <ul className="links">
            <Link>
              <li className="link">How it works</li>
            </Link>
            <Link>
              <li className="link">Testimonials</li>
            </Link>
            <Link>
              <li className="link">Careers</li>
            </Link>
            <Link>
              <li className="link">Investors</li>
            </Link>
            <Link>
              <li className="link">Terms of Service</li>
            </Link>
          </ul>
        </div>
        <div className="contact-wrapper wrapper">
          <h1 className="title">Contact Us</h1>
          <ul className="links">
            <Link>
              <li className="link">Contact</li>
            </Link>
            <Link>
              <li className="link">Support</li>
            </Link>
            <Link>
              <li className="link">Destinations</li>
            </Link>
            <Link>
              <li className="link">Sponsorships</li>
            </Link>
          </ul>
        </div>
        <div className="videos-wrapper wrapper">
          <h1 className="title">Videos</h1>
          <ul className="links">
            <Link>
              <li className="link">Submit your video</li>
            </Link>
            <Link>
              <li className="link">Ambassadors</li>
            </Link>
            <Link>
              <li className="link">Agency</li>
            </Link>
            <Link>
              <li className="link">Influencer</li>
            </Link>
          </ul>
        </div>

        <div className="social-wrapper wrapper">
          <h1 className="title">Social Media</h1>
          <ul className="links">
            <Link>
              {' '}
              <li className="link">Instagram</li>
            </Link>
            <Link>
              {' '}
              <li className="link">Facebook</li>
            </Link>
            <Link>
              {' '}
              <li className="link">Youtube</li>
            </Link>
            <Link>
              {' '}
              <li className="link">Twitter</li>
            </Link>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Footer
