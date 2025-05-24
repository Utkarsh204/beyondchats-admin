import React, { useState, useRef, useEffect } from 'react';
import {
  StarIcon,
  EllipsisHorizontalIcon,
  PhoneIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { useChat } from '../context/ChatContext';

const ChatWindow = () => {
  const { activeChat, sendMessage } = useChat();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (activeChat?.messages) {
      setMessages(activeChat.messages);
    }
  }, [activeChat]);

  const handleSend = () => {
    if (input.trim() === '' || !activeChat) return;

    const newMessage = {
      id: activeChat.messages.length + 1,
      sender: 'user',
      text: input,
      timestamp: new Date().toISOString(),
    };

    sendMessage(activeChat.id, newMessage);
    setInput('');
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 flex flex-col bg-white border-r border-gray-300 rounded-r-lg shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300 bg-gray-100 rounded-t-lg">
        <div className="font-semibold text-gray-900">Nikola Tesla</div>
        <div className="flex items-center space-x-2">
          <button className="p-1 hover:bg-gray-200 rounded" title="Star">
            <StarIcon className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-1 hover:bg-gray-200 rounded" title="More options">
            <EllipsisHorizontalIcon className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-1 hover:bg-gray-200 rounded flex items-center space-x-1 border border-gray-300 rounded-md px-2" title="Call">
            <PhoneIcon className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-700">Call</span>
          </button>
          <button className="p-1 hover:bg-gray-200 rounded flex items-center space-x-1 border border-gray-300 rounded-md px-2" title="Snooze">
            <ClockIcon className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-700">Snooze</span>
          </button>
          <button className="p-1 bg-gray-900 text-white rounded-md px-3 hover:bg-gray-800" title="Close">
            Close
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map(({ id, text, sender, timestamp }) => {
          const isUser = sender === 'user';
          const isSystem = sender === 'system';
          const isAgent = sender === 'agent';
          const isMe = isUser; // user messages aligned right
          return (
            <div key={id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-lg rounded-lg p-4 whitespace-pre-wrap ${
                  isSystem
                    ? 'bg-yellow-100 text-gray-800'
                    : isMe
                    ? 'bg-blue-200 text-gray-900'
                    : 'bg-gray-200 text-gray-900'
                }`}
              >
                <p>{text}</p>
                <div className="text-xs text-gray-600 mt-2 flex items-center justify-end space-x-2">
                  <span>{new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-gray-300 p-4 flex items-center space-x-3 rounded-b-lg">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 border border-gray-300 rounded-md px-4 py-2 outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
