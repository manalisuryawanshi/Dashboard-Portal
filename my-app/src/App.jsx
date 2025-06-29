import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Chatbot from './components/Chatbot/Chatbot';
import DashboardCards from './components/Dashboard/DashboardCards';
import LoginPage from './components/Auth/LoginPage';
import GenericPage from './components/Pages/GenericPage';
import ExpertPage from './components/Pages/ExpertPage';
import { useAuth } from './hooks/useAuth';
import { useNavigation } from './hooks/useNavigation';
import { PAGE_CONFIGS } from './config/appConfig';
import PlatformsPage from './components/pages/PlatformsPage'; 

// Main App Component - Refactored with custom hooks
const App = () => {
  const { user, login, logout } = useAuth();
  const { currentPage, navigateTo } = useNavigation();

  // Only allow navigation if user is authenticated
  const protectedNavigateTo = (page) => {
    if (!user && page !== 'login') {
      navigateTo('login');
    } else {
      navigateTo(page);
    }
  };

  const handleLogin = async () => {
    try {
      await login(); // This will set the user in the hook
      navigateTo('home');
    } catch (err) {
      // Optionally handle error
    }
  };

  const handleSignOut = () => {
    logout();
    navigateTo('login');
  };

  const renderPage = () => {
    // Always show LoginPage if not authenticated
    if (!user) {
      return <LoginPage onLogin={handleLogin} />;
    }

    const pageComponents = {
      home: <DashboardCards setCurrentPage={protectedNavigateTo} />,
      expert: <ExpertPage />,
      marketing: <GenericPage {...PAGE_CONFIGS.marketing} />,
      sales: <GenericPage {...PAGE_CONFIGS.sales} />,
      operations: <GenericPage {...PAGE_CONFIGS.operations} />,
      finance: <GenericPage {...PAGE_CONFIGS.finance} />,
      platforms: <PlatformsPage />,
      reports: <GenericPage {...PAGE_CONFIGS.reports} />,
      settings: <GenericPage {...PAGE_CONFIGS.settings} />,
      help: <GenericPage {...PAGE_CONFIGS.help} />
    };

    return pageComponents[currentPage] || pageComponents.home;
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 flex flex-col">
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={protectedNavigateTo}
        user={user}
        onSignOut={handleSignOut}
      />
      <main className="flex-1 w-full h-full px-0">
        {renderPage()}
      </main>
      <Footer />
      {user && <Chatbot />}
    </div>
  );
};

export default App;