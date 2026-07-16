import { Paperclip, Smile, SendHorizontal } from "lucide-react";

function MessageInput() {
  return (
    <div className="border-t border-gray-200 bg-white p-4">
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-lg hover:bg-gray-100 transition">
          <Paperclip size={20} className="text-gray-500" />
        </button>

        <div className="flex-1">
          <input
            type="text"
            placeholder="Type a message..."
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              px-4
              py-3
              outline-none
              focus:border-indigo-500
              focus:ring-2
              focus:ring-indigo-200
              transition
            "
          />
        </div>

        <button className="p-2 rounded-lg hover:bg-gray-100 transition">
          <Smile size={20} className="text-gray-500" />
        </button>

        <button
          className="
            p-3
            rounded-xl
            bg-indigo-600
            text-white
            hover:bg-indigo-700
            transition
          "
        >
          <SendHorizontal size={20} />
        </button>
      </div>
    </div>
  );
}

export default MessageInput;