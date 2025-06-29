import React, { useState } from 'react';
import { mockGoogleSignIn } from '../../services/authService';
import googleLogo from '../../assets/7123025_logo_google_g_icon.svg'; 

const LoginPage = ({ onLogin }) => {
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const user = await mockGoogleSignIn();
      onLogin(user);
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
          <p className="text-gray-600">Sign in to access your dashboard</p>
        </div>

        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 shadow-sm"
        >
          {loading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-400"></div>
          ) : (
            <>
              <img src={googleLogo} alt="Google logo" className="h-5 w-5" />
              <span>Sign in with Google</span>
            </>
          )}
        </button>

        <div className="mt-6 text-center text-sm text-gray-500">
          Secure authentication powered by Google
        </div>
      </div>
    </div>
  );
};

export default LoginPage;