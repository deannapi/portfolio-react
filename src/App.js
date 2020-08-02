import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About';
import ContactForm from './components/Contact';

function App() {
  return (
    <div>
      <main>
        <About></About>
        <ContactForm></ContactForm>
      </main>
    </div>
  );
}

export default App;
