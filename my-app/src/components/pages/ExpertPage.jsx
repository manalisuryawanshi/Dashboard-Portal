import React, { useState } from 'react';
import { X } from 'lucide-react';

const ExpertPage = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="w-full px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Ask the Expert</h1>
          <p className="text-gray-600 text-lg mb-8">
            Get instant answers from our AI-powered business health expert. Ask questions about operations, 
            finance, marketing strategies, and more!
          </p>
          
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Business Health Assistant</h2>
            <p className="text-gray-600 mb-4">
              Our AI expert can help you with:
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Business strategy and planning</li>
              <li>• Financial analysis and advice</li>
              <li>• Marketing and sales optimization</li>
              <li>• Operational efficiency</li>
              <li>• Industry insights and trends</li>
            </ul>
          </div>

          <div className="text-center">
            <button
              onClick={() => setShowChatbot(true)}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Start Conversation with Expert
            </button>
          </div>
        </div>
      </div>

      {/* Embedded Chatbot */}
      {showChatbot && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-5xl h-[85vh] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-t-lg">
              <div>
                <h3 className="text-lg font-semibold">Business Health Expert</h3>
                <p className="text-sm text-white/80">Ask me anything about your business!</p>
              </div>
              <button
                onClick={() => setShowChatbot(false)}
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
    </div>
  );
};

export default ExpertPage;