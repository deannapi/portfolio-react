import React from "react";
 
export default class Footer extends React.Component {
    render() {
        // let resumeData = this.props.resumeData;
        return (
            <footer>
                <div id="footer" className="container-fluid text-center">
                    <div className="contact-grid">
                        {/* <h4>Follow Me:</h4> */}
                        <ul className="a">
                            <li className="github">
                            <a href="https://github.com/deannapi"> 
                                <i className="fab fa-github"></i>
                            </a>
                            </li>
                            <li className="instagram">
                            <a href="http://www.instagram.com/deannapi">
                                <i className="fab fa-instagram"></i>
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
                </div>
            </footer>
        );
    }
}