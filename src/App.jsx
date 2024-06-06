/**
 * Application 
 * Aggregate components
 *  
 */

import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


export default function App(){
  return (
    <div className="content">
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
