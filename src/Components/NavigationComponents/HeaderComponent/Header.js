import React from 'react';

import "./header.sass";

function Header() {
  return (
    <div className="header">
        <div className="title"> Merhaba Deniz, Hoş Geldin !</div>
        <div className="search">
          <input></input>
        </div>
        <div className="hamburger-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
    </div>
  );
}

export default Header;
