import React from "react";

import { Carousel } from "react-responsive-carousel";
import photo1 from "../../assets/images/mulan.png";
import photo2 from "../../assets/images/raya.png";
import photo3 from "../../assets/images/unidos.png";
import "./hero.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Hero = () => {
  return (
    <Carousel>
      <div className="caorusel-container">
        <img src={photo1} alt="foto de mulan" />
        <button className="btn button-hero position">
          <span>VER AHORA</span>
        </button>
      </div>
      <div>
        <img src={photo2} alt="foto de raya" />
        <button className="btn button-hero position">
          <span>VER AHORA</span>
        </button>
      </div>
      <div>
        <img src={photo3} alt="foto de unidos" />
        <button className="btn button-hero position">
          <span>VER AHORA</span>
        </button>
      </div>
    </Carousel>
  );
};

export default Hero;
