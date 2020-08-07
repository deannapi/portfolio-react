import React from "react";

export default function Resume() {
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

          <div className="row item">
            <div className="twelve columns">
              <p className="school-name">
                Bachelor's of Science in Mathematics
                <span>&bull;</span> <em className="date">May 2008</em>
              </p>
              <p className="school-name">
                Master's of Arts in Mathematics
                <span>&bull;</span> <em className="date">May 2013</em>
              </p>
            </div>
          </div>
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
          <h4>Protocols & APIs</h4>
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
