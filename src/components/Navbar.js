import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button.js'
import './Navbar.scss'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [button, setButton] = useState(true)

  const showButton = () => {
    if (window.innerWidth < 768) setButton(false)
    else setButton(true)
  }

  useEffect(() => {
    showButton()
    window.addEventListener('resize', showButton)
    return () => {
      window.removeEventListener('resize', showButton)
    }
  }, [])

  return (
    <>
      <nav className={menuOpen ? 'navbar active' : 'navbar'}>
        <div className="container">
          <Link to="/" className="navbar-logo">
            TRAVEL <i className="fas fa-bus"></i>
          </Link>
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <div className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>{' '}
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={() => setMenuOpen(false)}
              >
                Products
              </Link>{' '}
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={() => setMenuOpen(false)}
              >
                Contacts
              </Link>{' '}
            </li>
            <li className="nav-item mobile">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </Link>{' '}
            </li>
          </div>
          {button && (
            <Button buttonClass="btn--outline" to="/sign-up">
              Sign Up
            </Button>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar
