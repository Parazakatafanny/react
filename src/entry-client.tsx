import React from 'react';

import ReactDOM, { createRoot, hydrateRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from './routes';
import { store } from './app/store';

import './styles/style.scss';

const router = createBrowserRouter(routes);
const container = document.getElementById('app');

function FullApp() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

if (import.meta.hot || !container?.innerText) {
  const root = createRoot(container!);
  root.render(<FullApp />);
} else {
  hydrateRoot(container!, <FullApp />);
}
