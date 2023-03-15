import React from 'react';
import cat from '../assets/cat.png';

export default function ErrorPage() {
  return (
    <div className="error-page">
      <h1 className="error-page__title">ERROR 404</h1>
      <p className="error-page__text">page not found</p>
      <img className="error-page__img" src={cat} alt="cat" />
    </div>
  );
}
