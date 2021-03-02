import React from "react";
import book_movie from "../images/book_movie.jpg";
import $ from "jquery";

$(function () {
  $(".material-card > .mc-btn-action").click(function () {
    var card = $(this).parent(".material-card");
    var icon = $(this).children("i");
    icon.addClass("fa-spin-fast");

    if (card.hasClass("mc-active")) {
      card.removeClass("mc-active");

      window.setTimeout(function () {
        icon
          .removeClass("fa-arrow-left")
          .removeClass("fa-spin-fast")
          .addClass("fa-bars");
      }, 800);
    } else {
      card.addClass("mc-active");

      window.setTimeout(function () {
        icon
          .removeClass("fa-bars")
          .removeClass("fa-spin-fast")
          .addClass("fa-arrow-left");
      }, 800);
    }
  });
});

export default class BookMovie extends React.Component {
  render() {
    return (
      <>
        {/* <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            <a
              href="https://ut-project-1-group-5.github.io/project-1-group-5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book and Movie Finder
            </a>
          </h5>
          <img className="card-img-top" src={book_movie} alt="" />
          <p className="card-text">Find a book and its' matching movie</p>
        </div>
        <ul>
          <span className="badge badge-pill badge-primary">HTML</span>
          <span className="badge badge-pill badge-secondary">CSS</span>
          <span className="badge badge-pill badge-success">JavaScript</span>
          <span className="badge badge-pill badge-danger">jQuery</span>
        </ul>

        <div className="card-body">
          <a
            href="https://github.com/jpd61/project-1-group-5"
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
              <span>Book and Movie Finder</span>
            </h2>
            <div className="mc-content">
              <div className="img-container">
                <img
                  className="img-responsive"
                  src={book_movie}
                  alt=""
                />
              </div>
              <div className="mc-description">
                Search for a book and its' corresponding movie
                <ul>
                  <span className="badge badge-pill badge-primary">HTML</span>
                  <span className="badge badge-pill badge-secondary">CSS</span>
                  <span className="badge badge-pill badge-success">
                    JavaScript
                  </span>
                  <span className="badge badge-pill badge-danger">jQuery</span>
                </ul>
              </div>
            </div>
            <button className="mc-btn-action">
              <i className="fa fa-bars"></i>
            </button>
            <div className="mc-footer">
              <a
                href="https://github.com/jpd61/project-1-group-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://ut-project-1-group-5.github.io/project-1-group-5/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-globe"></i>
              </a>
            </div>
          </article>
        </div>
      </>
    );
  }
}
