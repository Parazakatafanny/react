import React from 'react';
import { render } from '@testing-library/react';
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

    const { getByText } = render(
      <Card
        title={props.title}
        img={props.img}
        description={props.description}
        likes={props.likes}
        rating={props.rating}
      />
    );
    expect(getByText(props.title)).toBeInTheDocument();
    expect(getByText(props.description)).toBeInTheDocument();
    expect(getByText(props.likes)).toBeInTheDocument();
    expect(getByText(props.rating)).toBeInTheDocument();
  });
})
