import React from "react";
import google_books from "../images/google_books.jpg";

export default class GoogleBooks extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            <a
              href="https://books-from-google.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Book Search
            </a>
          </h5>
          <img className="card-img-top" src={google_books} alt="" />
          <p className="card-text">Search for books via Google</p>
        </div>
        <ul>
          <span className="badge badge-pill badge-dark">MERN</span>
        </ul>

        <div className="card-body">
          <a
            href="https://github.com/deannapi/book-search-engine"
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
