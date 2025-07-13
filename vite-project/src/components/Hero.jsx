import React from 'react'
import './Hero.css'
import choco from '/public/images/choco.png'
import bg3 from '/public/images/bg3.png'

const Hero = () => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${bg3})` }}>
      <div className="hero-content">
        <h1 className="logo">DvBakes</h1>
        <div className="text-content">
          <p className="tagline">TREAT YOURSELF</p>
          <h2 className="title">CHOCOLATE <br /> DELIGHT!</h2>
          <button className="shop-btn">Shop Now</button>
        </div>
        <div className="shake-image">
          <img src={choco} alt="Chocolate Milkshake" />
        </div>
        <div className="description">
          <span>01/04</span>
          <p>
            Can you make a creamy chocolate milkshake without ice cream?
            Absolutely! The recipe below is a healthier version of the classic
            chocolate milkshake you might know.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
