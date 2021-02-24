import React from "react";
import harp from "../images/harp-icon.png";

export default class HARP extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            <a
              href="https://www.harpbydeanna.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Harp By DeAnna
            </a>
          </h5>
          <img className="card-img-top" src={harp} alt="" id="harp-card" />
          <p className="card-text">Harp music entertainment</p>
        </div>
        <ul>
          <span className="badge badge-pill badge-primary">HTML</span>
          <span className="badge badge-pill badge-secondary">CSS</span>
          <span className="badge badge-pill badge-success">JavaScript</span>
          <span className="badge badge-pill badge-danger">jQuery</span>
          <span className="badge badge-pill badge-light">Express.js</span>
          <span className="badge badge-pill badge-warning">Node.js</span>
          <span className="badge badge-pill badge-dark">REACT</span>
        </ul>

        <div className="card-body">
          <a
            href="https://github.com/deannapi/harpbydeanna"
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
