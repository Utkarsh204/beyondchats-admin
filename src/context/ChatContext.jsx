import React, { createContext, useState, useContext } from 'react';

// Create ChatContext
const ChatContext = createContext();

// Mock data for chats and users
const initialChats = [
  {
    id: 1,
    userId: 1,
    messages: [
      { id: 1, sender: 'user', text: 'Hello, I need help with my order.', timestamp: '2023-05-22T10:00:00Z' },
      { id: 2, sender: 'agent', text: 'Sure, I am here to help you.', timestamp: '2023-05-22T10:01:00Z' },
    ],
  },
  {
    id: 2,
    userId: 2,
    messages: [
      { id: 1, sender: 'user', text: 'My product arrived damaged.', timestamp: '2023-05-22T09:30:00Z' },
      { id: 2, sender: 'agent', text: 'I am sorry to hear that. We will resolve it.', timestamp: '2023-05-22T09:32:00Z' },
    ],
  },
];

const initialUsers = [
  { id: 1, name: 'Luis Easton', avatar: 'https://i.pravatar.cc/40?img=1' },
  { id: 2, name: 'Ivan Nike', avatar: 'https://i.pravatar.cc/40?img=2' },
];

// ChatProvider component
export const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState(initialChats);
  const [users, setUsers] = useState(initialUsers);
  const [activeChatId, setActiveChatId] = useState(initialChats[0].id);

  const activeChat = chats.find(chat => chat.id === activeChatId);
  const activeUser = users.find(user => user.id === activeChat?.userId);

  // Function to send a new message
  const sendMessage = (chatId, message) => {
    setChats(prevChats =>
      prevChats.map(chat =>
        chat.id === chatId
          ? { ...chat, messages: [...chat.messages, message] }
          : chat
      )
    );
  };

  return (
    <ChatContext.Provider
      value={{
        chats,
        users,
        activeChatId,
        setActiveChatId,
        activeChat,
        activeUser,
        sendMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

// Custom hook to use ChatContext
export const useChat = () => useContext(ChatContext);
