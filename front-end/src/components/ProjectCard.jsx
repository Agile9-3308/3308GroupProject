import { useState, useEffect } from "react"

import SprintCard from "./SprintCard"
import { createSprint, getProject, getSprint } from "../api/api"

function ProjectCard({ project }) {

    const [newSprintInput, setNewSprintInput] = useState("")
    const [sprints, setSprints] = useState(project.sprints)
    const [sprintCardComponents, setSprintCardComponents] = useState([])

    useEffect(() => {
        console.log("trigger effect")
        getProject(project.id)
        .then(res => {
            console.log(res.data.sprints)
            setSprintCardComponents(
                res.data.sprints.map((sprint) => {
                    return <SprintCard key={sprint.id} sprint={sprint} sprints={sprints} setSprints={setSprints} />
                })
            )
        })
        .catch(err => console.error(err))
    }, [sprints])

    const startDate = new Date
    const endDate = new Date
    endDate.setDate(endDate.getDate() + 14)

    function handleCreateSprint() {
        const sprintData = {
            title: newSprintInput,
            project_id: project.id,
            start_at: startDate,
            end_at: endDate,
            // tasks: [],
        }
        createSprint(sprintData)
        .then(res => {setSprints([...sprints, sprintData])})
        .catch(err => console.error(err))
    }

    return (
        <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
            <span>{project.title}</span>
            {sprints.length > 0 ? (
                sprintCardComponents
            ) : (
                <p className="text-s text-gray-400 italic mt-2">No sprints yet.</p>
            )}
            <div className="flex gap-2 mt-4">
                <input
                    className="flex-1 border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400"
                    placeholder="New sprint..."
                    value={newSprintInput}
                    onChange={(e) => setNewSprintInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleCreateSprint()}
                />
                <button
                    onClick={handleCreateSprint}
                    className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-gray-600"
                >
                    + Add
                </button>
            </div>
        </div>
    )
}

export default ProjectCard