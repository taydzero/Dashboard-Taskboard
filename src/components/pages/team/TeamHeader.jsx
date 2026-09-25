import {
  Search,
  LayoutGrid,
  List,
} from "lucide-react";

function TeamHeader() {
  return (
    <header className="flex items-center justify-between px-6 py-5 bg-white">
        <h1 className="text-3xl font-bold">Team</h1>
    <div className="relative">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="search"
          placeholder="Seacrh member..."
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
          className="p-2"
        >
          <LayoutGrid size={20} />
        </button>

        <button
          className="p-2
          "
        >
          <List size={20} />
        </button>
      </div>

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
        Invite Member
      </button>
    </header>
  );
}

export default TeamHeader;