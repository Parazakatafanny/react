import React from 'react';
import FormAddCards from '../components/FormAddCard';
import CardsList from '../components/CardFormList';

export default class MainLayout extends React.Component {
  render() {
    return (
      <>
        <FormAddCards />
        <CardsList />
      </>
    );
  }
}
