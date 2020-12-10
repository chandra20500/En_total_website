import React from "react";
import Home from "./home.js";
import Slide from "./testimonials.js";
import "./testimonials.css";
import Cources from "./cource.js";
import Footer from "./footer";

export default function App() {
  return (
    <div className="App">
        <Home />
      <div className="parentSlideShow">
        <Slide />
      </div>
      <br />
      <div className="cources">
        <Cources />
      </div>
      <br />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}