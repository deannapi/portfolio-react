import React from "react";

export default function Nav(props) {
  const {
    ResumeSelected,
    setResumeSelected,
    ContactSelected,
    setContactSelected,
    PortfolioSelected,
    setPortfolioSelected,
    AboutSelected,
    setAboutSelected,
  } = props;

  return (
    <>
    <div className="row banner">
    <h1 className="responsive-headline">DeAnna Martinez</h1>
    <h3>Data Analyst || Full Stack Web Developer</h3>
  </div>
      <nav>
        <ul className="flex-row">
          <li className={`mx-1 ${AboutSelected && `navActive`}`}>
            <a href="#about">
              <span
                onClick={() => {
                  setAboutSelected(true);
                  setContactSelected(false);
                  setPortfolioSelected(false);
                  setResumeSelected(false);
                }}
              >
                About Me
              </span>
            </a>
          </li>
          <li className={`mx-1 ${PortfolioSelected && `navActive`}`}>
            <a href="#portfolio">
              <span
                onClick={() => {
                  setAboutSelected(false);
                  setContactSelected(false);
                  setPortfolioSelected(true);
                  setResumeSelected(false);
                }}
              >
                Portfolio
              </span>
            </a>
          </li>
          <li className={`mx-2 ${ContactSelected && "navActive"}`}>
            <a href="#contact">
              <span
                onClick={() => {
                  setAboutSelected(false);
                  setContactSelected(true);
                  setPortfolioSelected(false);
                  setResumeSelected(false);
                }}
              >
                Contact
              </span>
            </a>
          </li>
          <li className={`mx-2 ${ResumeSelected && "navActive"}`}>
            <a href="#resume">
              <span
                onClick={() => {
                  setAboutSelected(false);
                  setContactSelected(false);
                  setPortfolioSelected(false);
                  setResumeSelected(true);
                }}
              >
                Resume
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}