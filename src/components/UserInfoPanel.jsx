import React from 'react';

const UserInfoPanel = () => {
  return (
    <div className="w-1/4 bg-gray-50 p-6 overflow-y-auto">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
        <div>
          <div className="text-xl font-semibold">John Doe</div>
          <div className="text-green-500 text-sm">Online</div>
        </div>
      </div>
      <div className="text-gray-700 mb-3">
        <div><span className="font-semibold">Email:</span> john@example.com</div>
        <div><span className="font-semibold">Location:</span> New York</div>
        <div><span className="font-semibold">Phone:</span> (123) 456-7890</div>
        <div><span className="font-semibold">Company:</span> Example Inc.</div>
      </div>
      <div className="mt-6">
        <div className="font-semibold mb-2">Tags</div>
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">Important</span>
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs">VIP</span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs">New</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfoPanel;
