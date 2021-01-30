import React from 'react'
import CardItem from './CardItem'
import './CardsSection.scss'

const Cards = () => {
  return (
    <section className="cards-container container">
      <h1 className="label">Check out these EPIC destinations!</h1>
      <div className="cards">
        <div className="cards-wrapper">
          <div className="cards-items">
            <CardItem
              src="images/img-1.jpg"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, dolores."
              label="Adventures"
              path="/services"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut earum dolorum architecto, quasi, illo hic repellendus vero tenetur, consequatur ipsa mollitia quos possimus rem facere reprehenderit! Earum sunt provident cumque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut earum dolorum architecto, quasi, illo hic repellendus vero tenetur, consequatur ipsa mollitia quos possimus rem facere reprehenderit! Earum sunt provident cumque."
              price="120$"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, dolores."
              label="Adventures"
              path="/services"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut earum dolorum architecto, quasi, illo hic repellendus vero tenetur, consequatur ipsa mollitia quos possimus rem facere reprehenderit! Earum sunt provident cumque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut earum dolorum architecto, quasi, illo hic repellendus vero tenetur, consequatur ipsa mollitia quos possimus rem facere reprehenderit! Earum sunt provident cumque."
              price="10000$"
            />
            <CardItem
              src="images/img-3.jpg"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, dolores."
              label="Adventures"
              path="/services"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut earum dolorum architecto, quasi, illo hic repellendus vero tenetur, consequatur ipsa mollitia quos possimus rem facere reprehenderit! Earum sunt provident cumque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut earum dolorum architecto, quasi, illo hic repellendus vero tenetur, consequatur ipsa mollitia quos possimus rem facere reprehenderit! Earum sunt provident cumque."
              price="80$"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, dolores."
              label="Adventures"
              path="/services"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut earum dolorum architecto, quasi, illo hic repellendus vero tenetur, consequatur ipsa mollitia quos possimus rem facere reprehenderit! Earum sunt provident cumque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut earum dolorum architecto, quasi, illo hic repellendus vero tenetur, consequatur ipsa mollitia quos possimus rem facere reprehenderit! Earum sunt provident cumque."
              price="800$"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cards
