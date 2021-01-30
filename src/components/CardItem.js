import React, { useState, useEffect } from 'react'
import Button from './Button.js'
import './CardItem.scss'

const CardItem = (props) => {
  const [height, setHeight] = useState('100%')

  const handleMouseEnter = () => {
    const cardItems = document.querySelectorAll('.card-item')
    console.log(cardItems)
    const maxHeight = cardItems[0].offsetHeight
    cardItems.forEach((item) =>
      maxHeight > item.height ? maxHeight : item.offsetHeight,
    )
    setHeight(maxHeight)
  }

  return (
    <>
      <li
        className="card-item"
        style={{ height: height }}
        onMouseEnter={() => handleMouseEnter()}
      >
        <figure className="card-item-pic-wrap" data-category={props.label}>
          <img src={props.src} alt="Travel Image" className="cards-item-img" />
        </figure>
        <div className="card-item-info">
          <h3 className="card-item-text">{props.text}</h3>
          <div className="card-extended-info">
            <div className="col-left">
              <p className="price">{props.price}</p>
            </div>
            <div className="col-right">
              <Button
                className="btns"
                buttonClass="btn--outline"
                buttonSize="btn--medium"
              >
                <i className="fas fa-shopping-cart">ADD TO CART</i>
              </Button>
            </div>
          </div>
        </div>
      </li>
    </>
  )
}

export default CardItem
