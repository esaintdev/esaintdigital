import React from 'react'
import { Link } from 'react-router-dom'

const HeroFour = () => {
    return (
        <div
            className="hero-wrapper hero-4"
            id="hero"
            style={{ backgroundImage: "url(assets/img/hero/hero_bg_4_1.png)" }}
        >
            <div className="hero-thumb4-1">
                <img src="assets/img/hero/hero_thumb_4_1.png" alt="img" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="hero-style4">
                            <h1 className="hero-title text-white">
                                Empowering Your Business{" "}
                                <span className="text-theme2">Success</span>
                            </h1>
                            <p className="hero-text">
                                A business is an organization engaged in the production, sale, or
                                provision of goods and services to meet A business is an
                                organization engaged in the production
                            </p>
                            <div className="btn-wrap">
                                <Link to="/about" className="global-btn style-border3">
                                    Learn More <i className="fas fa-arrow-right ms-2" />
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HeroFour