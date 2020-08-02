import React from 'react';
import selfie from "../../assets/cover/selfie.JPG";

function About() {
    return (
        <div className="grid-container">
            <div className="grid-about">
                <section className="my-5">
                    <img src={selfie} className="my-2" style={{ width: "15%" }} alt="selfie" id="selfie"></img>
                    <p>I have a Master's of Arts degree in Mathematics and a solid knowledge for complex
                        Data Analysis. Having excelled in creating data driven reports using existing and emerging
                        software tools, I have continued to refine my strengths in information technology tools, 
                        object-oriented programming, data interpretation and problem solving. Adding a Full Stack 
                        Web Developer certification will allow me to utilize my skills and contribute in my career 
                        as a developer. </p>
                </section>
            </div>
        </div>
        
    );
}

export default About;