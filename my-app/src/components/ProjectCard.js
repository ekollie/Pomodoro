import React from "react"

function ProjectCard(props) {
    // handler that checks for a click - nav link

    return (
        <div id='card'>
            <p>{props.project.project_name}</p>
        </div>

    )
}

export default ProjectCard