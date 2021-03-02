import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import RMBW from "../portfolio/rmbw";
import PSWD_GEN from "../portfolio/pswd_gen";
import WEATHER from "../portfolio/weather";
import HARP from "../portfolio/harp";
import NOTE_TAKER from "../portfolio/note_taker";
import WORK_DAY from "../portfolio/work_day";
import HoneyDo from "../portfolio/honeydo";
import BOOK_MOVIE from "../portfolio/book_movie";
import MOTOR from "../portfolio/motor";
import FOOD_FEST from "../portfolio/food_fest";
import BUDGET from "../portfolio/budget_tracker";
import DeepThoughts from "../portfolio/deep_thought";
import GoogleBooks from "../portfolio/google_books";

// import all images
// import harp_icon from "../images/harp-icon.png";
// import rmbw from "../images/Restore_Logo_Final trimmed.png";
// import honeydo from "../images/honeydo.jpg";
// import pswd_gen from "../images/pswd_gen.jpg";
// import weather from "../images/weather.jpg";
// import note_taker from "../images/note_taker.jpg";
// import workday from "../images/workday.jpg";
// import book_movie from "../images/book_movie.jpg";
// import motor from "../images/motor.jpg";
// import food_fest from "../images/food_fest.jpg";
// import budget_tracker from "../images/budget.jpg";
// import deep_thought from "../images/deep_thoughts.jpg";
// import google_books from "../images/google_books.jpg";

export default class Portfolio extends React.Component {
  render() {
    return (
      <>
        <h2>Portfolio</h2>
        <div className="portfolio-carousel">
          <Carousel
            autoPlay
            interval="5000"
            transitionTime="3000"
            infiniteLoop
            showThumbs={false}
          >
            {/* <section className="container portfolio"> */}
            {/* <div className="row active-with-click"> */}
            <HARP ></HARP>
            <RMBW></RMBW>
            <HoneyDo></HoneyDo>
            <PSWD_GEN></PSWD_GEN>
            <WEATHER></WEATHER>
            <NOTE_TAKER></NOTE_TAKER>
            <WORK_DAY></WORK_DAY>
            <BOOK_MOVIE></BOOK_MOVIE>
            <MOTOR></MOTOR>
            <FOOD_FEST></FOOD_FEST>
            <BUDGET></BUDGET>
            <DeepThoughts></DeepThoughts>
            <GoogleBooks></GoogleBooks>

            {/* </div> */}
            {/* </section> */}
          </Carousel>
        </div>
      </>
    );
  }
}
