import ChatHeader from "./ChatHeader"
import MessageList from "./MessageList"
import MessageInput from "./MessageInput"

function ChatWindow({ selectedChat }) {
  return (
    <main className="flex-1 flex flex-col">
      <ChatHeader chat={selectedChat} />

      <MessageList chat={selectedChat} />

      <MessageInput />
    </main>
  );
}

export default ChatWindow;