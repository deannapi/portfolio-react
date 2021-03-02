import React from "react";
import rmbw from "../images/Restore_Logo_Final trimmed.png";

export default class RMBW extends React.Component {
  render() {
    return (
      <>
        {/* <div className="card" id="rmbw">
          <div className="card-body">
            <h5 className="card-title">
              <a
                href="https://www.restoremassageandbodywork.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Restore Massage and Bodywork
              </a>
            </h5>
            <img
              className="card-img-top"
              src={rmbw}
              alt="Restore Massage and Bodywork"
            />
            <p className="card-text">Website for Massage Therapist Business</p>
          </div>
          <ul>
            <span className="badge badge-pill badge-primary">HTML</span>
            <span className="badge badge-pill badge-secondary">CSS</span>
            <span className="badge badge-pill badge-success">JavaScript</span>
            <span className="badge badge-pill badge-dark">REACT</span>
          </ul>

          <div className="card-body">
            <a
              href="https://github.com/deannapi/restoremassage"
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
              <span>Restore Massage and Bodywork</span>
            </h2>
            <div className="mc-content">
              <div className="img-container">
                <img
                  className="img-responsive"
                  src={rmbw}
                  alt=""
                  // style={{ width: "15em" }}
                />
              </div>
              <div className="mc-description">
                Website for Massage Therapist Business
                <ul>
                  <span className="badge badge-pill badge-primary">HTML</span>
                  <span className="badge badge-pill badge-secondary">CSS</span>
                  <span className="badge badge-pill badge-success">
                    JavaScript
                  </span>
                  <span className="badge badge-pill badge-dark">REACT</span>
                </ul>
              </div>
            </div>
            <a className="mc-btn-action">
              <i className="fa fa-bars"></i>
            </a>
            <div className="mc-footer">
              <a
                href="https://github.com/deannapi/restoremassage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.restoremassageandbodywork.com/"
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
