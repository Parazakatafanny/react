import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Main from './routers/Main';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './styles/style.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
