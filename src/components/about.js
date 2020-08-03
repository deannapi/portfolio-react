import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeInfo = this.props.resumeInfo;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/selfie.jpg" alt="selfie" />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeInfo.aboutme}</p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Me</h2>
                <p className="address">
                  <span>{resumeInfo.name}</span>
                  <br></br>
                  <span>{resumeInfo.address}</span>
                  <br></br>
                  <span>{resumeInfo.website}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
