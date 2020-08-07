import React from "react";
import stack_ov from "../images/stack-overflow.png";

export default class Footer extends React.Component {
  render() {
    // let resumeData = this.props.resumeData;
    return (
      <footer>
        <div id="footer" className="row">
          <div className="contact-grid">
            {/* <h4>Follow Me:</h4> */}
            <ul className="github">
              <li className="github">
                <a href="https://github.com/deannapi">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="stack-overflow">
                <a href="https://stackoverflow.com/users/11610155/deanna-martinez">
                  <i>
                    <img src={stack_ov} height="40px" alt=""></img>
                  </i>
                </a>
              </li>
              <li className="linkedin">
                <a href="https://www.linkedin.com/in/deanna-martinez-63539a137/">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
            <h5 className="footer-name">DeAnna Martinez &copy; 2020</h5>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
