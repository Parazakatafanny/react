import React from "react";

export default class Search extends React.Component {
  render(): React.ReactNode {
    return <>
      <div className="search">
      <div className="container">
        <div className="search__inner">
          <input className="search__input" type="text" />
          <button className="search__button">search</button>
        </div>
      </div>
    </div>
    </>;
  }
}