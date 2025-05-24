import React, { useState } from 'react';
import AICopilotChat from './AICopilotChat';

const sections = [
  {
    id: 'copilot',
    title: 'AI Copilot',
    content: <AICopilotChat />,
  },
  {
    id: 'details',
    title: 'Details',
    content: (
      <div className="p-4 text-left text-gray-700 space-y-4">
        <div>
          <div className="font-semibold">Assignee</div>
          <div>Brian Byrne</div>
        </div>
        <div>
          <div className="font-semibold">Team</div>
          <div>Unassigned</div>
        </div>
        <div>
          <div className="font-semibold cursor-pointer">LINKS</div>
          <ul className="list-none pl-0 mt-2 space-y-2">
            <li className="flex justify-between items-center">
              <span>Tracker ticket</span>
              <button className="bg-gray-200 rounded px-2 py-0.5">+</button>
            </li>
            <li className="flex justify-between items-center">
              <span>Back-office tickets</span>
              <button className="bg-gray-200 rounded px-2 py-0.5">+</button>
            </li>
            <li className="flex justify-between items-center">
              <span>Side conversations</span>
              <button className="bg-gray-200 rounded px-2 py-0.5">+</button>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-semibold cursor-pointer">USER DATA</div>
          {/* Add user data details here */}
        </div>
        <div>
          <div className="font-semibold cursor-pointer">CONVERSATION ATTRIBUTES</div>
          {/* Add conversation attributes here */}
        </div>
        <div>
          <div className="font-semibold cursor-pointer">COMPANY DETAILS</div>
          {/* Add company details here */}
        </div>
        <div>
          <div className="font-semibold cursor-pointer">SALESFORCE</div>
          {/* Add Salesforce details here */}
        </div>
        <div>
          <div className="font-semibold cursor-pointer">STRIPE</div>
          {/* Add Stripe details here */}
        </div>
        <div>
          <div className="font-semibold cursor-pointer">JIRA FOR TICKETS</div>
          {/* Add Jira tickets here */}
        </div>
      </div>
    ),
  },
];

const AICopilotPanel = () => {
  const [activeTab, setActiveTab] = useState('copilot');

  return (
    <div className="w-1/4 bg-white border-l border-gray-200 flex flex-col">
      <div className="flex border-b border-gray-200">
        <button
          className={`flex-1 py-2 text-center font-semibold ${
            activeTab === 'copilot'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('copilot')}
        >
          AI Copilot
        </button>
        <button
          className={`flex-1 py-2 text-center font-semibold ${
            activeTab === 'details'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('details')}
        >
          Details
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">{sections.find(s => s.id === activeTab)?.content}</div>
    </div>
  );
};

export default AICopilotPanel;
