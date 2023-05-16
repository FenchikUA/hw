import picture1 from "../img/picture01.jpg";
import picture2 from "../img/picture02.jpg";
import picture3 from "../img/picture03.jpg";
import picture4 from "../img/picture04.jpg";
import picture5 from "../img/picture05.jpg";
import picture6 from "../img/picture06.jpg";
import picture7 from "../img/picture07.jpg";
import picture8 from "../img/picture08.jpg";

import React from 'react'

const Main = () => {
  return (
    <div className="block-main">
        <h2>Recently added items</h2>
        <div className="box">
          <img src={picture1} alt=""/>
          <img src={picture2} alt=""/>
          <img src={picture3} alt=""/>
          <img src={picture4} alt=""/>
          <img src={picture5} alt=""/>
          <img src={picture6} alt=""/>
          <img src={picture7} alt=""/>
          <img src={picture8} alt=""/>
        </div>
      </div>
  )
}

export default Main
