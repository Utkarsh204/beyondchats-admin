import React from 'react';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const Topbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200 bg-white">
      <input
        type="text"
        placeholder="Search..."
        className="w-1/3 px-4 py-2 border rounded-md text-sm outline-none"
      />
      <div className="flex items-center space-x-6">
        <button aria-label="Notifications" className="relative">
          <BellIcon className="w-6 h-6 text-gray-600 hover:text-gray-900" />
          <span className="absolute top-0 right-0 block w-2 h-2 bg-red-600 rounded-full"></span>
        </button>
        <button aria-label="User menu">
          <UserCircleIcon className="w-8 h-8 text-gray-600 hover:text-gray-900" />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
