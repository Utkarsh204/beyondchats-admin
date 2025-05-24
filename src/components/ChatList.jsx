import React from 'react';

const conversations = [
  { id: 1, name: 'Luis - Github', lastMessage: 'Hey! I have a question...', time: '45m', unread: 5, avatar: 'https://i.pravatar.cc/40?img=1' },
  { id: 2, name: 'Ivan - Nike', lastMessage: 'Hi there, I have a question...', time: '30m', unread: 1, avatar: 'https://i.pravatar.cc/40?img=2' },
  { id: 3, name: 'Lead from New York', lastMessage: 'Good morning, let me...', time: '40m', unread: 0, avatar: 'https://i.pravatar.cc/40?img=3' },
  { id: 4, name: 'Booking API problems', lastMessage: 'Bug report', time: '45m', unread: 0, avatar: 'https://i.pravatar.cc/40?img=4' },
  { id: 5, name: 'Miracle - Exemplary Bank', lastMessage: "Hey there, I'm here to...", time: '45m', unread: 0, avatar: 'https://i.pravatar.cc/40?img=5' },
];

const ChatList = () => {
  return (
    <div className="w-1/4 border-r border-gray-200 overflow-y-auto bg-white">
      <div className="p-4 font-bold text-gray-600 border-b border-gray-200 flex justify-between items-center">
        <span>Your inbox</span>
        <span className="text-sm text-gray-500 cursor-pointer">5 Open ▼</span>
      </div>
      <div className="p-2 flex justify-between items-center text-sm text-gray-500 border-b border-gray-200">
        <span>Waiting longest</span>
        <button className="text-blue-600 font-semibold">Sort ▼</button>
      </div>
      <div className="divide-y">
        {conversations.map(conv => (
          <div key={conv.id} className="flex items-center px-4 py-3 hover:bg-gray-100 cursor-pointer">
            <img src={conv.avatar} alt={conv.name} className="w-10 h-10 rounded-full mr-3" />
            <div className="flex-1">
              <div className="font-medium text-gray-900">{conv.name}</div>
              <div className="text-sm text-gray-500 truncate">{conv.lastMessage}</div>
            </div>
            <div className="flex flex-col items-end">
              <div className="text-xs text-gray-400">{conv.time}</div>
              {conv.unread > 0 && (
                <div className="bg-red-600 text-white text-xs rounded-full px-2 mt-1">{conv.unread}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
