import React from "react";
import food_fest from "../images/food_fest.jpg";

export default class FoodFest extends React.Component {
  render() {
    return (
      <>
        {/* <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            <a
              href="https://deannapi.github.io/food-festival/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Food Festival
            </a>
          </h5>
          <img className="card-img-top" src={food_fest} alt="" />
          <p className="card-text">Find food at a local festival</p>
        </div>
        <ul>
          <span className="badge badge-pill badge-success">JavaScript</span>
          <span className="badge badge-pill badge-warning">Node.js</span>
        </ul>

        <div className="card-body">
          <a
            href="https://github.com/deannapi/food-festival/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div> */}

        <div className="col-md-4 col-sm-6 col-xs-12">
          <article className="material-card Cyan">
            <h2>
              <span>Food Festival</span>
            </h2>
            <div className="mc-content">
              <div className="img-container">
                <img
                  className="img-responsive"
                  src={food_fest}
                  alt=""
                  style={{ borderRadius: "46px" }}
                />
              </div>
              <div className="mc-description">
                Find food at a local fesitval
                <ul>
                  <span className="badge badge-pill badge-success">
                    JavaScript
                  </span>
                  <span className="badge badge-pill badge-warning">
                    Node.js
                  </span>
                </ul>
              </div>
            </div>
            <a className="mc-btn-action">
              <i className="fa fa-bars"></i>
            </a>
            <div className="mc-footer">
              <a
                href="https://github.com/deannapi/food-festival/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://deannapi.github.io/food-festival/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fas fa-globe"></i>
              </a>
            </div>
          </article>
        </div>
      </>
    );
  }
}
