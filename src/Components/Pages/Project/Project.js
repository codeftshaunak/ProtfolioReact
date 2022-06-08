import React from "react";
import { Link } from "react-router-dom";
import { FaFirefox, FaGithub } from "react-icons/fa";
import "./Project.css";
import ScrollAnimation from "react-animate-on-scroll";

function Project(proj) {
  const tech = [proj.result.usingtechnology];
  console.log(proj);
  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <div>
        <div class="card_body">
          <div class="card-header">
            <img src={proj.result.projectimage} alt="rover" />
          </div>
          <div class="card__body">
            <h4>{proj.result.projectname}</h4>
            <div className="usingtech">
              {tech.map((tec) => {
                return <p>{tec}</p>;
              })}
            </div>
            <div class="user">
              <a href={proj.result.livesitelink} target="_blank">
                <FaFirefox />
              </a>
              <a href={proj.result.codelink} target="_blank">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Project;
