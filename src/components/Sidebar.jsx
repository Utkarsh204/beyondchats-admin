import React, { useState } from 'react';
import {
  HomeIcon,
  ChatBubbleLeftRightIcon,
  Cog6ToothIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const [active, setActive] = useState('chat');

  const menuItems = [
    { id: 'home', icon: HomeIcon, label: 'Home' },
    { id: 'chat', icon: ChatBubbleLeftRightIcon, label: 'Chat' },
    { id: 'inbox', icon: InboxIcon, label: 'Inbox' },
    { id: 'users', icon: UserGroupIcon, label: 'Users' },
    { id: 'settings', icon: Cog6ToothIcon, label: 'Settings' },
  ];

  return (
    <div className="w-24 bg-gray-900 text-white flex flex-col items-center py-6 space-y-8">
      <div className="text-3xl font-bold cursor-pointer select-none">B</div>
      <nav className="flex flex-col items-center space-y-6 w-full">
        {menuItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className={`flex flex-col items-center justify-center w-full py-2 hover:bg-gray-700 focus:bg-gray-700 rounded transition-colors duration-200 ${
              active === id ? 'bg-blue-600' : ''
            }`}
            aria-label={label}
          >
            <Icon
              className={`w-7 h-7 ${
                active === id ? 'text-white' : 'text-gray-400 group-hover:text-white'
              }`}
            />
            <span
              className={`mt-1 text-xs font-semibold ${
                active === id ? 'text-white' : 'text-gray-400'
              }`}
            >
              {label}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
