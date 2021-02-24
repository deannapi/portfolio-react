import React from "react";
import RMBW from "../portfolio/rmbw";
import PSWD_GEN from "../portfolio/pswd_gen";
import WEATHER from "../portfolio/weather";
import HARP from "../portfolio/harp";
import Note_Taker from '../portfolio/note_taker';
import Work_Day from '../portfolio/work_day';
import HoneyDo from '../portfolio/honeydo';


import book_movie from "../images/book_movie.jpg";
import motor from "../images/motor.jpg";
import budget from "../images/budget.jpg";
import food_fest from "../images/food_fest.jpg";
import google_books from "../images/google_books.jpg";
import deep_thoughts from "../images/deep_thoughts.jpg";


export default class Portfolio extends React.Component {
  render() {
    return (
      <div className="portfolio">
        <h2>Portfolio</h2>
        <div className="row projects">
          <HARP></HARP>
          <RMBW></RMBW>
          <HoneyDo></HoneyDo>
          <PSWD_GEN></PSWD_GEN>
          <WEATHER></WEATHER>
          <Note_Taker></Note_Taker>
          <Work_Day></Work_Day>
        </div>
      </div>
    );
  }
}
