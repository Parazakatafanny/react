import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Main from './routers/Main';
import About from './routers/About';
import ErrorPage from './routers/Erorr';
import './styles/style.scss';

const router = createBrowserRouter([
  {
    path: '/main',
    element: <Main />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about-us',
    element: <About />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);
