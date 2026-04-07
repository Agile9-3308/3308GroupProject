// src/components/Project.jsx
import { useEffect, useState } from "react";

import ProjectCard from "./ProjectCard";

function Projects({ projects, setProjects }) {

  const projectCardComponents = projects.map((project) => (
    <ProjectCard key={project.id} project={project} projects={projects} setProjects={setProjects} />
  ))

  return (
    <div className="space-y-4">
      {projectCardComponents}
    </div>
  );
}

export default Projects;