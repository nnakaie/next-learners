import React from 'react';
import './SuralaNinja.scss';

import screen from '../../images/sn_screen.png';
import learning from '../../images/sn_learning.jpg';

class SuralaNinja extends React.Component {
    render() {
      return (
        <div id="SuralaNinja" className="category">
         <h2 className="category-title">ABOUT SURALA NINJA!</h2>
         <p>The innovative e-learning method designed for grade 1 to 6 students learning mathematics.<br/>
         It especially focus on bringing up fundamental mathematics ability.</p>
         <div className="category__inner">
          <img className="sn_img" src={screen} alt=""/>
          <img className="sn_img" src={learning} alt=""/>
         </div>
        </div>
      );
    };　　
  };

  export default SuralaNinja;