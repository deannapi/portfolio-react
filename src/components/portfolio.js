import React, { Component } from "react";
import pswd_gen from "../images/pswd_gen.jpg";
import weather from "../images/weather.jpg";
import work_day from "../images/workday.jpg";
import note_taker from "../images/note_taker.jpg";
import book_movie from "../images/book_movie.jpg";
import motor from "../images/motor.jpg";
import budget from "../images/budget.jpg";
import food_fest from "../images/food_fest.jpg";

export default class Porfolio extends Component {
  render() {
    // let resumeInfo = this.props.resumeData;
    return (
      <section className="portfolio">
        <h1>Projects</h1>
        <div className="projects">
          <ul>
            <li>
              <a href="https://deannapi.github.io/password-generator/">
                Password Generator
                <br />
                <img src={pswd_gen} alt="" height="175px" className="app-img" />
              </a>
              <p>Random password generator.</p>
            </li>
            <li>
              <a href="https://deannapi.github.io/weather-app/">
                Weather App
                <br />
                <img src={weather} alt="" height="175px" className="app-img" />
              </a>
              <p>Find your daily weather and 5-day forecast.</p>
            </li>
            <li>
              <a href="https://deannapi.github.io/work-day-scheduler/">
                Work Day Scheduler
                <br />
                <img src={work_day} alt="" height="175px" className="app-img" />
              </a>
              <p>Schedule hourly tasks.</p>
            </li>
            <li>
              <a href="https://ut-project-1-group-5.github.io/project-1-group-5/">
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
            </li>
            <li>
              <a href="https://deanna-note-taker.herokuapp.com/">
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
            </li>
            <li>
              <a href="https://motor-services.herokuapp.com/">
                Motor Services
                <br />
                <img src={motor} alt="" height="175px" className="app-img" />
              </a>
              <p>Enter vehicle mileage for maintenance reminders.</p>
            </li>
            <li>
              <a href="https://budgeting-tool-pwa.herokuapp.com/">
                Budget Tracker
                <br />
                <img src={budget} alt="" height="175px" className="app-img" />
              </a>
              <p>Add deposits and withdrawals to your journal.</p>
            </li>
            <li>
              <a href="https://deannapi.github.io/food-festival/">
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
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
