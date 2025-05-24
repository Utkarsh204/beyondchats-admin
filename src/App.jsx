import React from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';
import AICopilotPanel from './components/AICopilotPanel';
import { ChatProvider } from './context/ChatContext';

export default function App() {
  return (
    <ChatProvider>
      <div className="flex h-screen overflow-hidden bg-gray-50">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <div className="flex flex-col flex-1">
          {/* Topbar */}
          <Topbar />

          {/* Main area: three columns */}
          <div className="flex flex-1 overflow-hidden">
            {/* Chat list / Inbox */}
            <ChatList />

            {/* Chat window */}
            <ChatWindow />

            {/* AI Copilot / Details panel */}
            <AICopilotPanel />
          </div>
        </div>
      </div>
    </ChatProvider>
  );
}
