import React from "react";

export default class Resume extends React.Component {
  render() {
    return (
      <>
        <div className="resume" id="resume">
          <div className="education">
            <h2>Resume</h2>

            <a
              href="https://1drv.ms/w/s!AizBMEzAPLH0nzDkXH0YwMqBgqAV?e=pWJlFj"
              download="Resume"
              target="_blank"
              rel="noopener  noreferrer"
            >
              Download My Resume
            </a>

            <div className="degrees">
              <p className="school-name">
                Full Stack Web Developer Certificate
                <span>&bull;</span> <em className="date">September 2020</em>
              </p>
              <p className="school-name">
                Master's of Arts in Mathematics
                <span>&bull;</span> <em className="date">May 2013</em>
              </p>
              <p className="school-name">
                Bachelor's of Science in Mathematics
                <span>&bull;</span> <em className="date">May 2008</em>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
