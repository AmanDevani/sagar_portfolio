import React from "react";
import "./style.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Resume = () => {
  return (
    <>
      <main>
        <Sidebar />
        <div className="main-content">
          <Navbar />

          <div className="resume">
            <header>
              <h2 className="h2 article-title">Resume</h2>
            </header>

            <section className="timeline">
              <div className="title-wrapper">
                <div className="icon-box">
                  <ion-icon name="book-outline"></ion-icon>
                </div>

                <h3 className="h3">Education</h3>
              </div>

              <ol className="timeline-list">
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">C.J. Patel College</h4>

                  <span>2017 — 2020</span>
                </li>

                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">M.N.J. High School</h4>

                  <span>2016 — 2017</span>
                </li>

                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">B.S.V. High School</h4>

                  <span>2014 — 2015</span>
                </li>
              </ol>
            </section>
            <section className="timeline">
              <div className="title-wrapper">
                <div className="icon-box">
                  <ion-icon name="book-outline"></ion-icon>
                </div>

                <h3 className="h3">Experience</h3>
              </div>

              <ol className="timeline-list">
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">
                    UI/Ux & Graphics Designer
                  </h4>

                  <span>1 Year</span>

                  <p className="timeline-text">Cruxtab Technologies</p>
                </li>

                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">
                    UI/Ux & Graphics Designer
                  </h4>

                  <span>6 Months</span>

                  <p className="timeline-text">Synkrama Technologies</p>
                </li>
              </ol>
            </section>
            <section className="skill">
              <h3 className="h3 skills-title">My skills</h3>

              <ul className="skills-list content-card">
                <li className="skills-item">
                  <div className="title-wrapper">
                    <h5 className="h5">Adobe Photoshop</h5>
                    <data value="95">95%</data>
                  </div>

                  <div className="skill-progress-bg">
                    <div
                      className="skill-progress-fill"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </li>

                <li className="skills-item">
                  <div className="title-wrapper">
                    <h5 className="h5">Adobe Illustrator</h5>
                    <data value="80">80%</data>
                  </div>

                  <div className="skill-progress-bg">
                    <div
                      className="skill-progress-fill"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </li>

                <li className="skills-item">
                  <div className="title-wrapper">
                    <h5 className="h5">Adobe XD</h5>
                    <data value="85">85%</data>
                  </div>

                  <div className="skill-progress-bg">
                    <div
                      className="skill-progress-fill"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </li>

                <li className="skills-item">
                  <div className="title-wrapper">
                    <h5 className="h5">Figma</h5>
                    <data value="90">90%</data>
                  </div>

                  <div className="skill-progress-bg">
                    <div
                      className="skill-progress-fill"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </li>
                <li className="skills-item">
                  <div className="title-wrapper">
                    <h5 className="h5">After Effect</h5>
                    <data value="60">60%</data>
                  </div>

                  <div className="skill-progress-bg">
                    <div
                      className="skill-progress-fill"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Resume;
