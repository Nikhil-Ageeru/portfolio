import React, { useRef, useState } from "react";

import emailjs from '@emailjs/browser';

import "./Contact.css"

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);


  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true when the form is submitted
  
    try {
      await emailjs.sendForm(
        "service_ll53tzu", // Replace with your EmailJS Service ID
        "template_hgupfvy", // Replace with your EmailJS Template ID
        form.current,
        "rzWtH2SXQTeDmzq7N" // Replace with your EmailJS Public Key
      );
      console.log("Email sent successfully.");
      alert("Your message has been sent successfully!");
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Oops! Something went wrong. Please try again.");
    } finally {
      setLoading(false); // Reset loading state
    }
    
    e.target.reset();
  };



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
                        <div className="gx-row d-flex justify-content-between gap-5">
                          <div className="contact-infos">
                            <h4 data-aos="fade-up">Contact Info</h4>
                            <ul className="contact-details ps-0">
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
                                  <h5>+91 70 953 40 712</h5>
                                  <h5>+91 79 815 40 257 </h5>
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
                                <a href='https://github.com/Nikhil-Ageeru' target="_blank" className="shadow-box">
                                  <i className="iconoir-github" />
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
                                  ref={form}
                                  className="wpcf7-form init"
                                  aria-label="Contact form"
                                  data-status="init"
                                  onSubmit={sendEmail}
                                >
                                  <div className="input-group">
                                    <p>
                                      <span className="wpcf7-form-control-wrap" >
                                        <input
                                          size={140}
                                          maxLength={400}
                                          className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required input-group"
                                          id="user_name"
                                          aria-required="true"
                                          aria-invalid="false"
                                          placeholder="Name *"
                                          type="text"
                                          name="user_name"
                                          required
                                        />
                                      </span>
                                    </p>
                                  </div>
                                  <div className="input-group">
                                    <p>
                                      <span className="wpcf7-form-control-wrap" >
                                        <input
                                          size={140}
                                          maxLength={400}
                                          className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email input-group"
                                          id="user_email"
                                          aria-required="true"
                                          aria-invalid="false"
                                          placeholder="Email *"
                                          type="email"
                                          name="user_email"
                                          required
                                        />
                                      </span>
                                    </p>
                                  </div>
                                  <div className="input-group">
                                    <p>
                                      <span className="wpcf7-form-control-wrap" data-name="message">
                                        <textarea
                                          cols={140}
                                          rows={10}
                                          maxLength={2000}
                                          className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required input-group"
                                          id="message"
                                          aria-required="true"
                                          aria-invalid="false"
                                          placeholder="Your Message *"
                                          name="message"
                                          required
                                        />
                                      </span>
                                    </p>
                                  </div>
                                  <div className="input-group">
                                    <p>
                                      <button
                                        className="theme-btn submit-btn"
                                        type="submit"
                                        id="submit"
                                        disabled={loading} // Disable button when loading
                                      >
                                        {loading ? "Sending..." : "Send Message"}
                                      </button>
                                    </p>
                                  </div>

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
