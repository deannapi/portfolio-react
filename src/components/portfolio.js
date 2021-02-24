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
import rmbw from "../images/Restore_Logo_Final trimmed.png";
import harp from "../images/harp-icon.png";

export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <h2>Projects</h2>
        <div className="card">
          
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <img
            className="card-img-top"
            src={rmbw}
            alt="Restore Massage and Bodywork"
          />
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
    );
  }
}
