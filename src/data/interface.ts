export default interface CardInterface {
  id: number;
  title: string;
  description: string;
  rating: string;
  likes: string;
  brand: string;
  category: string;
  thumbnail: string;
}

export interface CardFormData {
  name: string;
  birthday: string;
  pet: string;
  features: string[];
  gender: string;
  img: string;
}
