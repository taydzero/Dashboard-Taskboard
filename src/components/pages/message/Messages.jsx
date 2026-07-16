import { useState } from "react";
import chats from "../../../data/chat";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";

function Messages() {
  const [selectedChat, setSelectedChat] = useState(chats[0]);

  return(
    <div className="flex-1 flex">
      <ChatList
        chats={chats}
        selectedChat={selectedChat}
        onSelectedChat={setSelectedChat}  
      />
      <ChatWindow selectedChat={selectedChat}/>
    </div>
  )
}

export default Messages;