import React from "react";
import weather from "../images/weather.jpg";
import $ from "jquery";

$(function () {
  $(".material-card > .mc-btn-action").click(function () {
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

export default class WEATHER extends React.Component {
  render() {
    return (
      <>
        {/* <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            <a
              href="https://deannapi.github.io/weather-app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Weather App
            </a>
          </h5>
          <img className="card-img-top" src={weather} alt="" />
          <p className="card-text">
            Find your daily weather and 5-day forecast
          </p>
        </div>
        <ul>
          <span className="badge badge-pill badge-primary">HTML</span>
          <span className="badge badge-pill badge-secondary">CSS</span>
          <span className="badge badge-pill badge-success">JavaScript</span>
          <span className="badge badge-pill badge-danger">jQuery</span>
          <span className="badge badge-pill badge-info">API</span>
        </ul>

        <div className="card-body">
          <a
            href="https://github.com/deannapi/weather-app"
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
              <span>Weather App</span>
            </h2>
            <div className="mc-content">
              <div className="img-container">
                <img className="img-responsive" src={weather} alt="" />
              </div>
              <div className="mc-description">
                Find your daily weather and 5-day forecast
                <ul>
                  <span className="badge badge-pill badge-primary">HTML</span>
                  <span className="badge badge-pill badge-secondary">CSS</span>
                  <span className="badge badge-pill badge-success">
                    JavaScript
                  </span>
                  <span className="badge badge-pill badge-danger">jQuery</span>
                  <span className="badge badge-pill badge-info">API</span>
                </ul>
              </div>
            </div>
            <button className="mc-btn-action">
              <i className="fa fa-bars"></i>
            </button>
            <div className="mc-footer">
              <a
                href="https://deannapi.github.io/weather-app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://github.com/deannapi/weather-app"
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
