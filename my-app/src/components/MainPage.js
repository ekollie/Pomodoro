import React from "react";
import ProjectList from "./ProjectList";
import ProjectName from "./ProjectName";
import Stats from "./Stats";
// import { NavLink } from "react-router-dom"

function MainPage() {
  return (
    <div id="container">
      <ProjectName />
      <ProjectList />
      <Stats />
      {/* <NavLink to="./snake">Snake</NavLink>
            <NavLink to="./texteditor">TextEditor</NavLink> */}
    </div>
  );
}

export default MainPage;
