// src/components/Project.jsx
import { useEffect, useState, useContext } from "react";

import ProjectCard from "./ProjectCard";

function Projects({ projects, setProjects }) {

  const [projectCardComponents, setProjectCardComponents] = useState([])

  useEffect(() => {
    setProjectCardComponents(projects.map((project) => (
      <ProjectCard key={project.id} project={project} projects={projects} setProjects={setProjects} />
    )))
  }, [projects])

  return (
    <div className="space-y-4">
      {projectCardComponents}
    </div>
  );
}

export default Projects;