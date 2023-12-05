import React from "react"
import ProjectList from "./ProjectList"
import ProjectName from './ProjectName'
// import { NavLink } from "react-router-dom"

function MainPage() {

    return (
        <div id='container'>
            <ProjectName />
            <ProjectList />
            {/* <NavLink to="./snake">Snake</NavLink>
            <NavLink to="./texteditor">TextEditor</NavLink> */}
        </div>
    )
}

export default MainPage