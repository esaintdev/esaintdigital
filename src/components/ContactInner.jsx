import React from 'react'
import { Link } from 'react-router-dom'

const ContactInner = () => {
    return (
        <>
            <div className="map-sec">
                <iframe
                    src="https://maps.google.com/maps?width=858&amp;height=424&amp;hl=en&amp;q=15 Ekpenyong Street Uyo&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    allowFullScreen=""
                    loading="lazy"
                    title='Bizmaster'
                />
            </div>
            <div className="contact-area space">
                <div className="container">
                    <div className="contact-page-wrap bg-theme">
                        <div className="row gy-40 align-items-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="contact-info">
                                    <div className="contact-info_icon">
                                        <i className="fas fa-phone-alt" />
                                    </div>
                                    <div className="contact-info_details">
                                        <h6 className="contact-info_title">Phone</h6>
                                        <p className="contact-info_text">
                                            <Link to="/tel:+2348121855275">+234 8121 855 275</Link>{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="contact-info">
                                    <div className="contact-info_icon">
                                        <i className="fas fa-map-marker-alt" />
                                    </div>
                                    <div className="contact-info_details">
                                        <h6 className="contact-info_title">Location</h6>
                                        <p className="contact-info_text">
                                            15, Ekpenyong Street, Uyo, Nigeria
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="contact-info">
                                    <div className="contact-info_icon">
                                        <i className="fas fa-envelope" />
                                    </div>
                                    <div className="contact-info_details">
                                        <h6 className="contact-info_title">Email</h6>
                                        <p className="contact-info_text">
                                            <Link to="/mailto:esaint.designer@gmail.com">esaint.designer@gmail.com</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-bottom">
                <div className="container">
                    <div className="row gy-40 justify-content-between">
                        <div className="col-lg-4">
                            <div className="title-area mb-0">
                                <span className="sub-title">
                                    <img src="assets/img/icon/title_left.svg" alt="shape" />
                                    Contact Us
                                </span>
                                <h2 className="sec-title style2">Get In Touch</h2>
                                <p className="mb-40">
                                    Design is this a broad category encompasses various technological
                                    solutions{" "}
                                </p>
                                <div className="social-btn style4">
                                    <Link to="/https://facebook.com/" tabIndex={-1}>
                                        <i className="fab fa-facebook-f" />
                                    </Link>
                                    <Link to="/https://linkedin.com/" tabIndex={-1}>
                                        <i className="fab fa-linkedin-in" />
                                    </Link>
                                    <Link to="/https://twitter.com/" tabIndex={-1}>
                                        <i className="fab fa-twitter" />
                                    </Link>
                                    <Link to="/https://www.instagram.com/" tabIndex={-1}>
                                        <i className="fab fa-instagram" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-8">
                            <div className="contact-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="form-control style-border"
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            placeholder="Your Email"
                                            className="form-control style-border"
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            placeholder="Phone Number"
                                            className="form-control style-border"
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <select
                                            name="subject"
                                            id="subject"
                                            className="form-select style-border"
                                        >
                                            <option defaultValue={1}>
                                                Subject
                                            </option>
                                            <option value={1}>Subject 01</option>
                                            <option value={2}>Subject 02</option>
                                            <option value={3}>Subject 03</option>
                                        </select>
                                        <i className="fas fa-angle-down" />
                                    </div>
                                    <div className="col-12 form-group">
                                        <textarea
                                            placeholder="Message here.."
                                            className="form-control style-border"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="col-12 form-group mb-0">
                                        <button className="global-btn w-100">
                                            Send Now
                                            <img src="assets/img/icon/right-icon.svg" alt="Bizmaster" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ContactInner