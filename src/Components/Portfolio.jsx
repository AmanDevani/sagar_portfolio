import React from "react";
import "./style.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import YogaWork from "../images/Yoga.jpg";
import WebDesign from "../images/WebDesign.jpg";
import Business from "../images/Business.jpg";
import Broucher from "../images/Broucher.jpg";
const Portfolio = () => {
  return (
    <>
      <main>
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <div className="portfolio">
            <header>
              <h2 className="h2 article-title">Portfolio</h2>
            </header>

            <section className="projects">
              <ul className="project-list">
                <li
                  className="project-item active"
                  data-filter-item
                  data-category="web development"
                >
                  <Link to="">
                    <figure className="project-img">
                      <img src={YogaWork} alt="finance" loading="lazy" />
                    </figure>

                    <h3 className="project-title">Yoga Website</h3>

                    <p className="project-category">Web Design</p>
                  </Link>
                </li>

                <li
                  className="project-item active"
                  data-filter-item
                  data-category="web development"
                >
                  <Link to="#">
                    <figure className="project-img">
                      <img src={WebDesign} alt="orizon" loading="lazy" />
                    </figure>

                    <h3 className="project-title">Code Website Design</h3>

                    <p className="project-category">Web development</p>
                  </Link>
                </li>

                <li
                  className="project-item active"
                  data-filter-item
                  data-category="web design"
                >
                  <Link to="#">
                    <figure className="project-img">
                      <img src={Business} alt="fundo" loading="lazy" />
                    </figure>

                    <h3 className="project-title">Business</h3>

                    <p className="project-category">Web Design</p>
                  </Link>
                </li>

                <li
                  className="project-item active"
                  data-filter-item
                  data-category="applications"
                >
                  <Link to="#">
                    <figure className="project-img">
                      <img src={Broucher} alt="brawlhalla" loading="lazy" />
                    </figure>

                    <h3 className="project-title">Broucher Design</h3>

                    <p className="project-category">Design</p>
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Portfolio;
