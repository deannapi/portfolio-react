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

import harp_img from '../images/harp-icon.png';

export default class Portfolio extends React.Component {
  render() {
    return (
      <>
        <h2>Portfolio</h2>
        <div className="portfolio-carousel">
          <Carousel autoPlay interval="5000" transitionTime="5000" infiniteLoop >
            {/* <section className="container portfolio"> */}
              {/* <div className="row active-with-click"> */}
                <HARP></HARP>
                <RMBW></RMBW>
                <HoneyDo></HoneyDo>
                <PSWD_GEN></PSWD_GEN>
                <WEATHER></WEATHER>
                <NOTE_TAKER></NOTE_TAKER>
                {/* <WORK_DAY></WORK_DAY>
            <BOOK_MOVIE></BOOK_MOVIE>
            <MOTOR></MOTOR>
            <FOOD_FEST></FOOD_FEST>
            <BUDGET></BUDGET>
            <DeepThoughts></DeepThoughts>
            <GoogleBooks></GoogleBooks> */}
              {/* </div> */}
            {/* </section> */}

            {/* <div className="carousel">
              <div className="thumbs-wrapper axis-vertical">
                <ul className="thumbs animated">
                  <img src={harp_img} alt="" />
                </ul>
              </div>
            </div> */}
          </Carousel>
        </div>
      </>
    );
  }
}
