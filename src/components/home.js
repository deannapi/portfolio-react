import React from "react";
import selfie from "../img/wavySelfie.jpg";
import TextTransition, { presets } from "react-text-transition";
import Resume from "./resume";

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

      <div>
        <h5>Education</h5>
        <p className="school-name">
          Bachelor's of Science in Mathematics
          <span>&bull;</span> <em className="date">May 2008</em>
        </p>
        <p className="school-name">
          Master's of Arts in Mathematics
          <span>&bull;</span> <em className="date">May 2013</em>
        </p>
      </div>

      <div>
        <h5>Professional Development</h5>
        <p className="school-name">
          Microsoft Certified Power BI Data Analyst
          <span>&bull;</span> <em className="date">July 2023</em>
        </p>
        <p className="school-name">
          Attaining Data-Driven Insights with Snowflake and Microsoft Power BI
          <span>&bull;</span> <em className="date">2022</em>
        </p>
        <p className="school-name">
          Zero To Snowflake
          <span>&bull;</span> <em className="date">2022</em>
        </p>
        <p className="school-name">
          Snowflake Data Warehousing Workshop
          <span>&bull;</span> <em className="date">2022</em>
        </p>
        <p className="school-name">
          Full Stack Web Developer Certificate
          <span>&bull;</span> <em className="date">September 2020</em>
        </p>
      </div>

      <div className="skills">
        <h5>Skills</h5>
        <ul className="row">
          <li>Python</li>
          <li>PowerApps</li>
          <li>Power Automate</li>
          </ul>
          <ul className="row">
          <li>Power BI</li>
          <li>SQL Server</li>
          <li>Oracle</li>
          </ul>
          <ul className="row">
          <li>REACT - HTML, CSS, JavaScript</li>
          <li>Microsoft Excel - VBA, Pivot</li>
          <li>DAX</li>
        </ul>
      </div>

       <Resume />
    </div>
  );
}
