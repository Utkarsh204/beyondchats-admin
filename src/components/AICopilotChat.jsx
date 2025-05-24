import React, { useState, useEffect, useRef } from 'react';
import { useChat } from '../context/ChatContext';

const AICopilotChat = () => {
  const { activeChat, sendMessage } = useChat();
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const debounceTimeout = useRef(null);

  const fetchAISuggestions = async (text) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/openai/suggestions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: text }),
      });
      const data = await response.json();
      if (data.suggestions && data.suggestions.length > 0) {
        setSuggestions(data.suggestions);
        // Automatically send the first suggestion as a message
        handleSendSuggestion(data.suggestions[0]);
      } else {
        setSuggestions([
          "Sorry, I'm currently unable to process your request due to quota limits.",
          "Please try again later or check your OpenAI subscription.",
        ]);
      }
    } catch (error) {
      console.error('Error fetching AI suggestions:', error);
      setSuggestions([
        "Sorry, I'm currently unable to process your request due to quota limits.",
        "Please try again later or check your OpenAI subscription.",
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Allow multiple words with spaces
    setInput(value);
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    if (value.trim().length >= 1) {
      debounceTimeout.current = setTimeout(() => {
        fetchAISuggestions(value);
      }, 500);
    } else {
      setSuggestions([]);
    }
  };

  const handleSendSuggestion = (suggestion) => {
    if (!activeChat) return;
    sendMessage(activeChat.id, {
      id: Date.now(),
      sender: 'agent',
      text: suggestion,
      timestamp: new Date().toISOString(),
    });
    setInput('');
    setSuggestions([]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      if (!activeChat) return;
      sendMessage(activeChat.id, {
        id: Date.now(),
        sender: 'user',
        text: input.trim(),
        timestamp: new Date().toISOString(),
      });
      setInput('');
      setSuggestions([]);
    }
  };

  return (
    <div className="p-4 border-t border-gray-200">
      <input
        type="text"
        placeholder="Ask AI Copilot..."
        className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2 outline-none"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        disabled={loading}
      />
      {loading && <div className="text-sm text-gray-500">Loading suggestions...</div>}
      {!loading && suggestions.length > 0 && (
        <ul className="bg-white border border-gray-300 rounded-md max-h-40 overflow-y-auto">
          {suggestions.map((sugg, idx) => (
            <li
              key={idx}
              className="px-3 py-2 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
              onClick={() => handleSendSuggestion(sugg)}
            >
              {sugg.replace(/^\d+\.\s*/, '')}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AICopilotChat;

