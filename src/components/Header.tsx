import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/cat.png';

export default function Header() {
  const location = useLocation();

  function getTitle() {
    switch (location.pathname) {
      case '/about-us':
        return 'about us';

      case '/add-card':
        return 'add card';

      default:
        return 'main';
    }
  }

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
            <NavLink
              to="add-card"
              className={({ isActive }) =>
                isActive ? `${classLink} ${activeClass}` : `${classLink}`
              }
            >
              add card
            </NavLink>
          </nav>
        </div>
      </div>

      <h1 className="header__title">{getTitle()}</h1>
    </header>
  );
}
