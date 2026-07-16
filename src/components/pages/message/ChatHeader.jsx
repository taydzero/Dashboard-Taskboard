import {
  Phone,
  Video,
  Search,
  MoreVertical,
} from "lucide-react";

function ChatHeader({ chat }) {
  if (!chat) {
    return (
      <header className="h-16 bg-white border-b border-gray-200 flex items-center px-6 shadow-sm">
        <span className="text-gray-400">
          Выберите чат
        </span>
      </header>
    );
  }

  return (
    <header
      className="
        h-16
        bg-white
        border-b
        border-gray-200
        flex
        items-center
        justify-between
        px-6
        shadow-sm
      "
    >
      <div className="flex items-center gap-4">
        <div className="relative">
          {chat.user.avatar ? (
            <img
              src={chat.user.avatar}
              alt={chat.user.name}
              className="w-11 h-11 rounded-full object-cover"
            />
          ) : (
            <div className="w-11 h-11 rounded-full bg-slate-300" />
          )}

        </div>

        <div>
          <h2 className="font-semibold text-gray-800">
            {chat.user.name}
          </h2>

          <p
            className={`text-sm ${
              chat.user.online
                ? "text-green-500"
                : "text-gray-500"
            }`}
          >
            {chat.user.online ? "● Online" : "Offline"}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="p-2 rounded-lg hover:bg-gray-100 transition">
          <Search size={20} />
        </button>

        <button className="p-2 rounded-lg hover:bg-gray-100 transition">
          <Phone size={20} />
        </button>

        <button className="p-2 rounded-lg hover:bg-gray-100 transition">
          <Video size={20} />
        </button>

        <button className="p-2 rounded-lg hover:bg-gray-100 transition">
          <MoreVertical size={20} />
        </button>
      </div>
    </header>
  );
}

export default ChatHeader;