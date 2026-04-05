// src/components/Project.jsx
import { useState } from "react";

import ProjectCard from "./ProjectCard";

function Projects() {

  const dummyProjects = [
    {
      id: 1,
      name: "Auth & Login Flow",
      members: ["Andrew", "Mike", "Eric"],
      sprintDays: 14,
      tasks: [
        { id: 1, label: "OAuth integration", done: true },
        { id: 2, label: "Session management", done: true },
        { id: 3, label: "Password reset flow", done: false },
      ],
    },
    {
      id: 2,
      name: "Dashboard UI",
      members: ["Andrew", "Mike", "Eric"],
      sprintDays: 10,
      tasks: [
        { id: 1, label: "Chart component", done: true },
        { id: 2, label: "Responsive layout", done: false },
        { id: 3, label: "Dark mode", done: false },
      ],
    },
  ];

  const [projects, setProjects] = useState(dummyProjects);

  const projectCardComponents = projects.map((p) => (
    <ProjectCard key={p.id} project={p} />
  ))

  return (
    <div className="space-y-4">
      {projectCardComponents}
    </div>
  );
}

export default Projects;