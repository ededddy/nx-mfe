import { useAuth0 } from '@auth0/auth0-react';

export function User() {
  const { isAuthenticated, user, loginWithPopup } = useAuth0();
  if (!isAuthenticated) {
    return (
      <div>
        <h1 className="text-2xl">Please Log in to use.</h1>
        <button
          className="bg-cyan-500 text-lg shadow-lg shadow-cyan-500/50 text-white p-2 rounded"
          onClick={() => loginWithPopup()}
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div>
      <img src={user?.picture} alt="" />
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
