import React from 'react';

import MainLayout from './components/MainLayout';
import Main from './routers/Main';
import About from './routers/About';
import AddCard from './routers/AddCard';
import ErrorPage from './routers/Erorr';

export default [
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
];
