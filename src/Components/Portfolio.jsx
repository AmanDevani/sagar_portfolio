import React from "react";
import "./style.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import YogaWork from "../images/Yoga.jpg";
import WebDesign from "../images/WebDesign.jpg";
import Business from "../images/Business.jpg";
import Broucher from "../images/Broucher.jpg";
import Mens from "../images/mens.png";
import Ladies from "../images/ladies.jpeg";
import Musico from "../images/musico.png";
import News from "../images/news.jpg";

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
                  <Link
                    to="https://www.figma.com/file/NjQl63KhTaMzGDBQi1ODNA/Musico?type=design&node-id=0-1&mode=design&t=liUwKFoNbrabQT8T-0"
                    target="_blank"
                  >
                    <figure className="project-img">
                      <img src={Musico} alt="finance" loading="lazy" />
                    </figure>

                    <h3 className="project-title">Musico</h3>

                    <p className="project-category">App Design</p>
                  </Link>
                </li>

                <li
                  className="project-item active"
                  data-filter-item
                  data-category="web development"
                >
                  <Link
                    to="https://www.figma.com/file/YuxfeXXgD0W7ky20qxJUWw/Yoga?type=design&node-id=0-1&mode=design&t=4xtjtVn0nkJy7819-0"
                    target="_blank"
                  >
                    <figure className="project-img">
                      <img src={YogaWork} alt="finance" loading="lazy" />
                    </figure>

                    <h3 className="project-title">Yoga App</h3>

                    <p className="project-category">App Design</p>
                  </Link>
                </li>

                <li
                  className="project-item active"
                  data-filter-item
                  data-category="web development"
                >
                  <Link
                    to="https://www.figma.com/file/Zhs0tHsUZKg7pg2rCvZVis/News?type=design&node-id=0-1&mode=design&t=ho39u7vsbBCRAFFm-0"
                    target="_blank"
                  >
                    <figure className="project-img">
                      <img src={News} alt="finance" loading="lazy" />
                    </figure>

                    <h3 className="project-title">News APP</h3>

                    <p className="project-category">App Design</p>
                  </Link>
                </li>

                <li
                  className="project-item active"
                  data-filter-item
                  data-category="applications"
                >
                  <Link to="https://www.gustoyoung.com/" target="_blank">
                    <figure className="project-img">
                      <img src={Mens} alt="men" loading="lazy" />
                    </figure>

                    <h3 className="project-title">Men's Wear Design</h3>

                    <p className="project-category">Web Design</p>
                  </Link>
                </li>

                <li
                  className="project-item active"
                  data-filter-item
                  data-category="applications"
                >
                  <Link to="https://gusto-village.com/" target="_blank">
                    <figure className="project-img">
                      <img src={Ladies} alt="ladies" loading="lazy" />
                    </figure>

                    <h3 className="project-title">Ladie's Wear Design</h3>

                    <p className="project-category">Web Design</p>
                  </Link>
                </li>

                <li
                  className="project-item active"
                  data-filter-item
                  data-category="web Development"
                >
                  <Link to="#" target="_blank">
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
                  <Link to="#" target="_blank">
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
                  <Link to="#" target="_blank">
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
