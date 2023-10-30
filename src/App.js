import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
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
    {/* <Link to="/resume" className="links">Resume</Link> */}
    <Link to="/portfolio" className="links">Portfolio</Link>
    {/* <Link to="/contact" className="links">Contact</Link> */}
  </>
);

export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
