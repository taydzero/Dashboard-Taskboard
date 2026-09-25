import MessageItem from "./MessageItem";
function MessageList({ chat }) {
  if (!chat) {
    return null;
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
      {chat.messages.map((message) => (
        <MessageItem
          key={message.id}
          message={message}
        />
      ))}
    </div>
  );
}

export default MessageList;