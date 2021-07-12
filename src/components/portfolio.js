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
// import CF432 from "../portfolio/cf432";

// import all images
import harp_icon from "../images/harp-icon.png";
import rmbw from "../images/Restore_Logo_Final trimmed.png";
import honeydo from "../images/honeydolist_trim.png";
import pswd_gen from "../images/pswdgen_trim.png";
import weather from "../images/weather_trim.png";
import notetaker from "../images/notetaker_trim.png";
import workday from "../images/workday_trim.png";
import book_movie from "../images/bookmovie_trim.png";
import motor from "../images/motor.jpg";
import food_fest from "../images/food_fest.jpg";
import budget_tracker from "../images/budget.jpg";
import deep_thought from "../images/deep_thoughts.jpg";
import google_books from "../images/google_books.jpg";
// import cf_432 from "../images/logo432.jpg";

export default class Portfolio extends React.Component {
  render() {
    return (
      <>
        <h2>Portfolio</h2>
        <div className="portfolio-carousel">
          <Carousel autoPlay interval="5000" transitionTime="3000" infiniteLoop>
            <HARP>
              <img src={harp_icon} alt="harp" id="harp-thumb" />
            </HARP>
            <RMBW>
              <img src={rmbw} alt="massage" />
            </RMBW>
            <HoneyDo>
              <img src={honeydo} alt="" />
            </HoneyDo>
            {/* <CF432>
              <img src={cf_432} alt="cf432" />
            </CF432> */}
            <PSWD_GEN>
              <img src={pswd_gen} alt="" />
            </PSWD_GEN>
            <WEATHER>
              <img src={weather} alt="" />
            </WEATHER>
            <NOTE_TAKER>
              <img src={notetaker} alt="" />
            </NOTE_TAKER>
            <WORK_DAY>
              <img src={workday} alt="" />
            </WORK_DAY>
            <BOOK_MOVIE>
              <img src={book_movie} alt="" />
            </BOOK_MOVIE>
            <MOTOR>
              <img src={motor} alt="" />
            </MOTOR>
            <FOOD_FEST>
              <img src={food_fest} alt="" />
            </FOOD_FEST>
            <BUDGET>
              <img src={budget_tracker} alt="" />
            </BUDGET>
            <DeepThoughts>
              <img src={deep_thought} alt="" />
            </DeepThoughts>
            <GoogleBooks>
              <img src={google_books} alt="" />
            </GoogleBooks>
          </Carousel>
        </div>
      </>
    );
  }
}
