import React from "react";
import stack_ov from "../images/stack-overflow.png";
import harp_img from "../img/harp-icon.png";

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
          {/* <div className="row"> */}
            <ul>
              <li className="github">
                <a
                  href="https://github.com/deannapi"
                  target="_blank"
                  rel="noopener  noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="stack-overflow">
                <a href="https://stackoverflow.com/users/11610155/deanna-martinez">
                  <i>
                    <img
                      src={stack_ov}
                      height="40px"
                      alt="stackov"
                      className="stackov"
                    ></img>
                  </i>
                </a>
              </li>
              <li className="linkedin">
                <a
                  href="https://www.linkedin.com/in/deanna-martinez-63539a137/"
                  target="_blank"
                  rel="noopener  noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li className="harp">
                <a
                  href="https://www.harpbydeanna.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="harp-icon"
                    src={harp_img}
                    alt="harp"
                    height="40px"
                  ></img>
                </a>
              </li>
            </ul>
          {/* </div> */}
          {/* <div className="row">
            <h5 className="footer-name">DeAnna Martinez &copy; 2020</h5>
          </div> */}
      </footer>
    );
  }
}
