import React from 'react';
import './Value.scss';

import skills from '../../images/value_skills.png';
import cards from '../../images/value_cards.jpg';
import origami from '../../images/value_origami.jpg';
import contest from '../../images/value_contest.jpg';
import intensive from '../../images/value_intensive.jpg';


class Value extends React.Component {
    render() {
      return (
        <div id="value" className="category">
         <h2 className="category-title">OUR VALUE</h2>
         <div class="value_top">
           <p>We focus on providing true mathematics ability through our e-learning method. <br/><br/> 
           Our methof not only provide e-learning program, but also focus on providing all-inclusive support to cultivate kids comprehensive ability. <br/><br/>  
           additional comment additional comment additional comment additional comment additional comment. <br/><br/> 
           </p>
           <img className="value_top__img" src={skills} alt=""/>
         </div>
         <div class="value_base">
          <img className="value_base__img" src={cards} alt=""/>
          <img className="value_base__img" src={origami} alt=""/>
          <img className="value_base__img" src={contest} alt=""/>
          <img className="value_base__img" src={intensive} alt=""/>
         </div>
        </div>
      );
    };　　
  };

  export default Value;