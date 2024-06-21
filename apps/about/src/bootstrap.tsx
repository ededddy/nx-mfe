import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './app/app';

const { NX_PUBLIC_AUTH0_DOMAIN, NX_PUBLIC_AUTH0_CLIENT_ID } = process.env;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    {NX_PUBLIC_AUTH0_CLIENT_ID && NX_PUBLIC_AUTH0_DOMAIN ? (
      <Auth0Provider
        domain={NX_PUBLIC_AUTH0_DOMAIN}
        clientId={NX_PUBLIC_AUTH0_CLIENT_ID}
        useRefreshTokens={true}
        cacheLocation="localstorage"
      >
        <App />
      </Auth0Provider>
    ) : (
      <h1 className="text-3xl">Unknow authentication provider</h1>
    )}
  </StrictMode>
);
