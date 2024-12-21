import React from 'react';
import "./Contact.css"

function Contact() {
  return (
<main className='main-aboutpage'>
  <div
    data-elementor-type="wp-page"
    data-elementor-id={1560}
    className="elementor elementor-1560"
  >
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-89e5b50 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="89e5b50"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-no">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-80b8439"
          data-id="80b8439"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-aa1b3d3 elementor-widget__width-initial elementor-widget elementor-widget-gridxdacontactinfobox"
              data-id="aa1b3d3"
              data-element_type="widget"
              data-widget_type="gridxdacontactinfobox.default"
            >
              <div className="elementor-widget-container">
                {/* Start Contact  Box
  ============================================= */}
                {/* Contact */}
                <section className="contact-area">
                  <div className="container">
                    <div className="gx-row d-flex justify-content-between gap-24">
                      <div className="contact-infos">
                        <h4 data-aos="fade-up">Contact Info</h4>
                        <ul className="contact-details">
                          <li
                            className="d-flex align-items-center"
                            data-aos="zoom-in"
                          >
                            <div className="icon-box shadow-box">
                              <i className="iconoir-mail" />
                            </div>
                            <div className="right">
                              <span>MAIL US</span>
                              <h5>nikhilshetty2023@gmail.com</h5>
                              <h5>nikhil.a@zoninnovative.com</h5>
                            </div>
                          </li>
                          <li
                            className="d-flex align-items-center"
                            data-aos="zoom-in"
                          >
                            <div className="icon-box shadow-box">
                              <i className="iconoir-phone" />
                            </div>
                            <div className="right">
                              <span>Contact Us</span>
                              <h5>+91 7095340712</h5>
                              <h5>+91 7095340712 </h5>
                            </div>
                          </li>
                          <li
                            className="d-flex align-items-center"
                            data-aos="zoom-in"
                          >
                            <div className="icon-box shadow-box">
                              <i className="iconoir-pin-alt" />
                            </div>
                            <div className="right">
                              <span>Location</span>
                              <h5> Shadnagar, Hyderabad</h5>
                              <h5>India, 509216</h5>
                            </div>
                          </li>
                        </ul>
                        <h4>Social Info</h4>
                        <ul className="social-links d-flex align-center">
                          <li>
                            <a
                              target="_blank"
                              className="shadow-box"
                              href="https://www.linkedin.com/in/nikhil-ageeru/"
                            >
                              <i className="iconoir-linkedin" />
                            </a>
                          </li>
                          <li>
                            <a target="_blank" className="shadow-box">
                              <i className="iconoir-twitter" />
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              className="shadow-box"
                              href="https://www.instagram.com/nikhilshetty_12/"
                            >
                              <i className="iconoir-instagram" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div data-aos="zoom-in" className="contact-form">
                        <div className="shadow-box">
                          <img
                            decoding="async"
                            src="../wp-content/themes/gridx/assets/images/bg1.png"
                            alt="BG"
                            className="bg-img"
                          />
                          <img
                            decoding="async"
                            src="../wp-content/themes/gridx/assets/images/icon2.png"
                            alt="Star"
                            className="star-icon"
                          />
                          <h2>
                            Let’s work <span>together.</span>
                          </h2>
                          <div
                            className="wpcf7 no-js"
                            id="wpcf7-f1777-p1560-o1"
                            lang="en-US"
                            dir="ltr"
                          >
                            <div className="screen-reader-response">
                              <p
                                role="status"
                                aria-live="polite"
                                aria-atomic="true"
                              ></p>
                              <ul />
                            </div>
                            <form
                              method="post"
                              className="wpcf7-form init"
                              aria-label="Contact form"
                              data-status="init"
                            >
                              {/* <div class="alert alert-success messenger-box-contact__msg"
                          style="display: block" role="alert">
                          <p>Your message was sent successfully.
                          </p>
                        </div> */}
                              
                              <div className="input-group">
                                <p>
                                  <span
                                    className="wpcf7-form-control-wrap"
                                    data-name="full-name"
                                  >
                                    <input
                                      size={140}
                                      maxLength={400}
                                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required input-group"
                                      id="full-name"
                                      aria-required="true"
                                      aria-invalid="false"
                                      placeholder="Name *"
                                      defaultValue=""
                                      type="text"
                                      name="full-name"
                                    />
                                  </span>
                                </p>
                              </div>
                              <div className="input-group">
                                <p>
                                  <span
                                    className="wpcf7-form-control-wrap"
                                    data-name="email"
                                  >
                                    <input
                                      size={140}
                                      maxLength={400}
                                      className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email input-group"
                                      id="email"
                                      aria-required="true"
                                      aria-invalid="false"
                                      placeholder="Email *"
                                      defaultValue=""
                                      type="email"
                                      name="email"
                                    />
                                  </span>
                                </p>
                              </div>
                              <div className="input-group">
                                <p>
                                  <span
                                    className="wpcf7-form-control-wrap"
                                    data-name="subject"
                                  >
                                    <input
                                      size={140}
                                      maxLength={400}
                                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required input-group"
                                      id="subject"
                                      aria-required="true"
                                      aria-invalid="false"
                                      placeholder="Your Subject *"
                                      defaultValue=""
                                      type="text"
                                      name="subject"
                                    />
                                  </span>
                                </p>
                              </div>
                              <div className="input-group">
                                <p>
                                  <span
                                    className="wpcf7-form-control-wrap"
                                    data-name="message"
                                  >
                                    <textarea
                                      cols={40}
                                      rows={10}
                                      maxLength={2000}
                                      className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required input-group"
                                      id="message"
                                      aria-required="true"
                                      aria-invalid="false"
                                      placeholder="Your Message *"
                                      name="message"
                                      defaultValue={""}
                                    />
                                  </span>
                                </p>
                              </div>
                              <div className="input-group">
                                <p>
                                  <button
                                    className="theme-btn submit-btn"
                                    type="submit"
                                    name="submit"
                                    id="submit"
                                  >
                                    Send Message
                                  </button>
                                </p>
                              </div>
                              <div
                                className="wpcf7-response-output"
                                aria-hidden="true"
                              ></div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</main>


  )
}

export default Contact
