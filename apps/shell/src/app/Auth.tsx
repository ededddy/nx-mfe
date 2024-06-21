import { useAuth0 } from '@auth0/auth0-react';

export function Auth() {
  const { isAuthenticated, loginWithPopup, logout } = useAuth0();
  return (
    <div>
      {!isAuthenticated ? (
        <button
          className="bg-cyan-500 text-lg shadow-lg shadow-cyan-500/50 text-white p-2 rounded"
          onClick={() => {
            loginWithPopup();
          }}
        >
          Login
        </button>
      ) : (
        <button
          className="bg-red-500 text-lg shadow-lg shadow-red-500/50 text-white p-2 rounded"
          onClick={() => {
            logout({ logoutParams: { returnTo: window.location.origin } });
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
}
