import React, { useState } from "react";
import Header from "./components/header";
import About from "./components/about";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Footer from "./components/footer";
// import resumeInfo from "./resumeInfo";
import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Header resumeData={resumeInfo} />
//         <About resumeData={resumeInfo} />
//         <Resume resumeData={resumeInfo} />
//         <Portfolio resumeData={resumeInfo} />
//         <Contact resumeData={resumeInfo} />
//         <Footer resumeData={resumeInfo} />
//       </div>
//     );
//   }
// }

// export default App;

function App() {
  const [ResumeSelected, setResumeSelected] = useState(false);
  const [ContactSelected, setContactSelected] = useState(false);
  const [PortfolioSelected, setPortfolioSelected] = useState(false);
  const [AboutSelected, setAboutSelected] = useState(true);

  return (
    <div>
      <Header
        ResumeSelected={ResumeSelected}
        setResumeSelected={setResumeSelected}
        ContactSelected={ContactSelected}
        setContactSelected={setContactSelected}
        PortfolioSelected={PortfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        AboutSelected={AboutSelected}
        setAboutSelected={setAboutSelected}
      ></Header>

      <main>
        <div>
          {!AboutSelected ? <></> : <About></About>}
          {!PortfolioSelected ? <></> : <Portfolio></Portfolio>}

          {!ContactSelected ? <></> : <Contact></Contact>}

          {!ResumeSelected ? <></> : <Resume></Resume>}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
