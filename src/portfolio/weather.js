import React from "react";
import weather from "../images/weather.jpg";

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
            <a className="mc-btn-action">
              <i className="fa fa-bars"></i>
            </a>
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
                <i class="fas fa-globe"></i>
              </a>
            </div>
          </article>
        </div>
      </>
    );
  }
}
