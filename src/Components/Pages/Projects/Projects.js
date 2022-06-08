import React, { useEffect, useState } from "react";
import Project from "../Project/Project";

function Projects() {
  const [project, setProjects] = useState([]);

  useEffect(() => {
    fetch("project.json")
      .then((resp) => resp.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <>
      <div class="card_container">
        {project.map((proj) => {
          return <Project key={proj._id} result={proj}></Project>;
        })}
      </div>
    </>
  );
}

export default Projects;
