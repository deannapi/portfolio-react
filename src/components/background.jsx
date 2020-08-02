import React from "react";
import PropTypes from "prop-types";

import Wow from "wow.js";

export default class Background extends React.Component {
    componentDidMount() {
        new Wow.Wow().init();
    }

    render() {
        return (
            <div id="background" className="background">
                <div>
                    <div className="top-container flex">
                        <h1>
                            Hi! I'm DeAnna Martinez
                            <br />
                            Data Analyst
                            <br />
                            Full Stack Web Developer
                        </h1>
                        <button 
                            className={"work-button" + this.props.flip}
                            data-wow-offset="0"
                            onClick={() => {
                                let node = document.getElementById(
                                    this.props.aboutRef.current.props.id
                                );
                                window.scrollTo({
                                    top: node.offsetTop,
                                    behavior: "smooth"
                                });
                            }}>
                            Click Here To See My Work!
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

Background.PropTypes = {
    aboutRef: PropTypes.object,
    flip: PropTypes.string
};