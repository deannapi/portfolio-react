import React, { useState } from "react";
import "./App.css";
import Nav from "./components/nav";
import About from "./components/about";
import ContactForm from "./components/contact";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    { repos: "repos", description: "My applications and repositories." },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
