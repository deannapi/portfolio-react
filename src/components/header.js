import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="home" id="home">
          <nav className="nav-wrap">
            <ul id="nav" className="nav">
              {/* <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li> */}
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  Resume
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact-form">
                  Contact Me
                </a>
              </li>
            </ul>
          </nav>

          <div className="row banner">
              <h1 className="responsive-headline">DeAnna Martinez</h1>
              <h3>Data Analyst || Full Stack Web Developer</h3>
          </div>
              <br />
        </header>
      </React.Fragment>
    );
  }
}
