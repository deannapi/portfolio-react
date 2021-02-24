import React from "react";
import note_taker from "../images/note_taker.jpg";

export default class Note_Taker extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            <a
              href="https://deanna-note-taker.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Note Taker
            </a>
          </h5>
          <img className="card-img-top" src={note_taker} alt="" />
          <p className="card-text">Create notes and reminders</p>
        </div>
        <ul>
          <span className="badge badge-pill badge-dark">JSON</span>
          <span className="badge badge-pill badge-light">Express.js</span>
          <span className="badge badge-pill badge-warning">Node.js</span>
        </ul>

        <div className="card-body">
          <a
            href="https://github.com/deannapi/note-taker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    );
  }
}
