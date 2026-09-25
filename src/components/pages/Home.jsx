import {
  FolderKanban,
  CheckSquare,
  Users,
  MessageCircle,
} from "lucide-react";

import {
  stats,
  recentProjects,
  activities,
} from "../../data/homeStats";

const icons = {
  projects: FolderKanban,
  tasks: CheckSquare,
  team: Users,
  messages: MessageCircle,
};

function Home() {
  return (
    <main className="flex-1 flex flex-col bg-gray-50">
      <header className="px-6 py-5 bg-white border-b border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900">
          Home
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Welcome back! Here's what's happening today.
        </p>
      </header>

      <div className="p-6">

        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {stats.map((stat) => {
            const Icon = icons[stat.icon];

            return (
              <div
                key={stat.id}
                className="
                  bg-white
                  border border-gray-200
                  rounded-2xl
                  p-5
                  transition
                  hover:shadow-md
                "
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">
                    {stat.title}
                  </p>

                  <div className="
                    w-10 h-10
                    flex items-center justify-center
                    rounded-xl
                    bg-indigo-50
                    text-indigo-600
                  ">
                    <Icon size={20} />
                  </div>
                </div>

                <h2 className="mt-4 text-3xl font-bold text-gray-900">
                  {stat.value}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </section>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
          <section className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-semibold">
                Recent Projects
              </h2>

              <button className="text-sm text-indigo-600 hover:text-indigo-700">
                View all
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {recentProjects.map((project) => (
                <ProjectItem
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          </section>

          <section className="bg-white border border-gray-200 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-5">
              Recent Activity
            </h2>

            <div className="flex flex-col gap-5">
              {activities.map((activity) => (
                <ActivityItem
                  key={activity.id}
                  activity={activity}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function ProjectItem({ project }) {
  return (
    <div className="
      flex items-center justify-between
      p-3
      rounded-xl
      hover:bg-gray-50
      transition
      cursor-pointer
    ">
      <div className="flex items-center gap-3">
        <div className="
          w-10 h-10
          rounded-xl
          bg-indigo-50
          flex items-center justify-center
          text-indigo-600
        ">
          <FolderKanban size={18} />
        </div>

        <div>
          <h3 className="font-medium text-gray-900">
            {project.name}
          </h3>

          <p className="text-sm text-gray-500">
            {project.tasks} tasks
          </p>
        </div>
      </div>

      <span className="text-gray-400">→</span>
    </div>
  );
}

function ActivityItem({ activity }) {
  return (
    <div className="flex gap-3">
      <div className="
        w-2 h-2
        mt-2
        rounded-full
        bg-indigo-600
        shrink-0
      " />

      <div>
        <p className="text-sm font-medium text-gray-800">
          {activity.title}
        </p>

        <p className="mt-1 text-xs text-gray-500">
          {activity.time}
        </p>
      </div>
    </div>
  );
}

export default Home;