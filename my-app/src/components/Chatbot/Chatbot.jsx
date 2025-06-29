import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chatbot Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-40 animate-pulse"
        title="Ask the Expert - Business Health Assistant"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chatbot Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-5xl h-[85vh] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-t-lg">
              <div>
                <h3 className="text-lg font-semibold">Business Health Expert</h3>
                <p className="text-sm text-white/80">Ask me anything about your business!</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors p-1 rounded-full hover:bg-white/10"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <iframe
                src="https://business-health-chatbot-47845101493.us-west1.run.app/"
                className="w-full h-full border-0"
                title="Business Health Chatbot"
                allow="microphone; camera; clipboard-read; clipboard-write"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;