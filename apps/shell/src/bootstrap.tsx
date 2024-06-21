import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';
import { Auth0Provider } from '@auth0/auth0-react';

const { NX_PUBLIC_AUTH0_DOMAIN, NX_PUBLIC_AUTH0_CLIENT_ID } = process.env;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Auth0Provider
      domain={NX_PUBLIC_AUTH0_DOMAIN || ''}
      clientId={NX_PUBLIC_AUTH0_CLIENT_ID || ''}
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </StrictMode>
);
