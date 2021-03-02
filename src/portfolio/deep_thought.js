import React from "react";
import deep_thoughts from "../images/deep_thoughts.jpg";

export default class DeepThoughts extends React.Component {
  render() {
    return (
      <>
        {/* <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            <a
              href="https://deep-thoughts-social.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deep Thoughts
            </a>
          </h5>
          <img className="card-img-top" src={deep_thoughts} alt="" />
          <p className="card-text">Social media application</p>
        </div>
        <ul>
          <span className="badge badge-pill badge-dark">MERN</span>
        </ul>

        <div className="card-body">
          <a
            href="https://github.com/deannapi/deep-thoughts"
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
              <span>Deep Thoughts</span>
            </h2>
            <div className="mc-content">
              <div className="img-container">
                <img
                  className="img-responsive"
                  src={deep_thoughts}
                  alt=""
                  style={{ borderRadius: "46px" }}
                />
              </div>
              <div className="mc-description">
                Social media application
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
                href="https://github.com/deannapi/deep-thoughts"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://deep-thoughts-social.herokuapp.com/"
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
