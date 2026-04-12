

import SprintCard from "./SprintCard"

function ProjectCard({ project }) {

    const sprintCardComponents = project.sprints.map((sprint) => {
        <SprintCard key={sprint.id} sprint={sprint} />
    })

    return (
        <div>
            {sprintCardComponents}
        </div>
    )
}

export default ProjectCard