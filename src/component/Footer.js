import fb from "../img/fb_icon.png";
import twitter from "../img/arrow_icon.png";
import insta from "../img/insta_icon.png";
import pin from "../img/pin_icon.png";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="f-menu">
        <p>About</p>
        <p>How it Works</p>
        <p>FOQs</p>
        <p>Privacy Policy</p>
      </div>
      <div className="f-soc">
        <img src={fb} alt=""/>
        <img src={twitter} alt=""/>
        <img src={insta} alt=""/>
        <img src={pin} alt=""/>
      </div>
    </div>
  )
}

export default Footer
