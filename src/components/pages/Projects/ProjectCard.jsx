import { Users, CheckSquare } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <div
      className="
        w-full
        bg-white
        rounded-2xl
        border
        border-gray-200
        p-5
        hover:shadow-md
        transition
        cursor-pointer
        flex
        flex-col
      "
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-12 h-12 rounded-xl ${project.color}`}
        />

        <div>
          <h3 className="font-semibold text-lg">
            {project.title}
          </h3>

          <p className="text-sm text-gray-500">
            {project.updatedAt}
          </p>
        </div>
      </div>

      <p className="text-gray-600 text-sm">
        {project.description}
      </p>

      <div
        className="
          flex
          justify-between
          text-sm
          text-gray-500
          mt-auto
          pt-5
        "
      >
        <div className="flex items-center gap-2">
          <CheckSquare size={16} />
          {project.tasks} tasks
        </div>

        <div className="flex items-center gap-2">
          <Users size={16} />
          {project.members}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;