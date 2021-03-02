import React from "react";
import motor from "../images/motor.jpg";

export default class Motor extends React.Component {
  render() {
    return (
      <>
        {/* // <div className="card">
      //   <div className="card-body">
      //     <h5 className="card-title">
      //       <a
      //         href="https://motor-services.herokuapp.com/"
      //         target="_blank"
      //         rel="noopener noreferrer"
      //       >
      //         Motor Services
      //       </a>
      //     </h5>
      //     <img className="card-img-top" src={motor} alt="" />
      //     <p className="card-text">Enter vehicle mileage for maintenance reminders</p>
      //   </div>
      //   <ul>
      //   <span className="badge badge-pill badge-dark">MySQL</span>
      //         <span className="badge badge-pill badge-dark">Handlebars.js</span>
      //         <span className="badge badge-pill badge-light">Express.js</span>
      //         <span className="badge badge-pill badge-warning">Node.js</span>
      //   </ul>

      //   <div className="card-body">
      //     <a
      //       href="https://github.com/deannapi/motor-services"
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
              <span>Motor Services</span>
            </h2>
            <div className="mc-content">
              <div className="img-container">
                <img
                  className="img-responsive"
                  src={motor}
                  alt=""
                  style={{ borderRadius: "46px" }}
                />
              </div>
              <div className="mc-description">
                Enter vehicle mileage for maintenance reminders
                <ul>
                  <span className="badge badge-pill badge-dark">MySQL</span>
                  <span className="badge badge-pill badge-dark">
                    Handlebars.js
                  </span>
                  <span className="badge badge-pill badge-light">
                    Express.js
                  </span>
                  <span className="badge badge-pill badge-warning">
                    Node.js
                  </span>
                </ul>
              </div>
            </div>
            <a className="mc-btn-action">
              <i className="fa fa-bars"></i>
            </a>
            <div className="mc-footer">
              <a
                href="https://github.com/deannapi/motor-services"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://motor-services.herokuapp.com/"
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
