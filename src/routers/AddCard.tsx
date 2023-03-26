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
  }

  render() {
    const { data } = this.state;
    return (
      <div className="add-card">
        <FormAddCards onSubmit={this.handleData} />
        <CardsList cards={data} />
      </div>
    );
  }
}
