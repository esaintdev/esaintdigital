import React from "react";
import { Link } from "react-router-dom";

const AboutFive = () => {
  return (
    <section className="bg-dark2">
      <div className="about-area-5 space-bottom">
        <div className="shadow-shape-left" />
        <div className="container">
          <div className="row gy-40 gx-60 align-items-center justify-content-between">
            <div className="col-xl-5">
              <div className="about-thumb5">
                <div className="img1">
                  <img src="assets/img/normal/about_5-1.png" alt="img" />
                </div>
                <div className="about-counter-wrap jump-reverse">
                  <h3 className="about-counter">
                    <span className="counter-number">500</span>+
                  </h3>
                  <p className="sec-desc">Client Review</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="title-area mb-40">
                <span className="sub-title style2">
                  <img src="assets/img/icon/title_left2.svg" alt="shape" />
                  About Us
                </span>
                <h2 className="sec-title style2 text-white">
                  Maximizing Through the Strategic
                </h2>
                <p className="sec-text text-white mb-30">
                  At GoHub, design isn’t just what we do — it’s how we
                  communicate. We're a creative agency driven by purpose,
                  specializing in visually powerful solutions that help brands
                  stand out and connect with their audience.
                </p>
                <p className="sec-text text-white">
                  From social content to full brand identity systems, we
                  approach every project with strategy, originality, and
                  passion.
                </p>
              </div>
              <div className="btn-wrap">
                <Link to="/about" className="global-btn style3">
                  Explore More <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFive;
