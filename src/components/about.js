import React, { Component } from "react";
import selfie from '../img/selfie.JPG';

export default class About extends Component {
  render() {
    let resumeInfo = this.props.resumeData;
    return (
      <section className="about">
        <h3>About Me</h3>
        <div className="about-me">
            <img className="profile-pic" src={selfie} alt="selfie" height="220px"/>
            <div>
              <p>{resumeInfo.aboutme}</p>
            </div>
        </div>
      </section>
    );
  }
}