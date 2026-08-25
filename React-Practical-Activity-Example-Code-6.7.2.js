// Difference: the header takes its title as a prop with a default, so the
// same component can be reused with a different heading.

import React from 'react';
import logo from '../assets/investment-calculator-logo.png';

const Header = ({ title = 'Investment Calculator' }) => {
  return (
    <header id="header">
      <img src={logo} alt="Investment Calculator Logo" />
      <h1>{title}</h1>
      <p className="tagline">Plan it before you commit to it.</p>
    </header>
  );
};

export default Header;
