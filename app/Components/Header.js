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
        <Minter isAuthenticated={isAuthenticated} user={user} />
      ) : (
        <button onClick={login} disabled={isAuthenticating}>
          connect
        </button>
      )}
      <img src="assets/m27ravers_straight.png" alt="ravers logo" />
      {user ? (
        <div id="user-info">
          <p id="address">{user.get('ethAddress')}</p>
          <button onClick={logout}>disconnect</button>
        </div>
      ) : (
        <p />
      )}
    </header>
  );
};

export default Header;
