import React, { Component } from "react";
import Header from "./components/header";
import About from "./components/about";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
// import Nav from "./components/nav";
import Footer from "./components/footer";
import resumeInfo from "./resumeInfo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeInfo={resumeInfo} />
        <About resumeInfo={resumeInfo} />
        <Resume resumeInfo={resumeInfo} />
        <Portfolio resumeInfo={resumeInfo} />
        <Contact resumeInfo={resumeInfo} />
        <Footer resumeInfo={resumeInfo} />
      </div>
    );
  }
}

export default App;
