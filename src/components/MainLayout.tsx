import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

export default class MainLayout extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  }
}
