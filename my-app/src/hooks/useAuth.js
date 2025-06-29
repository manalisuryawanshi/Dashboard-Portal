import { useState, useCallback } from 'react';
import { mockGoogleSignIn, signOut } from '../services/authService';

// Custom hook for authentication management
export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const userData = await mockGoogleSignIn();
      setUser(userData);
      return userData;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    setLoading(true);
    try {
      await signOut();
      setUser(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const isAuthenticated = Boolean(user);

  return {
    user,
    loading,
    error,
    isAuthenticated,
    login,
    logout,
    setUser // For direct user updates if needed
  };
};