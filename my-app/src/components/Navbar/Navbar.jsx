import React, { useState, useEffect } from 'react';
import { Menu, ChevronDown, LogOut } from 'lucide-react';

const Navbar = ({ currentPage, setCurrentPage, user, onSignOut }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const navItems = [
    { name: 'Home', key: 'home' },
    { name: 'Marketing', key: 'marketing' },
    { name: 'Sales', key: 'sales' },
    { name: 'Operations', key: 'operations' },
    { name: 'Finance', key: 'finance' },
    { name: 'My Platforms', key: 'platforms' },
    { name: 'Ask the Expert', key: 'expert' }
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setShowUserMenu(false);
        setShowMobileMenu(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-gradient-to-r from-indigo-800 via-purple-800 to-indigo-900 shadow-2xl border-b-2 border-indigo-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Left: Logo/Title (left-aligned after login, centered before login) */}
          {user ? (
            <div className="flex items-center flex-shrink-0">
              <span className="text-white font-extrabold text-2xl tracking-widest">MASTER</span>
              <span className="text-white/90 text-lg font-semibold whitespace-nowrap ml-2">Dashboard Portal</span>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <span className="text-white font-extrabold text-2xl tracking-widest">MASTER</span>
              <span className="text-white/90 text-lg font-semibold whitespace-nowrap ml-2">Dashboard Portal</span>
            </div>
          )}

          {/* Right: Nav/User menu (only after login) */}
          {user && (
            <div className="hidden lg:flex items-center space-x-1 flex-1 justify-end">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setCurrentPage(item.key)}
                  className={`px-3 py-1.5 text-base font-semibold rounded-md transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-indigo-900 border-none bg-transparent shadow-none ${
                    currentPage === item.key
                      ? 'text-white border-b-2 border-white'
                      : 'text-white/80 hover:text-white hover:border-b-2 hover:border-indigo-200'
                  }`}
                  style={{ background: 'none', boxShadow: 'none', border: 'none' }}
                >
                  {item.name}
                </button>
              ))}
              <div className="relative dropdown-container ml-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowUserMenu(!showUserMenu);
                  }}
                  className="flex items-center space-x-2 px-3 py-1.5 rounded-md text-base font-medium text-white hover:text-indigo-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-indigo-900 border-none bg-transparent shadow-none"
                  style={{ background: 'none', boxShadow: 'none', border: 'none' }}
                >
                  <img src={user.picture} alt={user.name} className="h-8 w-8 rounded-full border-2 border-white/40" />
                  <span className="hidden sm:inline whitespace-nowrap">{user.name.split(' ')[0]}</span>
                  <ChevronDown className="h-5 w-5" />
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl py-2 z-50 border border-gray-200 animate-fade-in">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <div className="font-medium text-gray-800">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                    <button
                      onClick={() => {
                        onSignOut();
                        setShowUserMenu(false);
                      }}
                      className="flex items-center px-4 py-2 text-base text-gray-700 hover:bg-gray-100 w-full text-left transition-colors"
                    >
                      <LogOut className="mr-2 h-5 w-5" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Mobile menu button: Only after login */}
          {user && (
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="text-white p-3 rounded-xl hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-indigo-900"
              >
                <Menu className="h-8 w-8" />
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu: Only show if logged in */}
        {user && showMobileMenu && (
          <div className="lg:hidden bg-white/10 backdrop-blur-md rounded-xl mt-2 mb-4 py-3 px-3 shadow-2xl animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  setCurrentPage(item.key);
                  setShowMobileMenu(false);
                }}
                className={`block w-full text-left px-5 py-3 text-lg font-medium rounded-xl transition-colors mb-2 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-indigo-900 border border-transparent ${
                  currentPage === item.key
                    ? 'bg-white text-indigo-800 font-bold shadow border-indigo-300'
                    : 'text-white hover:bg-white/10 hover:text-indigo-100'
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="border-t border-white/20 mt-2 pt-2">
              <div className="px-4 py-2 text-white/70 text-xs">
                Signed in as {user.name}
              </div>
              <button
                onClick={() => {
                  onSignOut();
                  setShowMobileMenu(false);
                }}
                className="block w-full text-left px-5 py-3 text-lg text-white hover:bg-white/10 hover:text-indigo-100 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-indigo-900"
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;