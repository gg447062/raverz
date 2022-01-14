import React from 'react';
import { useMoralis } from 'react-moralis';
import Minter from './Minter';

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
        <Minter />
      ) : (
        <button onClick={login} disabled={isAuthenticating}>
          connect
        </button>
      )}
      <img src="assets/m27ravers_straight.png" alt="ravers logo" />
    </header>
  );
};

export default Header;
