import ProjectCard from "./ProjectCard";

function ProjectList({ projects, view }) {
  return (
    <div
      className={
        view === "grid"
          ? "grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6 p-6"
          : "flex flex-col gap-3 p-6"
      }
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          view={view}
        />
      ))}
    </div>
  );
}

export default ProjectList;