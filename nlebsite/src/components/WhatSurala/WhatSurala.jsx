import React from 'react';
import './WhatSurala.scss';

import award from '../../images/whatSurala_award.png';
import worldwide from '../../images/whatSurala_worldwide.png';
import collaboration from '../../images/whatSurala_collaboration.png';


class WhatSurala extends React.Component {
    render() {
      return (
        <div id="whatSurala" className="category">
         <h2 className="category-title">WHAT'S SURALA??</h2>
         <p>The award wining innovative mathematics learning solution from Japan!!</p>
         <div className="feature">
           <img className="feature__item" src={award} alt=""/>
           <img className="feature__item" src={worldwide} alt=""/>
           <img className="feature__item" src={collaboration} alt=""/>
         </div>
        </div>
      );
    };　　
  };

  export default WhatSurala;