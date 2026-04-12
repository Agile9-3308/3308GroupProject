import { useState, useContext } from "react"

import { GlobalContext } from "../App";

import { createProject } from "../api/api"

function NewProjectForm({ projects, setProjects }) {
  const { currentUser } = useContext(GlobalContext)
  const [title, setTitle] = useState("");

  const startDate = new Date
  const endDate = new Date
  endDate.setDate(endDate.getDate() + 14)

  function handleCreateProject() {
    console.log(currentUser.id)
    const projectData = {
      title: title,
      description: "Test description of project",
      owner_id: currentUser.id,
      start_at: startDate,
      end_at: endDate
    }
    createProject(projectData)
    .then(res => {
      console.log(res.data)
      setProjects([...projects, res.data])
    })
    .catch(err => console.error(err))
  }

  return (
    <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm space-y-3">
      <h3 className="text-sm font-semibold text-gray-700">New project</h3>
      <div className="flex gap-2">
        <input
          className="flex-1 border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400"
          placeholder="Project name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <button
        onClick={handleCreateProject}
        className="w-full py-2 bg-indigo-500 text-white text-sm font-medium rounded-lg hover:bg-indigo-600 transition-colors"
      >Add Project</button>
    </div>
  );
}

export default NewProjectForm