import React from 'react';

const DashboardCards = ({ setCurrentPage }) => {
  const cards = [
    {
      title: 'Home',
      icon: '🏠',
      key: 'home',
      description: 'Dashboard overview'
    },
    {
      title: 'Marketing',
      icon: '📢',
      key: 'marketing',
      description: 'Campaign management'
    },
    {
      title: 'Sales',
      icon: '🛒',
      key: 'sales',
      description: 'Sales performance'
    },
    {
      title: 'Operations',
      icon: '⚙️',
      key: 'operations',
      description: 'Operational tools'
    },
    {
      title: 'Finance',
      icon: '🏛️',
      key: 'finance',
      description: 'Financial reports'
    },
    {
      title: 'My Platforms',
      icon: '🔗',
      key: 'platforms',
      description: 'Platform integration'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700">
      {/* Hero Section */}
      <div className="pt-20 pb-16 text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-wide">
          MY BUSINESS DASHBOARDS
        </h1>
      </div>

      {/* Single Horizontal Line of Dashboard Cards */}
      <div className="w-full px-4 pb-20">
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {cards.map((card) => (
            <button
              key={card.key}
              onClick={() => setCurrentPage(card.key)}
              className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group w-40 h-40 flex flex-col items-center justify-center"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-1 text-center">
                {card.title}
              </h3>
              <p className="text-gray-600 text-xs text-center">
                {card.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;