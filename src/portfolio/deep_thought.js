import React from "react";
import deep_thoughts from "../images/deep_thoughts.jpg";

export default class DeepThoughts extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            <a
              href="https://github.com/deannapi/deep-thoughts"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deep Thoughts
            </a>
          </h5>
          <img className="card-img-top" src={deep_thoughts} alt="" />
          <p className="card-text">Social media application</p>
        </div>
        <ul>
          <span className="badge badge-pill badge-dark">MERN</span>
        </ul>

        <div className="card-body">
          <a
            href="https://github.com/deannapi/deep-thoughts"
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
