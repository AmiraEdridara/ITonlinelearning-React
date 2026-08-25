// Note: no logo image file is needed - the header uses a text mark, so
// the project runs straight after npm install with nothing else to download.

import React from 'react';

const Header = ({ title = 'Investment Calculator' }) => {
  return (
    <header id="header">
      <p className="logo" role="img" aria-label="Chart">📈</p>
      <h1>{title}</h1>
      <p className="tagline">Plan it before you commit to it.</p>
    </header>
  );
};

export default Header;
