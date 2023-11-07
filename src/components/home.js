import React from "react";
import selfie from "../img/wavySelfie.jpg";
import TextTransition, { presets } from "react-text-transition";
import Resume from "./resume";
import Contact from "./contact";

const TEXTS = ["Data Analyst", "Power BI Developer", "Mathematician"];

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
    <div className="about-me" id="fullheight">
      <h3>
        <TextTransition
          text={TEXTS[index % TEXTS.length]}
          springConfig={presets.wobbly}
          inline
        />
      </h3>

      <Contact />

      <div className="about-body">
        <img className="profile-pic" src={selfie} alt="selfie" height="220px" />
        <p>
          Dedicated Power Business Intelligence developer with 6+ years of
          experience helping companies meet their business goals and objectives
          by designing analytical reports, translating data into knowledge, and
          developing BI and analytics solutions. I possess expertise in cleaning
          and preprocessing complex datasets from various sources, ensuring data
          accuracy and integrity. Utilizing tools such as Python, SQL, and
          Excel, I have streamlined data workflows and enhanced data quality,
          leading to more reliable analysis outcomes. As a skilled Data Analyst,
          I have consistently demonstrated a strong aptitude for transforming
          raw data into actionable insights and driving informed decision-making
          across diverse industries. Through my proficiency in data
          manipulation, statistical analysis, and data visualization, I have
          effectively contributed to business growth and process optimization.
        </p>
      </div>

      <Resume />
    </div>
  );
}
