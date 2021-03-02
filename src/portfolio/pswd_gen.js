import React from "react";
import pswd_gen from "../images/pswd_gen.jpg";

export default class PSWD_GEN extends React.Component {
  render() {
    return (
      <>
        {/* // <div className="card">
      //   <div className="card-body">
      //     <h5 className="card-title">
      //       <a
      //         href="https://deannapi.github.io/password-generator/"
      //         target="_blank"
      //         rel="noopener noreferrer"
      //       >
      //         Password Generator
      //       </a>
      //     </h5>
      //     <img className="card-img-top" src={pswd_gen} alt="" />
      //     <p className="card-text">Random password generator</p>
      //   </div>
      //   <ul>
      //     <span className="badge badge-pill badge-primary">HTML</span>
      //     <span className="badge badge-pill badge-secondary">CSS</span>
      //     <span className="badge badge-pill badge-success">JavaScript</span>
      //   </ul>

      //   <div className="card-body">
      //     <a
      //       href="https://github.com/deannapi/password-generator"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       <i className="fab fa-github"></i>
      //     </a>
      //   </div>
      // </div> */}

        <div className="col-md-4 col-sm-6 col-xs-12">
          <article className="material-card Cyan">
            <h2>
              <span>Password Generator</span>
            </h2>
            <div className="mc-content">
              <div className="img-container">
                <img
                  className="img-responsive"
                  src={pswd_gen}
                  alt=""
                  // style={{ borderRadius: "46px" }}
                />
              </div>
              <div className="mc-description">
                Random password generator
                <ul>
                  <span className="badge badge-pill badge-primary">HTML</span>
                  <span className="badge badge-pill badge-secondary">CSS</span>
                  <span className="badge badge-pill badge-success">
                    JavaScript
                  </span>
                </ul>
              </div>
            </div>
            <a className="mc-btn-action">
              <i className="fa fa-bars"></i>
            </a>
            <div className="mc-footer">
              <a
                href="https://github.com/deannapi/password-generator"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://deannapi.github.io/password-generator/"
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
