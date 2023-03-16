import React from 'react';

type Props = object;
type State = {
  inputValue: string;
};

export default class Search extends React.Component<Props, State> {
  constructor(props: object) {
    super(props);

    this.state = {
      inputValue: '',
    };
  }

  componentDidMount() {
    const value = localStorage.getItem('search__input') || '';
    this.setState({ inputValue: value });
  }

  componentWillUnmount() {
    const { inputValue } = this.state;
    localStorage.setItem('search__input', inputValue);
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <div className="search">
        <div className="container">
          <div className="search__inner">
            <input
              value={inputValue}
              onChange={this.handleChange}
              className="search__input"
              type="text"
            />
            <button className="search__button" type="button">
              search
            </button>
          </div>
        </div>
      </div>
    );
  }
}
