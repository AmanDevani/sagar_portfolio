import React from "react";
import "./style.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useForm } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mdorgbjv");
  if (state.succeeded) {
    window.location.href = "/";
  }
  return (
    <>
      <main>
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <div className="contact">
            <header>
              <h2 className="h2 article-title">Contact</h2>
            </header>

            <div className="separator"></div>
            <div className="contact__info">
              <div className="sidebar-information_more flex">
                <div className="email">
                  <ul className="contacts-list ">
                    <li className="contact-item">
                      <div className="icon-box">
                        <ion-icon name="mail-outline"></ion-icon>
                      </div>

                      <div className="contact-info">
                        <p className="contact-title">Email</p>

                        <Link
                          to="mailto:sagarrakholiya101@gmail.com"
                          className="contact-link"
                        >
                          sagarrakholiya101@gmail.com
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="phone">
                  <ul className="contacts-list ">
                    <li className="contact-item">
                      <div className="icon-box">
                        <ion-icon name="phone-portrait-outline"></ion-icon>
                      </div>

                      <div className="contact-info">
                        <p className="contact-title">Phone</p>

                        <Link
                          to="https://api.whatsapp.com/send?phone=9624787923&text=Hello"
                          className="contact-link"
                        >
                          +91 96247 87923
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="location">
                  <ul className="contacts-list ">
                    <li className="contact-item">
                      <div className="icon-box">
                        <ion-icon name="location-outline"></ion-icon>
                      </div>

                      <div className="contact-info">
                        <p className="contact-title">Location</p>

                        <address>Surat, Gujrat, India</address>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="social__contact">
                <ul className="social-list">
                  <li className="social-item">
                    <Link
                      to="https://www.linkedin.com/in/sagar-rakholiya-419334244"
                      className="social-link"
                      target="_blank"
                    >
                      <ion-icon name="logo-linkedin"></ion-icon>
                    </Link>
                  </li>

                  <li className="social-item">
                    <Link
                      to="https://www.instagram.com/sagar_rakholiya_2101/"
                      className="social-link"
                      target="_blank"
                    >
                      <ion-icon name="logo-instagram"></ion-icon>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <section className="mapbox" data-mapbox>
              <figure>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238132.67288558374!2d72.65748014718348!3d21.15944056849058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1692979092816!5m2!1sen!2sin"
                  width="400"
                  height="300"
                  title="Surat"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </figure>
            </section>

            <section className="contact-form">
              <h3 className="h3 form-title">Contact Form</h3>

              <form className="form" onSubmit={handleSubmit}>
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-input"
                    required
                    placeholder="Enter your name"
                    minLength={3}
                  />

                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-input"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <textarea
                  minLength={3}
                  name="message"
                  id="message"
                  className="form-input"
                  placeholder="Write your Message"
                  required
                ></textarea>

                <button className="form-btn" type="submit">
                  <ion-icon name="paper-plane"></ion-icon>
                  <span>Send Message</span>
                </button>
              </form>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
