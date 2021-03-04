import React from "react";
import harp from "../images/harp-icon.png";
import $ from "jquery";

$(function() {
  $('.material-card > .mc-btn-action').on('click',function () {
      var card = $(this).parent('.material-card');
      var icon = $(this).children('i');
      icon.addClass('fa-spin-fast');

      if (card.hasClass('mc-active')) {
          card.removeClass('mc-active');

          window.setTimeout(function() {
              icon
                  .removeClass('fa-arrow-left')
                  .removeClass('fa-spin-fast')
                  .addClass('fa-bars');

          }, 800);
      } else {
          card.addClass('mc-active');

          window.setTimeout(function() {
              icon
                  .removeClass('fa-bars')
                  .removeClass('fa-spin-fast')
                  .addClass('fa-arrow-left');

          }, 800);
      }
  });
});

export default class HARP extends React.Component {
  
  render() {
    return (
      <>
        {/* <div className="card" id="harpbydeanna">
          <div className="card-body">
            <h5 className="card-title">
              <a
                href="https://www.harpbydeanna.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Harp By DeAnna
              </a>
            </h5>
            <img className="card-img-top" src={harp} alt="" id="harp-card" />
            <p className="card-text">Harp music entertainment</p>
          </div>
          <ul>
            <span className="badge badge-pill badge-primary">HTML</span>
            <span className="badge badge-pill badge-secondary">CSS</span>
            <span className="badge badge-pill badge-success">JavaScript</span>
            <span className="badge badge-pill badge-danger">jQuery</span>
            <span className="badge badge-pill badge-light">Express.js</span>
            <span className="badge badge-pill badge-warning">Node.js</span>
            <span className="badge badge-pill badge-dark">REACT</span>
          </ul>

          <div className="card-body">
            <a
              href="https://github.com/deannapi/harpbydeanna"
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
              <span>Harp By DeAnna</span>
              {/* <strong>
                Harp Music Entertainment
              </strong> */}
            </h2>
            <div className="mc-content">
              <div className="img-container">
                <img
                  className="img-responsive"
                  src={harp}
                  alt="harp"
                  style={{ width: "7em" }}
                  id="harp-card"
                />
              </div>
              <div className="mc-description">
                Elegant harp music for your private or public events.
                <ul>
                  <span className="badge badge-pill badge-primary">HTML</span>
                  <span className="badge badge-pill badge-secondary">CSS</span>
                  <span className="badge badge-pill badge-success">
                    JavaScript
                  </span>
                  <span className="badge badge-pill badge-danger">jQuery</span>
                  <span className="badge badge-pill badge-light">
                    Express.js
                  </span>
                  <span className="badge badge-pill badge-warning">
                    Node.js
                  </span>
                  <span className="badge badge-pill badge-dark">REACT</span>
                </ul>
              </div>
            </div>
            <button className="mc-btn-action">
              <i className="fa fa-bars"></i>
            </button>
            <div className="mc-footer">
              <a
                href="https://github.com/deannapi/harpbydeanna"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.harpbydeanna.com"
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
