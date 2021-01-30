import React from 'react'
import { Link } from 'react-router-dom'
import './Button.scss'

const CLASSES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large']

const Button = ({
  children,
  type,
  onClick,
  buttonClass,
  buttonSize,
  to = '/',
}) => {
  const checkButtonClass = CLASSES.includes(buttonClass)
    ? buttonClass
    : CLASSES[0]
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  return (
    <Link to={to}>
      <button
        className={`btn ${checkButtonClass} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  )
}

export default Button
