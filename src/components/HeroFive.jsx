import React from "react";

const HeroFive = () => {
  return (
    <section className="bg-dark2">
      <div
        className="hero-wrapper hero-5"
        id="hero"
        style={{ backgroundImage: "url(assets/img/hero/hero_bg_5_1.png)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="hero-style5 text-center">
                <h1 className="hero-title text-white">
                  Designs That Speak Louder Than Words{" "}
                  <span className="text-theme2">Business</span> Landscape
                </h1>
                <p className="hero-text text-white">
                  Custom visuals crafted to elevate your brand — book a session
                  or order your next masterpiece today.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="hero-thumb5-1">
                <img src="assets/img/service/service-5-6.jpg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroFive;
