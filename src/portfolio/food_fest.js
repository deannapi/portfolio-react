import React from "react";
import food_fest from "../images/food_fest.jpg";

export default class FoodFest extends React.Component {
  render() {
    return (
      <div className="card">
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
      </div>
    );
  }
}
