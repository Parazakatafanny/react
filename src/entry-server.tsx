/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';

import type { Request } from 'express';
import ReactDOMServer from 'react-dom/server';
import {
  StaticHandlerContext,
  StaticRouterProvider,
  createStaticHandler,
  createStaticRouter,
} from 'react-router-dom/server';
import { Provider } from 'react-redux';

import { store } from './app/store';
import routes from './routes';
import './styles/style.scss';

function createFetchRequest(req: Request) {
  const origin = `${req.protocol}://${req.get('host')}`;
  // Note: This had to take originalUrl into account for presumably vite's proxying
  const url = new URL(req.originalUrl || req.url, origin);

  const controller = new AbortController();
  req.on('close', () => controller.abort());

  const headers = new Headers();

  for (const [key, values] of Object.entries(req.headers)) {
    if (values) {
      if (Array.isArray(values)) {
        for (const value of values) {
          headers.append(key, value);
        }
      } else {
        headers.set(key, values);
      }
    }
  }

  const init = {
    method: req.method,
    headers,
    signal: controller.signal,
  };

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    // @ts-ignore
    init.body = req.body;
  }

  return new Request(url.href, init);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, import/prefer-default-export
export async function render(req: Request, url: string) {
  const handler = createStaticHandler(routes);
  const fetchRequest = createFetchRequest(req);
  const context = (await handler.query(fetchRequest)) as StaticHandlerContext;

  const router = createStaticRouter(handler.dataRoutes, context);

  return ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouterProvider router={router} context={context} />
    </Provider>
  );
}
