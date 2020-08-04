import React, { Component } from "react";
// import pswd_gen from "../../public/images";

export default class Porfolio extends Component {
  render() {
    let resumeInfo = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Projects</h1>
            <div id="wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {resumeInfo.portfolio &&
                resumeInfo.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <img src={`${item.imgurl}`} className="item-img" alt="" height="175px"/>
                        <a href={`${item.url}`}>
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{`${item.name}`}</h5>
                            </div>
                          </div>
                        </a>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}