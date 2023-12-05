import React from "react";
import ProjectList from "./ProjectList";
import ProjectName from "./ProjectName";
import Stats from "./Stats";
function MainPage() {
  return (
    <div id="container">
      <ProjectName />
      <ProjectList />
      <Stats />
    </div>
  );
}

export default MainPage;
