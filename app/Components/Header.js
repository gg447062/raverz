import React from 'react';
import { useMoralis } from 'react-moralis';

const Header = () => {
  const { user, authenticate, logout, isAuthenticated, isAuthenticating } =
    useMoralis();
  async function login() {
    if (!isAuthenticated) {
      authenticate();
    }
  }
  return (
    <header>
      {isAuthenticated ? (
        <button>mint</button>
      ) : (
        <button onClick={login} disabled={isAuthenticating}>
          connect
        </button>
      )}
      <img src="assets/m27ravers.png" alt="ravers logo" />
    </header>
  );
};

export default Header;
