function MessageItem({ message }) {
  const isMine = message.sender === "me";

  return (
    <div
      className={`flex mb-3 ${
        isMine ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`
          px-4 py-2 rounded-2xl max-w-sm
          ${
            isMine
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 text-gray-800"
          }
        `}
      >
        <p>{message.text}</p>

        <span className="text-xs opacity-70">
          {message.createdAt}
        </span>
      </div>
    </div>
  );
}

export default MessageItem;