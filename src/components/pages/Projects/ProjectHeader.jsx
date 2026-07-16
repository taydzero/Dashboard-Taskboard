function ProjectsHeader() {
  return (
    <header className="flex items-center justify-between px-6 py-5 bg-white">
      <h1 className="text-3xl font-bold text-gray-900">
        Projects
      </h1>

      <button
        className="
          px-4 py-2
          rounded-lg
          bg-indigo-600
          text-white
          font-medium
          hover:bg-indigo-700
          transition
        "
      >
        Create Project
      </button>
    </header>
  );
}

export default ProjectsHeader;