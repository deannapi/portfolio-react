import React from "react";
import selfie from "../img/selfie.JPG";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Data Analyst",
  "Data Engineer",
  "Mathematician",
  "Full Stack Web Developer",
];

export default function Home() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 //change every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="about-me">
      <h3>
        <TextTransition
          text={TEXTS[index % TEXTS.length]}
          springConfig={presets.wobbly}
          inline
        />
      </h3>

      <div className="about-body">
        <img className="profile-pic" src={selfie} alt="selfie" height="220px" />
        <p>
          Motivated Full Stack Web Developer with a strong background in
          mathematics and data analytics. Passionate about building first-class
          web applications, writing and testing code, troubleshooting issues and
          implementing new techniques. Equipped with a diverse
          skill-set and proven ability to deliver desired results. I am
          accomplished in the development of algorithms, problem solving and
          building responsive websites and applications. 
        </p>
      </div>
    </div>
  );
}
