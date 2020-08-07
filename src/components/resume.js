import React, { Component } from "react";
// import pi from "../images/pi_black.png";

export default class Resume extends Component {
  // function Resume() {
  render() {
    const resumeInfo = this.props.resumeData;
    return (
      <>
        <section className="resume" id="resume">
          <div className="education">
            <h1>Resume</h1>

            <a
              href="https://drive.google.com/file/d/1F2xuBOVTHlJwiaD8xC8mLdSnHWyBHVrF/view?usp=sharing"
              download="Resume"
            >
              Download My Resume
            </a>

            {resumeInfo.education &&
              resumeInfo.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      {/* <h3>{item.UniversityName}</h3> */}
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>

        <section className="skills" id="skills">
          <h1>Skills</h1>

          <div className="front-end">
            <h4>Front End</h4>
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
              <li>ReactJS</li>
              <li>JavaScript</li>
              <li>AJAX</li>
              <li>JSON</li>
              <li>JQuery</li>
            </ul>
          </div>

          <div className="back-end">
            <h4>Back End</h4>
            <ul>
              <li>Python</li>
              <li>MERN</li>
              <li>Sequelize</li>
              <li>Handlebars.js</li>
              <li>R Studio</li>
              <li>Inquirer</li>
              <li>MongoDB</li>
              <li>REACT</li>
            </ul>
          </div>

          <div className="tools">
            <h4>Tools</h4>
            <ul>
              <li>Visual Studio Code</li>
              <li>Anaconda</li>
              <li>Insomnia</li>
              <li>Heroku</li>
              <li>Power BI</li>
              <li>Power Apps</li>
              <li>MS Flow</li>
              <li>Sharepoint</li>
              <li>GitHub</li>
            </ul>
          </div>

          <div className="apis">
            <h4>Procolols & APIs</h4>
            <ul>
              <li>REST</li>
              <li>GraphQL</li>
            </ul>
          </div>

          <div className="databases">
            <h4>Databases</h4>
            <ul>
              <li>MySQL</li>
              <li>SQLite</li>
            </ul>
          </div>
        </section>
      </>
    );
  }
}
