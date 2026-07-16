function ChatItem({
        chat,
        onClick,
        isSelected
    }) {
    return(
        <div
            onClick={onClick} 
            className={`
                flex items-center gap-3 p-4
                hover:bg-gray-100 cursor-pointer border-b
                border-gray-200 transition
                
                ${isSelected ? "bg-indigo-50" : ""}
                `}
                >
                <div className="relative">
                <div className="w-12 h-12 rounded-full bg-slate-300"></div>
            
                {chat.user.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 border-2 border-white"></div>
                )}
            </div>

            <div className="flex-1 min-w-0">
                <div className="flex justify-between">
                    <h3 className="font-semibold">
                        {chat.user.name}
                    </h3>
                </div>

                <p className="text-sm text-gray-500 truncate">
                    {chat.lastMessage.text}
                </p>
            </div>

            {chat.unreadCount > 0 && (
                <div className="bg-indigo-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
                    {chat.unreadCount}
                </div>
            )}
            <span className="text-xs text-gray-500">
                {chat.lastMessage.createdAt}
            </span>

        </div>
    );
}

export default ChatItem;