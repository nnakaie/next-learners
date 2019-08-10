import React from 'react';
import './Header.scss';
import logo from '../../images/brand_nl.png';

class Header extends React.Component {
    render() {
      return (
      <header>
        <img className="brand_nl" src={logo} alt=""/>
      </header>
      );
    };　　
  };

  export default Header;