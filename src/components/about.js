import React, { Component } from "react";
import selfie from '../img/selfie.JPG';

export default class About extends Component {
  render() {
    let resumeInfo = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={selfie} alt="selfie" height="220px"/>
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeInfo.aboutme}</p>
          </div>
        </div>
      </section>
    );
  }
}