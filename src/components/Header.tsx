import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/cat.png';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <nav className="container">
          <ul className="header__inner">
            <img className="header__logo" src={logo} alt="cat" draggable="false" />
            <div className="header__inner-links">
              <a href="/main" className="header__inner-link active-link">
                main
              </a>
              <a href="/about-us" className="header__inner-link">
                about us
              </a>
            </div>
          </ul>
        </nav>

        <h1 className="header__title">main</h1>
      </header>
    );
  }
}
