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
            Motivated Full Stack Web Developer with a strong background in
            mathematics and data analytics. Passionate about building
            first-class web applications, writing and testing code,
            troubleshooting issues and implementing new techniques. Keen
            interest in object-oriented programming and software development.
            Equipped with a diverse skill-set and proven ability to deliver
            desired results. I am accomplished in the development of algorithms,
            problem solving and building responsive websites and applications.
            With a strong knowledge of HTML, CSS, REACT, JavaScript and creating back-end
            connections, I am confident that I will fulfill the duties and
            skills required for a developer role.
          </p>
        </div>
      </div>
    </section>
  );
}
