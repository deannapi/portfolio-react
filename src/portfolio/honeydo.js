import React from "react";
import honey_do from "../images/honeydo.jpg";

export default class HoneyDo extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            <a
              href="https://honey-do-list.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Honey Do List
            </a>
          </h5>
          <img className="card-img-top" src={honey_do} alt="" />
          <p className="card-text">Keep track of your chores and share them with family</p>
        </div>
        <ul>
        <span className="badge badge-pill badge-dark">MERN</span>
        </ul>

        <div className="card-body">
          <a
            href="https://github.com/deannapi/honey-do-list"
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
