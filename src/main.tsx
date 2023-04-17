import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import MainLayout from './components/MainLayout';
import Main from './routers/Main';
import About from './routers/About';
import AddCard from './routers/AddCard';
import ErrorPage from './routers/Erorr';
import './styles/style.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'about-us',
        element: <About />,
      },
      {
        path: 'add-card',
        element: <AddCard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
