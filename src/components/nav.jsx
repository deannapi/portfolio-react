import React, { useEffect } from "react";
import About from "./about";
import Contact from "./contact";
import Portfolio from "./portfolio";
import Resume from "./resume";
import Wow from "wow.js";

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.about = React.createRef();
        this.Portfolio = React.createRef();
        this.Contact = React.createRef();

        this.scrolling = this.scrolling.bind(this);
    }

    componentDidMount() {
        new Wow.Wow().init();
    }

    navEffect() {
        window.addEventListener("scroll", () => {
            var navBar = document.getElementById("navbar");
            var 
        })
    }
}

export default Nav;