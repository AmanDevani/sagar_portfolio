import React from "react";
import "./style.css";
import avatar from "../images/my-avatar.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside className="sidebar" data-sidebar>
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img src={avatar} alt="Richard hanrick" width="80" />
          </figure>

          <div className="info-content">
            <h1 className="name" title="Richard hanrick">
              Sagar Rakholiya
            </h1>

            <p className="title">Graphics Designer</p>
          </div>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
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

          <div className="separator"></div>

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
      </aside>
    </>
  );
};

export default Sidebar;
