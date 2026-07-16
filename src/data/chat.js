const chats = [
  {
    id: 1,
    user: {
      id: 15,
      name: "Alex Johnson",
      avatar: null,
      online: true,
    },

    lastMessage: {
      text: "Hey! How are you?",
      createdAt: "12:45",
    },

    unreadCount: 2,

    messages: [
      {
        id: 1,
        sender: "user",
        text: "Hey!",
        createdAt: "12:40",
      },
      {
        id: 2,
        sender: "me",
        text: "Hi Alex!",
        createdAt: "12:41",
      },
      {
        id: 3,
        sender: "user",
        text: "How are you?",
        createdAt: "12:45",
      },
    ],
  },

  {
    id: 2,
    user: {
      id: 18,
      name: "Emily Davis",
      avatar: null,
      online: false,
    },

    lastMessage: {
      text: "Let's meet tomorrow.",
      createdAt: "11:30",
    },

    unreadCount: 0,

    messages: [
      {
        id: 1,
        sender: "user",
        text: "Are you free tomorrow?",
        createdAt: "11:20",
      },
      {
        id: 2,
        sender: "me",
        text: "Yes!",
        createdAt: "11:25",
      },
      {
        id: 3,
        sender: "user",
        text: "Let's meet tomorrow.",
        createdAt: "11:30",
      },
    ],
  },
];

export default chats;