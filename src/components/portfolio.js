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
import harp_icon from "../images/harp-icon.png";
import rmbw from "../images/Restore_Logo_Final trimmed.png";
import honeydo from "../images/honeydo.jpg";
import pswd_gen from "../images/pswd_gen.jpg";
import weather from "../images/weather.jpg";
import note_taker from "../images/note_taker.jpg";
import workday from "../images/workday.jpg";
import book_movie from "../images/book_movie.jpg";
import motor from "../images/motor.jpg";
import food_fest from "../images/food_fest.jpg";
import budget_tracker from "../images/budget.jpg";
import deep_thought from "../images/deep_thoughts.jpg";
import google_books from "../images/google_books.jpg";

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
          >
            <HARP>
              <img
                src={harp_icon}
                alt=""
                style={{ width: "40px", height: "50px" }}
              />
            </HARP>
            <RMBW>
              <img
                src={rmbw}
                alt=""
                style={{ width: "40px", height: "50px" }}
              />
            </RMBW>
            <HoneyDo>
              <img
                src={honeydo}
                alt=""
                style={{ width: "40px", height: "50px" }}
              />
            </HoneyDo>
            <PSWD_GEN>
              <img
                src={pswd_gen}
                alt=""
                style={{ width: "40px", height: "50px" }}
              />
            </PSWD_GEN>
            <WEATHER>
              <img
                src={weather}
                alt=""
                style={{ width: "40px", height: "50px" }}
              />
            </WEATHER>
            <NOTE_TAKER>
              <img
                src={note_taker}
                alt=""
                style={{ width: "40px", height: "50px" }}
              />
            </NOTE_TAKER>
            <WORK_DAY>
              <img
                src={workday}
                alt=""
                style={{ width: "40px", height: "50px" }}
              />
            </WORK_DAY>
            <BOOK_MOVIE>
              <img
                src={book_movie}
                alt=""
                style={{ width: "40px", height: "50px" }}
              />
            </BOOK_MOVIE>
            <MOTOR>
              <img
                src={motor}
                alt=""
                style={{ width: "40px", height: "50px" }}
              />
            </MOTOR>
            <FOOD_FEST>
              <img
                src={food_fest}
                alt=""
                style={{ width: "40px", height: "50px" }}
              />
            </FOOD_FEST>
            <BUDGET>
              <img
                src={budget_tracker}
                alt=""
                style={{ width: "40px", height: "50px" }}
              />
            </BUDGET>
            <DeepThoughts>
              <img
                src={deep_thought}
                alt=""
                style={{ width: "40px", height: "50px" }}
              />
            </DeepThoughts>
            <GoogleBooks>
              <img
                src={google_books}
                alt=""
                style={{ width: "40px", height: "50px" }}
              />
            </GoogleBooks>
          </Carousel>
        </div>
      </>
    );
  }
}
