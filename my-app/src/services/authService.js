// Mock Google Sign-In Service (replace with actual Google OAuth in production)
export const mockGoogleSignIn = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "John Smith",
        email: "john.smith@company.com",
        picture: "https://via.placeholder.com/40"
      });
    }, 1000);
  });
};

// In production, you would implement real Google OAuth here
export const googleSignIn = async () => {
  // Implementation for real Google OAuth
  // This would use Google's OAuth2 library
  throw new Error("Real Google OAuth not implemented yet");
};

// Sign out functionality
export const signOut = () => {
  // Clear any stored authentication tokens
  // In production, this would handle proper sign out
  return Promise.resolve();
};