import React from 'react';
import ReactDOM from 'react-dom';
import { MoralisProvider } from 'react-moralis';
import App from './app';

const serverUrl = process.env.SERVER_URL;
const appId = process.env.APP_ID;

ReactDOM.render(
  <MoralisProvider serverUrl={serverUrl} appId={appId}>
    <App />
  </MoralisProvider>,
  document.getElementById('app')
);
