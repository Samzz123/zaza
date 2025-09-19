import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react'; // Using icons from lucide-react

// This is a placeholder component. You can build out your full chatbot logic here.
export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // When the chat is closed, show a floating button
  if (!isOpen) {
    return (
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-110 focus:outline-none z-50"
        aria-label="Open Chatbot"
      >
        <MessageSquare size={28} />
      </button>
    );
  }

  // When the chat is open, show the chat window
  return (
    <div className="fixed bottom-6 right-6 w-96 h-[60vh] bg-white rounded-lg shadow-2xl flex flex-col z-50">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-blue-600 text-white rounded-t-lg">
        <h3 className="font-bold text-lg">AI Assistant</h3>
        <button onClick={toggleChat} className="hover:bg-blue-700 p-1 rounded-full" aria-label="Close Chatbot">
          <X size={20} />
        </button>
      </div>

      {/* Chat messages area */}
      <div className="flex-1 p-4 overflow-y-auto">
        <p className="text-sm text-gray-600 bg-gray-100 p-3 rounded-lg">
          Hello! How can I help you with your college search today?
        </p>
        {/* Chat messages would go here */}
      </div>

      {/* Input area */}
      <div className="p-4 border-t border-gray-200">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}
