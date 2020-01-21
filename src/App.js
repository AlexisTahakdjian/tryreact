import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import logo from './logo.svg';
import './App.css';

function App(children) {
  return (
    <div className="App">
      <Header/>
      <div>
        {children}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
