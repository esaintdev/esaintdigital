import React from 'react'
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
const MarqueeFour = () => {
    return (
        <section className='bg-dark2'>
            <div className="marquee-area bg-theme">
                <div className="container-fluid p-0 overflow-hidden">
                    <div className="slider__marquee style2">
                        <div className="marquee_mode">
                            <Marquee speed={100}>
                                <div className="item">
                                    <Link to="#">
                                        <img src="assets/img/icon/marquee-icon-1-2.svg" alt="img" />
                                        <span className="text-stroke">Breaking Barriers</span>
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link to="#">
                                        <img src="assets/img/icon/marquee-icon-1-1.svg" alt="img" />
                                        <span>Constructing Excellence</span>
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link to="#">
                                        <img src="assets/img/icon/marquee-icon-1-2.svg" alt="img" />
                                        <span className="text-stroke">Breaking Barriers</span>
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link to="#">
                                        <img src="assets/img/icon/marquee-icon-1-1.svg" alt="img" />
                                        <span>Constructing Excellence </span>
                                    </Link>
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default MarqueeFour