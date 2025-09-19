import React, { useState, useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';

// --- Helper component for the loading animation ---
const LoadingDots = () => (
  <div className="flex items-center space-x-1">
    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
  </div>
);

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // --- Scroll to the bottom of the chat on new message ---
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // --- Toggle chat window ---
  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      // Add initial greeting when chat is first opened
      setMessages([
        { text: "Hello! I'm your AI career assistant. Ask me anything about colleges, courses, or career paths!", sender: 'ai' }
      ]);
    }
  };

  // --- Handle sending a message ---
  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // --- Placeholder for API Call ---
    // Here you would call your AI model's API
    // For now, we'll simulate a response
    setTimeout(() => {
      const aiResponse = { text: "This is a simulated response. Replace this with a real API call.", sender: 'ai' };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* --- Chat Trigger Button with Custom Icon --- */}
      <button
        onClick={toggleChat}
        className="fixed top-4 right-28 z-50 bg-transparent border-none rounded-full p-0 shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Toggle AI Chat"
      >
        <img src="/chatbot-icon.png" alt="AI Chatbot Icon" className="w-16 h-16 rounded-full cursor-pointer" />
      </button>

      {/* --- Chat Interface Window --- */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex justify-center items-center z-[100]">
            <div className="bg-white w-full max-w-2xl h-[80vh] rounded-xl shadow-2xl flex flex-col overflow-hidden animate-fade-in">
                
                {/* Header */}
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                    <h3 className="font-bold text-lg">AI Career Assistant</h3>
                    <button onClick={toggleChat} className="p-1 rounded-full hover:bg-white/20 transition-colors" aria-label="Close Chat">
                        <X size={24} />
                    </button>
                </div>

                {/* Messages Area */}
                <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
                    <div className="flex flex-col space-y-4">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-md px-4 py-2 rounded-xl ${msg.sender === 'user' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="max-w-md px-4 py-2 rounded-xl bg-gray-200 text-gray-800">
                                    <LoadingDots />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-gray-200 bg-white">
                    <div className="relative">
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask about a career path..."
                            className="w-full px-4 py-3 pr-12 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            rows="1"
                        />
                        <button onClick={handleSend} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-md text-gray-500 hover:bg-orange-500 hover:text-white transition-colors" aria-label="Send Message">
                            <Send size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
      )}
      
      {/* Adding some CSS for the fade-in animation */}
      <style>{`
        @keyframes fade-in {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
            animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}

