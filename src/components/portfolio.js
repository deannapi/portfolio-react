import React from "react";
import SplitPane from "react-split-pane";
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

export default class Portfolio extends React.Component {
  render() {
    return (
      <>
        <h2>Portfolio</h2>
        {/* this div shows the small card scrollable */}
        {/* <SplitPane split="vertical" minSize={300}> */}
        <section className="container portfolio">
          <div className="row active-with-click">
            <HARP></HARP>
            <RMBW></RMBW>
          </div>
        </section>
        {/* this div shows the expanded cards from the left */}
          {/* open the card */}
          {/* <HARP></HARP>
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
          <GoogleBooks></GoogleBooks> */}
        {/* </SplitPane> */}
      </>
    );
  }
}
