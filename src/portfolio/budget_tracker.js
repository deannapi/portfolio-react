import React from "react";
import budget from "../images/budget.jpg";

export default class Budget extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            <a
              href="https://budgeting-tool-pwa.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Budget Tracker
            </a>
          </h5>
          <img className="card-img-top" src={budget} alt="" />
          <p className="card-text">
            Add deposits and withdrawals to your journal
          </p>
        </div>
        <ul>
          <span className="badge badge-pill badge-dark">NoSQL</span>
          <span className="badge badge-pill badge-dark">MongoDB</span>
          <span className="badge badge-pill badge-light">Express.js</span>
          <span className="badge badge-pill badge-warning">Node.js</span>
        </ul>

        <div className="card-body">
          <a
            href="https://github.com/deannapi/budget-tracker"
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
