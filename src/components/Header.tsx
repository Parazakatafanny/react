import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/cat.png';

type Props = object;
type State = {
  location: string;
};

export default class Header extends React.Component<Props, State> {
  constructor(props: object) {
    super(props);

    this.state = {
      location: window.location.pathname,
    };
  }

  componentDidMount() {
    let oldPathname = document.location.pathname;

    const body = document.querySelector('body')!;
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        if (oldPathname !== document.location.pathname) {
          oldPathname = document.location.pathname;
          this.setState({ location: document.location.pathname });
        }
      });
    });
    observer.observe(body, { childList: true, subtree: true });
  }

  render() {
    const classLink = 'header__inner-link';
    const activeClass = 'active-link';

    const { location } = this.state;

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

        <h1 className="header__title">{location === '/' ? 'main' : 'about us'}</h1>
      </header>
    );
  }
}
