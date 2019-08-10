import React from 'react';
import './Features.scss';

import features from '../../images/features_features.png';


class Features extends React.Component {
    render() {
      return (
        <div id="Features" className="category">
         <h2 className="category-title">4 FEATURES</h2>
         <div className="category__inner">
           <img className="features_img" src={features} alt=""/>
         </div>
         
        </div>
      );
    };　　
  };

  export default Features;