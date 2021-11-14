import React from 'react';
import { BrowserRouter } from "react-router-dom";

import './App.css';
import Router from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header/>
      <br/>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <br/>
      <Footer/>
    </>
  );
}

export default App;
