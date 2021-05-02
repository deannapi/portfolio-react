import React from "react";
import cf432 from "../images/cf432.jpg";

export default class CF432 extends React.Component {
  render() {
    return (
      <>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Crossfit 432</h5>
            <img className="card-img-top" src={budget} alt="" />
            <p className="card-text">
              Website for gym Crossfit 432
            </p>
          </div>
          <ul>
            <span className="badge badge-pill badge-warning">React</span>
          </ul>

          <div className="card-body">
            <a
              href="https://github.com/deannapi/cf432"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.crossfit432.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-globe"></i>
            </a>
          </div>
        </div>
      </>
    );
  }
}
