import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header-main">
          <header>
            <h1 className="my-name">DeAnna Martinez</h1>
            <ul className="">
            <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Me</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
            </ul>
          </header>
        </div>
        {/* <nav> */}

        {/* </nav> */}
      </>
    );
  }
}
