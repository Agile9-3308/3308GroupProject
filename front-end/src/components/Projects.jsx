// src/components/Project.jsx
import { useEffect, useState, useContext } from "react";

import ProjectCard from "./ProjectCard";

import { GlobalContext } from "../App";

function Projects() {

  const { currentUser } = useContext(GlobalContext)
  console.log(currentUser.assigned_projects)
  const [projects, setProjects] = useState(currentUser.assigned_projects)

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