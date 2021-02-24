import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";
import Home from "./components/home";
import Header from "./components/header";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Footer from "./components/footer";
import "./App.css";

const Links = () => (
  <>
    <Link to="/" className="links">Home</Link>
    <Link to="/resume" className="links">Resume</Link>
    <Link to="/portfolio" className="links">Portfolio</Link>
    <Link to="/contact" className="links">Contact</Link>
  </>
);

// const Home = (props) => <h1>Home</h1>;
// const Resume = (props) => <h1>Resume</h1>;
// const Portfolio = (props) => <h1>Portfolio</h1>;
// const Contact = (props) => <h1>Contact</h1>;

export default function App() {
  return (
    <Router>
      <Header></Header>
      <Links />
      <Route
        render={({ location }) => {
          return (
            <PageTransition
              preset="cubeToLeft"
              transitionKey={location.pathname}
            >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </PageTransition>
          );
        }}
      />
      <Footer></Footer>
    </Router>
  );
}
