import React from "react";
import "./style.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import design from "../images/icon-design.svg";
import webdev from "../images/icon-dev.svg";

const Home = () => {
  return (
    <>
      <main>
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <article className="about active" data-page="about">
            <header>
              <h2 className="h2 article-title">About me</h2>
            </header>

            <section className="about-text">
              <p>
                I'm Creative Director and UI/UX Designer and Graphics Designer
                from Surat, Gujrat, India, working in web development and print
                media. I enjoy turning complex problems into simple, beautiful
                and intuitive designs.
              </p>

              <p>
                My job is to build your website so that it is functional and
                user-friendly but at the same time attractive. Moreover, I add
                personal touch to your product and make sure that is
                eye-catching and easy to use. My aim is to bring across your
                message and identity in the most creative way. I created web
                design for many famous brand companies.
              </p>
            </section>

            <section className="service">
              <h3 className="h3 service-title">What i'm doing</h3>

              <ul className="service-list">
                <li className="service-item">
                  <div className="service-icon-box">
                    <img src={design} alt="design icon" width="40" />
                  </div>

                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">Web design</h4>

                    <p className="service-item-text">
                      The most modern and high-quality design made at a
                      professional level.
                    </p>
                  </div>
                </li>

                <li className="service-item">
                  <div className="service-icon-box">
                    <img src={webdev} alt="Web development icon" width="40" />
                  </div>

                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">Web development</h4>

                    <p className="service-item-text">
                      High-quality development of sites at the professional
                      level.
                    </p>
                  </div>
                </li>

                <li className="service-item">
                  <div className="service-icon-box">
                    <img src={design} alt="mobile app icon" width="40" />
                  </div>

                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">
                      Graphics Designing
                    </h4>

                    <p className="service-item-text">
                      Professional Graphics Designing for all Platforms.
                    </p>
                  </div>
                </li>
              </ul>
            </section>
          </article>
        </div>
      </main>
    </>
  );
};

export default Home;
