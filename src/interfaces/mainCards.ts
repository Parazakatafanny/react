export interface CardType {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
}

export interface CardResponse {
  results: CardType[];
}
