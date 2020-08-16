import React, { Component } from "react";
import Link from "next/link";
import ProjectButton from "../shared/ProjectsButton";

class Header extends Component {
  state = {
    active: false,
  };

  openMenu = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    const { active } = this.state;
    return (
      <header className="c-header">
        <div className="o-container">
          <div className="o-grid o-grid--between">
            <div className="o-grid__col u-3/12@md">
              <div className="c-header__logo">
                <Link href="/">
                  <a className="c-header__link">Santiago Correa</a>
                </Link>
                <button
                  aria-label="Open Menu"
                  className="c-header__hamburger"
                  onClick={(e) => this.openMenu()}
                >
                  <img src="/images/icons/hamburger.png" alt="Open menu" />
                </button>
              </div>
            </div>
            <div className="o-grid__col u-9/12@md">
              <nav className={`c-header__nav ${active ? "active" : ""}`}>
                <ul className={`c-header__list ${active ? "active" : ""}`}>
                  <li className="c-header__item">
                    <Link href="/" passHref>
                      <a className="c-header__link">Home</a>
                    </Link>
                  </li>
                  <li className="c-header__item">
                    <Link href="/about" passHref>
                      <a className="c-header__link">About</a>
                    </Link>
                  </li>
                  <li className="c-header__item">
                    <Link href="/Projects" passHref>
                      <a className="c-header__link">Projects</a>
                    </Link>
                  </li>
                  <li className="c-header__item">
                    <Link href="/contact" passHref>
                      <a className="c-header__link">Contact Me</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
