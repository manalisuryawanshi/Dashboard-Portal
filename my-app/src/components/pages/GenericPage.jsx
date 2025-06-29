import React from 'react';

const GenericPage = ({ title, description }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="w-full px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
          <p className="text-gray-600 text-lg mb-8">{description}</p>
          
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Coming Soon</h2>
            <p className="text-gray-600">
              This section is under development. Advanced {title.toLowerCase()} features and analytics will be available here.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Analytics</h3>
              <p className="text-gray-600 text-sm">Comprehensive reporting and insights</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Management</h3>
              <p className="text-gray-600 text-sm">Streamlined workflow tools</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Integration</h3>
              <p className="text-gray-600 text-sm">Connect with your existing tools</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericPage;