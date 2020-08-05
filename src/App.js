import React, { Component } from "react";
import Header from "./components/header";
import About from "./components/about";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Footer from "./components/footer";
import resumeInfo from "./resumeInfo";

class App extends Component {
  render() {
// function App() {
    return (
      <div className="App">
        <Header />
        <About resumeData={resumeInfo} />
        <Resume resumeData={resumeInfo} />
        <Portfolio resumeData={resumeInfo} />
        <Contact resumeData={resumeInfo} />
        <Footer />
      </div>
    );
  }
}

export default App;