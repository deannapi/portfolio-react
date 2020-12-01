import React, { Component } from "react";
import pswd_gen from "../images/pswd_gen.jpg";
import weather from "../images/weather.jpg";
import work_day from "../images/workday.jpg";
import note_taker from "../images/note_taker.jpg";
import book_movie from "../images/book_movie.jpg";
import motor from "../images/motor.jpg";
import budget from "../images/budget.jpg";
import food_fest from "../images/food_fest.jpg";
import google_books from "../images/google_books.jpg";
import deep_thoughts from "../images/deep_thoughts.jpg";
import honey_do from "../images/honeydo.jpg";

export default class Porfolio extends Component {
  render() {
    return (
      <section className="portfolio" id="projects">
        <h1>Projects</h1>
        <div className="projects">
          <ul>
            <li>
              <a
                href="https://deannapi.github.io/password-generator/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Password Generator
                <br />
                <img src={pswd_gen} alt="" height="175px" className="app-img" />
              </a>
              <p>Random password generator.</p>
              <a
                href="https://github.com/deannapi/password-generator"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-github"></i>
              </a>
              <span className="badge badge-pill badge-primary">HTML</span>
              <span className="badge badge-pill badge-secondary">CSS</span>
              <span className="badge badge-pill badge-success">JavaScript</span>
            </li>
            <li>
              <a
                href="https://deannapi.github.io/weather-app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Weather App
                <br />
                <img src={weather} alt="" height="175px" className="app-img" />
              </a>
              <p>Find your daily weather and 5-day forecast.</p>
              <a
                href="https://github.com/deannapi/weather-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-github"></i>
              </a>
              <span className="badge badge-pill badge-primary">HTML</span>
              <span className="badge badge-pill badge-secondary">CSS</span>
              <span className="badge badge-pill badge-success">JavaScript</span>
              <span className="badge badge-pill badge-danger">jQuery</span>
              <span className="badge badge-pill badge-info">API</span>
            </li>
            <li>
              <a
                href="https://deannapi.github.io/work-day-scheduler/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Work Day Scheduler
                <br />
                <img src={work_day} alt="" height="175px" className="app-img" />
              </a>
              <p>Schedule hourly tasks.</p>
              <a
                href="https://github.com/deannapi/work-day-scheduler"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-github"></i>
              </a>
              <span className="badge badge-pill badge-primary">HTML</span>
              <span className="badge badge-pill badge-secondary">CSS</span>
              <span className="badge badge-pill badge-success">JavaScript</span>
              <span className="badge badge-pill badge-danger">jQuery</span>
            </li>
            <li>
              <a
                href="https://ut-project-1-group-5.github.io/project-1-group-5/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book and Movie Finder
                <br />
                <img
                  src={book_movie}
                  alt=""
                  height="175px"
                  className="app-img"
                />
              </a>
              <p>Find a book and its' matching movie.</p>
              <a
                href="https://github.com/jpd61/project-1-group-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-github"></i>
              </a>
              <span className="badge badge-pill badge-primary">HTML</span>
              <span className="badge badge-pill badge-secondary">CSS</span>
              <span className="badge badge-pill badge-success">JavaScript</span>
              <span className="badge badge-pill badge-danger">jQuery</span>
            </li>
            <li>
              <a
                href="https://deanna-note-taker.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Note Taker
                <br />
                <img
                  src={note_taker}
                  alt=""
                  height="175px"
                  className="app-img"
                />
              </a>
              <p>Take notes & make reminders.</p>
              <a
                href="https://github.com/deannapi/note-taker"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-github"></i>
              </a>
              <span className="badge badge-pill badge-dark">JSON</span>
              <span className="badge badge-pill badge-light">Express.js</span>
              <span className="badge badge-pill badge-warning">Node.js</span>
            </li>
            <li>
              <a
                href="https://motor-services.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Motor Services
                <br />
                <img src={motor} alt="" height="175px" className="app-img" />
              </a>
              <p>Enter vehicle mileage for maintenance reminders.</p>
              <a
                href="https://github.com/deannapi/motor-services"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-github"></i>
              </a>
              <span className="badge badge-pill badge-dark">MySQL</span>
              <span className="badge badge-pill badge-dark">Handlebars.js</span>
              <span className="badge badge-pill badge-light">Express.js</span>
              <span className="badge badge-pill badge-warning">Node.js</span>
            </li>
            <li>
              <a
                href="https://budgeting-tool-pwa.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Budget Tracker
                <br />
                <img src={budget} alt="" height="175px" className="app-img" />
              </a>
              <p>Add deposits and withdrawals to your journal.</p>
              <a
                href="https://github.com/deannapi/budget-tracker"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-github"></i>
              </a>
              <span className="badge badge-pill badge-dark">NoSQL</span>
              <span className="badge badge-pill badge-dark">MongoDB</span>
              <span className="badge badge-pill badge-light">Express.js</span>
              <span className="badge badge-pill badge-warning">Node.js</span>
            </li>
            <li>
              <a
                href="https://deannapi.github.io/food-festival/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Food Festival
                <br />
                <img
                  src={food_fest}
                  alt=""
                  height="175px"
                  className="app-img"
                />
              </a>
              <p>Find food at a local festival.</p>
              <a
                href="https://github.com/deannapi/food-festival/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-github"></i>
              </a>
              <span className="badge badge-pill badge-success">JavaScript</span>
              <span className="badge badge-pill badge-warning">Node.js</span>
            </li>
            <li>
              <a
                href="https://books-from-google.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Book Search
                <br />
                <img
                  src={google_books}
                  alt=""
                  height="175px"
                  className="app-img"
                />
              </a>
              <p>Search for books via Google.</p>
              <a
                href="https://github.com/deannapi/book-search-engine"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-github"></i>
              </a>
              <span className="badge badge-pill badge-dark">MERN</span>
            </li>
            <li>
              <a
                href="https://github.com/deannapi/deep-thoughts"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deep Thoughts
                <br />
                <img
                  src={deep_thoughts}
                  alt=""
                  height="175px"
                  className="app-img"
                />
              </a>
              <p>Social media application.</p>
              <a
                href="https://github.com/deannapi/deep-thoughts"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-github"></i>
              </a>
              <span className="badge badge-pill badge-dark">MERN</span>
            </li>
            <li>
              <a
                href="https://honey-do-list.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Honey Do List
                <br />
                <img src={honey_do} alt="" height="175px" className="app-img" />
              </a>
              <p>Keep track of your chores and share them with family.</p>
              <a
                href="https://github.com/deannapi/honey-do-list"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-github"></i>
              </a>
              <span className="badge badge-pill badge-dark">MERN</span>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
