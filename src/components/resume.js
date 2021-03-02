import React from "react";

export default class Resume extends React.Component {
  render() {
    return (
      <>
        <div className="resume" id="resume">
          <div className="education">
            <h2>Resume</h2>

            <a
              href="https://drive.google.com/file/d/1HqgNvNyPtmm09CtjqAM31MpBZAKa4x5s/view?usp=sharing"
              download="Resume"
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

        {/* <div className="skills" id="skills">
          <h2>Skills</h2>

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
              <li>Semantic UI React</li>
              <li>Angular</li>
              <li>BootStrap</li>
              <li>Redux</li>
            </ul>
          </div>

          <div className="back-end">
            <h4>Back End</h4>
            <ul>
              <li>Python</li>
              <li>MERN</li>
              <li>R Studio</li>
            </ul>
          </div>

          <div className="tools">
            <h4>Tools</h4>
            <ul>
              <li>Visual Studio Code</li>
              <li>Anaconda</li>
              <li>Insomnia</li>
              <li>Heroku</li>
              <li>MS Excel</li>
              <li>MS Access</li>
              <li>MS PowerBI</li>
              <li>MS PowerApps</li>
              <li>MS Automate</li>
              <li>Mathematica</li>
              <li>Tableau</li>
              <li>Spotfire</li>

              <li>GitHub</li>
              <li>Firebase</li>
            </ul>
          </div>

          <div className="apis">
            <h4>Protocols & APIs</h4>
            <ul>
              <li>REST</li>
              <li>GraphQL</li>
              <li>Apollo</li>
            </ul>
          </div>

          <div className="databases">
            <h4>Databases</h4>
            <ul>
              <li>MySQL</li>
              <li>SQLite</li>
              <li>MongoDB</li>
              <li>NoSQL</li>
            </ul>
          </div>

          <div>
            <h4>Other</h4>
            <ul>
              <li>PWA</li>
              <li>Service Worker</li>
            </ul>
          </div>
        </div> */}
      </>
    );
  }
}
