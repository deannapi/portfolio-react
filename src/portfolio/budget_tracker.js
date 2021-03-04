import React from "react";
import budget from "../images/budget.jpg";
import $ from "jquery";

$(function () {
  $(".material-card > .mc-btn-action").on('click',function () {
    var card = $(this).parent(".material-card");
    var icon = $(this).children("i");
    icon.addClass("fa-spin-fast");

    if (card.hasClass("mc-active")) {
      card.removeClass("mc-active");

      window.setTimeout(function () {
        icon
          .removeClass("fa-arrow-left")
          .removeClass("fa-spin-fast")
          .addClass("fa-bars");
      }, 800);
    } else {
      card.addClass("mc-active");

      window.setTimeout(function () {
        icon
          .removeClass("fa-bars")
          .removeClass("fa-spin-fast")
          .addClass("fa-arrow-left");
      }, 800);
    }
  });
});

export default class Budget extends React.Component {
  render() {
    return (
      <>
        {/* <div className="card">
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
      </div> */}

        <div className="col-md-4 col-sm-6 col-xs-12">
          <article className="material-card Cyan">
            <h2>
              <span>Budget Tracker</span>
            </h2>
            <div className="mc-content">
              <div className="img-container">
                <img
                  className="img-responsive"
                  src={budget}
                  alt=""
                  style={{ borderRadius: "50px" }}
                />
              </div>
              <div className="mc-description">
                Add deposits and withdrawals to your journal
                <ul>
                  <span className="badge badge-pill badge-dark">NoSQL</span>
                  <span className="badge badge-pill badge-dark">MongoDB</span>
                  <span className="badge badge-pill badge-light">
                    Express.js
                  </span>
                  <span className="badge badge-pill badge-warning">
                    Node.js
                  </span>
                </ul>
              </div>
            </div>
            <button className="mc-btn-action">
              <i className="fa fa-bars"></i>
            </button>
            <div className="mc-footer">
              <a
                href="https://github.com/deannapi/budget-tracker"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://budgeting-tool-pwa.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-globe"></i>
              </a>
            </div>
          </article>
        </div>
      </>
    );
  }
}
