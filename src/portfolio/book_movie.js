import React from "react";
import book_movie from "../images/book_movie.jpg";

export default class BookMovie extends React.Component {
  render() {
    return (
      <div className="card">
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
      </div>
    );
  }
}
