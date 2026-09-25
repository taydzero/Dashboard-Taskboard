import { useState, useRef } from "react";
import {
  Bell,
  MessageCircle,
  CheckSquare,
  UserPlus,
  X,
} from "lucide-react";

import useClickOutside from "../../../hooks/useClickOutside";

function NotificationMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useClickOutside(menuRef, () => setIsOpen(false));

  const notifications = [
    {
      id: 1,
      type: "message",
      title: "New message",
      text: "Alex sent you a message.",
      time: "5 minutes ago",
      unread: true,
    },
    {
      id: 2,
      type: "task",
      title: "Task completed",
      text: "The task 'Create project page' was completed.",
      time: "1 hour ago",
      unread: true,
    },
    {
      id: 3,
      type: "member",
      title: "New team member",
      text: "Emily joined your team.",
      time: "Yesterday",
      unread: false,
    },
  ];

  const notificationIcons = {
    message: MessageCircle,
    task: CheckSquare,
    member: UserPlus,
  };

  return (
    <div ref={menuRef} className="relative">
      {/* Кнопка */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="
          relative
          w-10 h-10
          rounded-xl
          hover:bg-gray-100
          transition
          flex items-center justify-center
        "
      >
        <Bell size={20} className="text-slate-900" />

        {/* Индикатор новых уведомлений */}
        <span className="
          absolute
          top-2
          right-2
          w-2
          h-2
          rounded-full
          bg-indigo-600
          border-2
          border-white
        " />
      </button>

      {/* Меню */}
      {isOpen && (
        <div
          className="
            absolute
            right-0
            top-12
            w-96
            bg-white
            rounded-2xl
            shadow-xl
            border
            border-gray-200
            overflow-hidden
            z-50
          "
        >
          {/* Header */}
          <div className="
            flex
            items-center
            justify-between
            px-5
            py-4
            border-b
            border-gray-200
          ">
            <div>
              <h2 className="font-semibold text-gray-900">
                Notifications
              </h2>

              <p className="text-sm text-gray-500">
                You have 2 unread notifications
              </p>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="
                p-2
                rounded-lg
                hover:bg-gray-100
                transition
                text-gray-500
              "
            >
              <X size={18} />
            </button>
          </div>

          {/* Notifications */}
          <div className="max-h-96 overflow-y-auto">
            {notifications.map((notification) => {
              const Icon = notificationIcons[notification.type];

              return (
                <button
                  key={notification.id}
                  className={`
                    w-full
                    flex
                    items-start
                    gap-3
                    px-5
                    py-4
                    text-left
                    border-b
                    border-gray-100
                    last:border-b-0
                    hover:bg-gray-50
                    transition
                    ${
                      notification.unread
                        ? "bg-indigo-50/40"
                        : ""
                    }
                  `}
                >
                  {/* Icon */}
                  <div className="
                    w-10
                    h-10
                    shrink-0
                    flex
                    items-center
                    justify-center
                    rounded-xl
                    bg-indigo-50
                    text-indigo-600
                  ">
                    <Icon size={18} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-medium text-gray-900">
                        {notification.title}
                      </h3>

                      {notification.unread && (
                        <span className="
                          w-2
                          h-2
                          shrink-0
                          rounded-full
                          bg-indigo-600
                        " />
                      )}
                    </div>

                    <p className="mt-1 text-sm text-gray-500">
                      {notification.text}
                    </p>

                    <time className="block mt-2 text-xs text-gray-400">
                      {notification.time}
                    </time>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Footer */}
          <button
            className="
              w-full
              py-3
              text-sm
              font-medium
              text-indigo-600
              border-t
              border-gray-200
              hover:bg-gray-50
              transition
            "
          >
            View all notifications
          </button>
        </div>
      )}
    </div>
  );
}

export default NotificationMenu;