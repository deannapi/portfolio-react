import React from "react";
import work_day from "../images/workday.jpg";
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

export default class Work_Day extends React.Component {
  render() {
    return (
      <>
        {/* <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            <a
              href="https://deannapi.github.io/work-day-scheduler/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Work Day Scheduler
            </a>
          </h5>
          <img className="card-img-top" src={work_day} alt="" />
          <p className="card-text">Schedule hourly tasks</p>
        </div>
        <ul>
        <span className="badge badge-pill badge-primary">HTML</span>
              <span className="badge badge-pill badge-secondary">CSS</span>
              <span className="badge badge-pill badge-success">JavaScript</span>
              <span className="badge badge-pill badge-danger">jQuery</span>
        </ul>

        <div className="card-body">
          <a
            href="https://github.com/deannapi/work-day-scheduler"
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
              <span>Work Day Scheduler</span>
            </h2>
            <div className="mc-content">
              <div className="img-container">
                <img
                  className="img-responsive"
                  src={work_day}
                  alt=""
                  // style={{ borderRadius: "46px" }}
                />
              </div>
              <div className="mc-description">
                Schedule tasks by the hour for your workday
                <ul>
                <span className="badge badge-pill badge-primary">HTML</span>
              <span className="badge badge-pill badge-secondary">CSS</span>
              <span className="badge badge-pill badge-success">JavaScript</span>
              <span className="badge badge-pill badge-danger">jQuery</span>
                </ul>
              </div>
            </div>
            <button className="mc-btn-action">
              <i className="fa fa-bars"></i>
            </button>
            <div className="mc-footer">
              <a
                href="https://github.com/deannapi/work-day-scheduler"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://deannapi.github.io/work-day-scheduler/"
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
