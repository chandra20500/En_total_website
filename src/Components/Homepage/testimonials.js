import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./testimonials.css";

const fadeImages = [
  "https://www.allen.ac.in/slider/images/asat-2021-22.jpg",
  "https://www.allen.ac.in/slider/images/kvpy2020-6dec.jpg",
  "https://www.allen.ac.in/slider/images/tallentex-2021-stage-I-result.jpg"
];

export default function App() {
  return (
    <div className="slideShow">
      <Fade>
        <div>
          <img src={fadeImages[0]} style={{ width: "100%" }} />
        </div>
        <div>
          <img src={fadeImages[1]} style={{ width: "100%" }} />
        </div>
        <div>
          <img src={fadeImages[2]} style={{ width: "100%" }} />
        </div>
      </Fade>
    </div>
  );
}