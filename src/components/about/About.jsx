import React from "react";
import Header from "../header/Header";

import "./About.css";
import Shady from "../../images/shady.jpg";
import Footer from "../footer/Footer";
import LinearDeterminate from "../graph/Graph";
import ImageCarousel from "../clipper/Clipper";
function About() {
  const pictures = [
    {
      image:
        "https://aboutreact.com/wp-content/uploads/2018/09/react_native_map-1.png",
      title: "Slide 1",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSsJoVzGFJL_YZNi049jZK5jR9FS6WmFMvqw&s",
      title: "Slide 2",
    },
    {
      image:
        "https://pbs.twimg.com/profile_images/470682672235151360/vI0ZZlhZ_400x400.png",
      title: "Slide 3",
    },
    {
      image: "https://jwt.io/apple-icon/256?c8286793fc3e08ca",
      title: "Slide 4",
    },
    {
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/e5/f9/e9/e5f9e91d-6cbd-bd40-44af-0cf8f41222af/logo_authenticator_color-0-1x_U007emarketing-0-0-0-6-0-0-0-85-220-0.png/1200x630wa.png",
      title: "Slide 5",
    },
  ];
  return (
    <div className="about__container-global">
      <div className="sticky-header">
        <Header />
      </div>
      <div className="about__container-detail">
        <span className="about__container-title">About</span>
      </div>

      <div className="about__container">
        <div className="about__grid-layout">
          <img
            src={Shady}
            alt="image-profile"
            className="about__container-img"
          />
          <div className="about__text-container">
            <span className="about__container-description">
              Full Stack JS Developer
            </span>
            <div className="about__container-info">
              <div className="about__container-firstrow">
                <span>
                  <strong>Birthday: </strong> 09/12/1983
                </span>
                <span>
                  <strong>Phone: </strong> +216 51164475
                </span>
                <span>
                  <strong>City: </strong>
                  Aouina, Oasis City, Tunisia
                </span>
              </div>
              <div className="about__container-firstrow">
                <span>
                  <strong>Age: </strong> 42
                </span>
                <span>
                  <strong>Degree: </strong>Phd
                </span>
                <span>
                  <strong>email: </strong> shady.kahouech@gmail.com
                </span>
              </div>
            </div>
            <span className="about__container-about">
              Full-stack JavaScript developer with expertise in React.js,
              Next.js, Express.js, and Node.js. I build high-performance web and
              mobile apps. With a background as a researcher, lecturer, and
              medical delegate, I bring strong communication, analytical skills,
              and a passion for technology to every project.
            </span>
          </div>
        </div>
      </div>
      <div className="about__container-skills">
        <span className="about__container-skills--title">Skills</span>
        <div className="about__container-graph">
          <div className="about__container-graph-1">
            <div className="grap-design">
              <span className="about__design-typographie">HTML</span>

              <LinearDeterminate valueMin={90} valueMax={100} />
            </div>
            <div className="grap-design">
              <span className="about__design-typographie">CSS</span>

              <LinearDeterminate valueMin={80} valueMax={90} />
            </div>
            <div className="grap-design">
              <span className="about__design-typographie">JAVASCRIPT</span>

              <LinearDeterminate valueMin={70} valueMax={80} />
            </div>
          </div>
          <div className="about__container-graph-1">
            <div className="grap-design">
              <span className="about__design-typographie">React.js</span>

              <LinearDeterminate valueMin={70} valueMax={85} />
            </div>
            <div className="grap-design">
              <span className="about__design-typographie">React Native</span>

              <LinearDeterminate valueMin={60} valueMax={80} />
            </div>
            <div className="grap-design">
              <span className="about__design-typographie">express js</span>

              <LinearDeterminate valueMin={70} valueMax={85} />
            </div>
          </div>

          <div className="about__container-graph-1">
            <div className="grap-design">
              <span className="about__design-typographie">Next.js</span>

              <LinearDeterminate valueMin={70} valueMax={85} />
            </div>
            <div className="grap-design">
              <span className="about__design-typographie">TypeScript</span>

              <LinearDeterminate valueMin={70} valueMax={80} />
            </div>
            <div className="grap-design">
              <span className="about__design-typographie">SCSS</span>

              <LinearDeterminate valueMin={70} valueMax={85} />
            </div>
          </div>
        </div>
      </div>

      <div className="about__container-feature">
        <div>
          <div className="about__container-feature-title">Features</div>
        </div>
        <ImageCarousel images={pictures} />
      </div>

      <div className="about__container-footer">
        <Footer />
      </div>
    </div>
  );
}

export default About;
