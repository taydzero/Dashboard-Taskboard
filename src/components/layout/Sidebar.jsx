import { NavLink } from "react-router-dom";
import { navigation } from "../../data/navagitation";

function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <nav className="flex-1 p-4 space-y-1">
        {navigation.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `
              flex items-center gap-3
              px-4 py-3 rounded-xl
              transition-all duration-200

              ${
                isActive
                  ? "bg-indigo-50 text-indigo-600 font-medium"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }
              `
            }
          >
            <Icon size={20} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;