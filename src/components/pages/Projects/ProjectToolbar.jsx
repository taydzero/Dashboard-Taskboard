import {
  Search,
  LayoutGrid,
  List,
} from "lucide-react";

function ProjectToolbar({ view, onViewChange }) {
  return (
    <div className="flex items-center justify-between bg-white px-6 py-4 border-b border-gray-200">
      <div className="relative">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="search"
          placeholder="Search projects..."
          className="
            w-80
            h-10
            pl-10
            pr-4
            rounded-xl
            border
            border-gray-300
            outline-none
            focus:border-indigo-500
            focus:ring-2
            focus:ring-indigo-200
          "
        />
      </div>

      <div className="flex rounded-xl border border-gray-200 overflow-hidden">
        <button
          onClick={() => onViewChange("grid")}
          className={`p-2 ${
            view === "grid"
              ? "bg-indigo-50 text-indigo-600"
              : "hover:bg-gray-100"
          }`}
        >
          <LayoutGrid size={20} />
        </button>

        <button
          onClick={() => onViewChange("list")}
          className={`p-2 ${
            view === "list"
              ? "bg-indigo-50 text-indigo-600"
              : "hover:bg-gray-100"
          }`}
        >
          <List size={20} />
        </button>
      </div>
    </div>
  );
}

export default ProjectToolbar;