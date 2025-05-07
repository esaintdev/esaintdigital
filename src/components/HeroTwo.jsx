import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const HeroTwo = () => {
  return (
    <div
      className="hero-wrapper hero-2"
      id="hero"
      style={{ backgroundImage: "url(assets/img/hero/hero_bg_2_1.png)" }}
    >
      <div
        className="hero-overlay"
        style={{ backgroundImage: "url(assets/img/hero/hero_overlay_1.png)" }}
      >
        {" "}
      </div>

      <div className="container">
        <div className="hero-style2">
          <h1 className="hero-title text-white">
            Empowering<span className="hero-title2">businesses</span> brighter
          </h1>
          <p className="hero-text text-white">
            We have been operating for over a decade, providing top-notch
            services to our clients and building strong track reco industry been
            operating
          </p>
          <div className="btn-group">
            <Link to="/about" className="global-btn">
              Explore More
              <img src="assets/img/icon/right-icon.svg" alt="Gohub" />
            </Link>
            <div className="media-wrap">
              <div className="icon">
                <Link
                  to="/https://www.youtube.com/watch?v=P7fi4hP_y80"
                  className="play-btn popup-video"
                >
                  <i className="fas fa-solid fa-play" />{" "}
                </Link>
              </div>
              <div className="media-body">
                <h6 className="title text-white">See How It Works</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-client-box">
          <div className="client-thumb">
            <div className="client-thumb-group">
              <div className="thumb">
                <img src="assets/img/client/client-img-2-1.png" alt="avater" />
              </div>
              <div className="thumb">
                <img src="assets/img/client/client-img-2-2.png" alt="avater" />
              </div>
              <div className="thumb">
                <img src="assets/img/client/client-img-2-3.png" alt="avater" />
              </div>
            </div>
            <div className="client-box-content">
              <div className="client-box_wrapp">
                <h4 className="cilent-box_counter">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className="counter-number">
                          <CountUp delay={0} start={0} end={642} />
                          k+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h4>
                <i className="fas fa-check" />
              </div>
              <span className="cilent-box_title">
                Author Reviews <span className="text-theme">(4.8 of 5)</span>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
