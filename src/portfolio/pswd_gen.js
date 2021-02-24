import React from "react";
import pswd_gen from "../images/pswd_gen.jpg";

export default class PSWD_GEN extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            <a
              href="https://deannapi.github.io/password-generator/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Password Generator
            </a>
          </h5>
          <img className="card-img-top" src={pswd_gen} alt="" />
          <p className="card-text">Random password generator</p>
        </div>
        <ul>
          <span className="badge badge-pill badge-primary">HTML</span>
          <span className="badge badge-pill badge-secondary">CSS</span>
          <span className="badge badge-pill badge-success">JavaScript</span>
        </ul>

        <div className="card-body">
          <a
            href="https://github.com/deannapi/password-generator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    );
  }
}
