import React from 'react';

export default class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <div className="container">
          <div className="search__inner">
            <input className="search__input" type="text" />
            <button className="search__button" type="button">
              search
            </button>
          </div>
        </div>
      </div>
    );
  }
}
