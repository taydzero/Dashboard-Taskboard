import ChatItem from "./ChatItem";

function ChatList({ chats, selectedChat, onSelectedChat}) {
return(
    <aside className="w-80 border-r border-gray-200 ">
        <div className="overflow-y-auto h-full">
            <h1 className="pl-6 py-4 text-2xl font-bold">
                Messages
            </h1>

          {chats.map((chat) => (
            <ChatItem
                key={chat.id}
                chat={chat}
                isSelected={selectedChat.id === chat.id}
                onClick={() => onSelectedChat(chat)}
                />
          ))}
        </div>
    </aside>
)}

export default ChatList;