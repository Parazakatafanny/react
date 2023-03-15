import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/cat.png';

export default class Header extends React.Component {
  render() {
    const classLink = 'header__inner-link';
    const activeClass = 'active-link';

    return (
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <img className="header__logo" src={logo} alt="cat" draggable="false" />
            <nav className="header__inner-links">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `${classLink} ${activeClass}` : `${classLink}`
                }
              >
                main
              </NavLink>
              <NavLink
                to="about-us"
                className={({ isActive }) =>
                  isActive ? `${classLink} ${activeClass}` : `${classLink}`
                }
              >
                about us
              </NavLink>
            </nav>
          </div>
        </div>

        <h1 className="header__title">{'/' ? 'main' : 'about us'}</h1>
      </header>
    );
  }
}
