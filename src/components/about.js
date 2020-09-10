import React from "react";
import selfie from "../img/selfie.JPG";

export default function About() {
  return (
    <section className="about" id="about">
      <h3>I am DeAnna Martinez</h3>
      <div className="about-me">
        <img className="profile-pic" src={selfie} alt="selfie" height="220px" />
        <div>
          <p>
            A Full Stack Web Developer with a
            certificate from The University of Texas at Austin. I am an
            experienced Data Analyst with a Master's of Arts degree in
            Mathematics. Equipped with a diverse skill-set and proven ability to
            deliver desired results. I am accomplished in the development of
            algorithms, problem solving and building responsive websites and
            applications.
          </p>
        </div>
      </div>
    </section>
  );
}
