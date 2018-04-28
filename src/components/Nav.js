import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);

    this.state = {
      isMenuOpen: false
    };
  }

  toggleMenu() {
    console.log("clicking");
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  render() {
    return (
      <nav className={`${this.state.isMenuOpen ? "nav--open" : ""}`}>
        <div className="nav__logo">
          <h1>Ir</h1>
          <h1>man</h1>
        </div>
        <div className="nav__menu">
          <ul>
            <li>
              <h1>
                <a href="">About</a>
              </h1>
            </li>
            <li>
              <h1>
                <a href="">Projects</a>
              </h1>
            </li>
            <li>
              <h1>
                <a href="">Contact</a>
              </h1>
            </li>
          </ul>
        </div>
        <div className="nav__hamburger" onClick={this.toggleMenu}>
          <div className="nav__ham1" />
          <div className="nav__ham2" />
          <div className="nav__ham3" />
        </div>
      </nav>
    );
  }
}

export default Nav;
