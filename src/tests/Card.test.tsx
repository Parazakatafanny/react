import React from 'react';
import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import Card from '../components/Card';

describe('Card component', () => {
  it('renders Card component with given props', () => {
    const props = {
      title: 'Adult Sterilized Dry Cat Food Sterile with Lamb',
      img: 'https://4lapy.ru/resize/480x480/upload/iblock/cf6/cf604af5f62886f0698380fb639f8356.jpg',
      description:
        'Wellkiss Sterilized food for neutered and sterilized cats with lamb is a complete, balanced diet for adult cats. The composition of the diet includes all the components necessary for the health of the cat. The feed does not contain wheat, thus reducing the risk of allergic reactions.',
      likes: '100',
      rating: '4.5',
    };

    const { container } = render(
      <Card
        title={props.title}
        img={props.img}
        description={props.description}
        likes={props.likes}
        rating={props.rating}
      />
    );
    // TODO: использовать getByText виесто селекторов
    const title = container.querySelector('.card__title');
    expect(title?.innerHTML).toEqual(props.title);
    const description = container.querySelector('.card__description');
    expect(description?.innerHTML).toEqual(props.description);
    const likes = container.querySelector('.card__info-likes');
    expect(likes?.textContent).toEqual(props.likes);
    const rating = container.querySelector('.card__info-rating');
    expect(rating?.textContent).toEqual(props.rating);
  });
});
