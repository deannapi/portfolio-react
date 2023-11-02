import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";
import Home from "./components/home";
import Header from "./components/header";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";
import "./App.css";

const Links = () => (
  <>
    <Link to="/" className="links">Home</Link>
    <Link to="/portfolio" className="links">Portfolio</Link>
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
                <Route exact path="/portfolio" component={Portfolio} />
              </Switch>
            </PageTransition>
          );
        }}
      />
      <Footer></Footer>
    </BrowserRouter>
  );
}
