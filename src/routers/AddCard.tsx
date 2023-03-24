import React from 'react';
import { CardFormData } from '../data/interface';
import FormAddCards from '../components/FormAddCard';
import CardsList from '../components/CardFormList';

type Props = object;

type State = {
  data: Array<CardFormData>;
};

export default class AddCard extends React.Component<Props, State> {
  constructor(props: object) {
    super(props);
    this.state = { data: [] };
    this.handleData = this.handleData.bind(this);
  }

  handleData(dataCard: CardFormData) {
    this.setState((prevState) => ({
      data: [...prevState.data, dataCard],
    }));
    // eslint-disable-next-line react/destructuring-assignment
    console.log(this.state.data);
  }

  render() {
    const { data } = this.state;
    return (
      <>
        <FormAddCards onSubmit={this.handleData} />
        <CardsList />
      </>
    );
  }
}
