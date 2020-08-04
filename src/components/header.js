import React, { Component } from "react";

export default class Header extends Component {
  render() {
    let resumeInfo = this.props.resumeData;
    return (
      <React.Fragment>
        <header className="home">
          <nav className="nav">
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  Education
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
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
              <h1 className="responsive-headline">{resumeInfo.name}</h1>
              <h3>{resumeInfo.role}</h3>
              {/* <hr /> */}
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  };
}