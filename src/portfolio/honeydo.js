import React from "react";
import honey_do from "../images/honeydo.jpg";

export default class HoneyDo extends React.Component {
  render() {
    return (
      <>
        {/* <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            <a
              href="https://honey-do-list.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Honey Do List
            </a>
          </h5>
          <img className="card-img-top" src={honey_do} alt="" />
          <p className="card-text">Keep track of your chores and share them with family</p>
        </div>
        <ul>
        <span className="badge badge-pill badge-dark">MERN</span>
        </ul>

        <div className="card-body">
          <a
            href="https://github.com/deannapi/honey-do-list"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div> */}

        <div className="col-md-4 col-sm-6 col-xs-12">
          <article className="material-card Cyan">
            <h2>
              <span>Honey Do List</span>
            </h2>
            <div className="mc-content">
              <div className="img-container">
                <img
                  className="img-responsive"
                  src={honey_do}
                  alt=""
                  style={{ borderRadius: "46px" }}
                />
              </div>
              <div className="mc-description">
              Keep track of your chores and share them with family
                <ul>
                <span className="badge badge-pill badge-dark">MERN</span>
                </ul>
              </div>
            </div>
            <a className="mc-btn-action">
              <i className="fa fa-bars"></i>
            </a>
            <div className="mc-footer">
              <a
                href="https://github.com/deannapi/honey-do-list"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                 href="https://honey-do-list.herokuapp.com/"
                 target="_blank"
                 rel="noopener noreferrer"
              >
                <i class="fas fa-globe"></i>
              </a>
            </div>
          </article>
        </div>
      </>
    );
  }
}
