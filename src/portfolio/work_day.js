import React from "react";
import work_day from "../images/workday.jpg";
export default class Work_Day extends React.Component {
  render() {
    return (
      <div className="card">
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
      </div>
    );
  }
}
