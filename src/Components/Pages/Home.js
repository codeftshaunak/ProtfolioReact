import React from "react";
import "./Home.css";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { FaCodepen } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import profilePicture from "../../asset/profilepic.png";
import linkdinProfile from "../../asset/LinkedInPost.png";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Top from "../Shared/Top";
import ScrollAnimation from "react-animate-on-scroll";

function Home() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          // background: {
          //   color: {
          //     value: "#0d47a1",
          //   },
          // },
          fpsLimit: 90,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 6,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#64ffda",
            },
            links: {
              color: "#64ffda",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 900,
              },
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: true,
        }}
      />

      <section className="s1">
        <div className="main-container">
          <div className="greeting-wrapper">{<Top />}</div>

          <div className="intro-wrapper">
            <div className="nav-wrapper">
              <div className="dots-wrapper">
                <div id="dot-1" className="browser-dot"></div>
                <div id="dot-2" className="browser-dot"></div>
                <div id="dot-3" className="browser-dot"></div>
              </div>

              <ul id="navigation">
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="left-column">
              <img id="profile_pic" src={profilePicture} alt="6" border="0" />
              <a
                href="https://drive.google.com/file/d/1zvxgtwFjePd-36VGNX5U1qIpLcm_Ygny/view?usp=sharing"
                target="_blank"
              >
                Download Resume
              </a>
            </div>

            <div className="right-column">
              <div id="preview_shadow">
                <div id="preview">
                  <div id="corner-tl" className="corner"></div>
                  <div id="corner-tr" className="corner"></div>
                  <h3>
                    <span>W</span>hat I Do
                  </h3>
                  <p>
                    I am a developer i develop front end web application with
                    JavaScript framwork
                  </p>

                  <div id="corner-br" className="corner"></div>
                  <div id="corner-bl" className="corner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s2">
        <div className="main-container">
          <div className="about-wrapper">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <div className="about-me">
                <h4>
                  <span>M</span>ore about me
                </h4>

                <p>
                  <span>I</span> build new projects just to tickle my brain and
                  love teaching how thay're made.
                </p>

                <p>
                  <span>W</span>hile I keep busy my self to learning and
                  sometimes try to teaching others for make thair dream become
                  comes to reality. My goal is make me and others good at
                  codeing.
                </p>

                <br />

                <h4>
                  <span>T</span>OP EXPERTICE
                </h4>
                <p>
                  <span>I</span> am a MERN stack web application developer focus
                  on React Mongo Epress And Node: <br />
                </p>

                <div id="skill">
                  <ul>
                    <li>JavaScript</li>
                    <li>React Js</li>
                    <li>Node Js</li>
                    <li>Express Js</li>
                    <li>Mongo DB</li>
                  </ul>

                  <ul>
                    <li>Photoshop</li>
                    <li>Figma</li>
                    <li>Html/Css</li>
                    <li>Git</li>
                    <li>Bootstrap/Material UI</li>
                  </ul>
                </div>
              </div>
              <h5>Personalize Theme</h5>

              <div className="theme-option-wrapper">
                <div
                  data-mode="light"
                  id="light-mode"
                  className="theme-dot"
                ></div>
                <div
                  data-mode="dark"
                  id="Dark-mode"
                  className="theme-dot"
                ></div>
                <div
                  data-mode="blue"
                  id="blue-mode"
                  className="theme-dot"
                ></div>
                <div
                  data-mode="green"
                  id="green-mode"
                  className="theme-dot"
                ></div>
                <div
                  data-mode="purple"
                  id="purple-mode"
                  className="theme-dot"
                ></div>
              </div>

              <p id="setting_note">
                Theme setting will be saved for <br /> your next visit
              </p>
            </ScrollAnimation>

            <div className="social">
              <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                <h3>
                  <span>F</span>ind me on Linkdin Youtube And Others Platform
                </h3>
                <div className="media">
                  <a href="https://fb.com/codeftshaunak">
                    <BsFacebook />
                  </a>

                  <a href="https://instagram.com/codeftshaunak">
                    <BsInstagram />
                  </a>

                  <a href="https://twitter.com/codeftshaunak">
                    <BsTwitter />
                  </a>

                  <a href="https://codepen.io/codeftshaunak">
                    <FaCodepen />
                  </a>

                  <a href="https://github.com/codeftshaunak">
                    <BsGithub />
                  </a>

                  <a href="https://linkedin.com/in/codeftshaunak">
                    <BsLinkedin />
                  </a>
                </div>
                <img src={linkdinProfile} alt="shaunak" />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      <section id="project">
        <div className="main-container">
          <h3>
            <span>S</span>ome of my past project.
          </h3>
          <div className="project">{<Projects />}</div>
        </div>
      </section>

      <section className="s2" id="contact">
        <ScrollAnimation animateIn="fadeIn">{<Contact />}</ScrollAnimation>
      </section>
    </>
  );
}

export default Home;
