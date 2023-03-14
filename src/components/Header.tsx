import React from 'react';
import logo from '../assets/cat.png';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <img className="header__logo" src={logo} alt="cat" draggable="false" />
            <div className="header__inner-links">
              <a href="/#" className="header__inner-link active-link">
                main
              </a>
              <a href="/#" className="header__inner-link">
                about us
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
