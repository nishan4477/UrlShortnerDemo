import React from "react";
import "./HeroBanner.scss";
import bannerImg from "../../assets/images/illustration-working.svg"

const HeroBanner = () => {
  const heroData = {
    title: "More than just shorter links",
    description:
      "Build your brand's recognition and get detailed insights on how you link your performing.",
  };

  return (
    <div className="hero__banner__container">
      <div className="container__main">
        <div className="hero__banner__wrapper">
          <div className="banner__content__wrapper">
            <h1 className="title__main">{heroData.title}</h1>
            <p className="description__main">{heroData.description}</p>

            <div className="btn__main">Get Started</div>
          </div>
          <div className="banner__image__wrapper">
            <img src={bannerImg} alt="" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
