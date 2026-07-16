import ProjectsHeader from "./ProjectHeader";
import ProjectList from "./ProjectList";
import ProjectToolbar from "./ProjectToolbar";
import projects from "../../../data/Projects";

import { useState } from "react";

function Projects() {
  const [view, setView] = useState("grid");

  return (
    <main className="flex-1 bg-gray-50">
      <ProjectsHeader />

      <ProjectToolbar
        view={view}
        onViewChange={setView}
      />

      <ProjectList
        projects={projects}
        view={view}
      />
    </main>
  );
}
export default Projects;