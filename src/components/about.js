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
            certification from The University of Texas at Austin. I am an
            experienced Data Analyst with a Master's of Arts degree in
            Mathematics. Equipped with a diverse skill-set and proven ability to
            deliver desired results. I am accomplished in the development of
            algorithms, problem solving and building responsive websites and
            applications.
          </p>
          {/* <p>
              I have a Master's of Arts degree in Mathematics and a solid
              knowledge for complex Data Analysis. Having excelled in creating
              data driven reports using existing and emerging software tools, I
              have continued to refine my strengths in information technology
              tools, object-oriented programming, data interpretation and
              problem solving. Adding a Full Stack Web Developer certification
              will allow me to utilize my skills and contribute in my career as
              a developer.
            </p> */}
        </div>
      </div>
    </section>
  );
}
