import { useState, useRef } from "react";
import {
  User,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";

import UserAvatar from "../../UserAvatar";
import useClickOutside from "../../../hooks/useClickOutside";

function UserProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useClickOutside(menuRef, () => setIsOpen(false));

  return (
    <div ref={menuRef} className="relative">
      {/* Кнопка открытия */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="
          rounded-xl
          hover:bg-gray-100
          transition
        "
      >
        <UserAvatar />
      </button>

      {/* Меню */}
      {isOpen && (
        <div
          className="
            absolute
            right-0
            top-12
            w-72
            bg-white
            rounded-2xl
            shadow-xl
            border
            border-gray-200
            overflow-hidden
            z-50
          "
        >
          {/* Информация о пользователе */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <UserAvatar />

              <div className="min-w-0">
                <h3 className="font-semibold text-gray-900 truncate">
                  UserName
                </h3>

                <p className="text-sm text-gray-500 truncate">
                  user@example.com
                </p>
              </div>
            </div>
          </div>

          {/* Основные действия */}
          <div className="p-2">
            <button
              className="
                w-full
                flex
                items-center
                gap-3
                px-3
                py-3
                rounded-xl
                text-left
                hover:bg-gray-50
                transition
              "
            >
              <div
                className="
                  w-9 h-9
                  flex items-center justify-center
                  rounded-lg
                  bg-indigo-50
                  text-indigo-600
                "
              >
                <User size={18} />
              </div>

              <span className="flex-1 font-medium text-gray-700">
                My Profile
              </span>

              <ChevronRight
                size={18}
                className="text-gray-400"
              />
            </button>

            <button
              className="
                w-full
                flex
                items-center
                gap-3
                px-3
                py-3
                rounded-xl
                text-left
                hover:bg-gray-50
                transition
              "
            >
              <div
                className="
                  w-9 h-9
                  flex items-center justify-center
                  rounded-lg
                  bg-indigo-50
                  text-indigo-600
                "
              >
                <Settings size={18} />
              </div>

              <span className="flex-1 font-medium text-gray-700">
                Settings
              </span>

              <ChevronRight
                size={18}
                className="text-gray-400"
              />
            </button>
          </div>

          {/* Выход */}
          <div className="p-2 border-t border-gray-200">
            <button
              className="
                w-full
                flex
                items-center
                gap-3
                px-3
                py-3
                rounded-xl
                text-left
                text-red-600
                hover:bg-red-50
                transition
              "
            >
              <div
                className="
                  w-9 h-9
                  flex items-center justify-center
                  rounded-lg
                  bg-red-50
                "
              >
                <LogOut size={18} />
              </div>

              <span className="font-medium">
                Sign out
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfileMenu;