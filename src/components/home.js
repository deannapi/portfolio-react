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
          Motivated Data Analyst with 8+ years of experience and Web Developer
          with a strong background in mathematics. Expert in analyzing
          qualitative and quantitative data and identifying opportunities to
          perform analysis of large data sets as well as developing analytical
          models using advanced software with mathematics, statistics
          backgrounds, and website development. Passionate about building
          first-class web applications, writing, and testing code,
          troubleshooting issues, and implementing new techniques. Critical
          thinking ability, high attention to detail, and excellent research and
          analysis skills, able to correlate complex datasets into meaningful
          interpretations and results using advanced business intelligence
          tools. Excellent written and verbal communication skills. Strong
          problem-solving and decision-making skills, adept at multitasking and
          a self-starter. Works independently with minimal supervision and
          displays collaboration within cross-functional teams.
        </p>
      </div>
    </div>
  );
}
