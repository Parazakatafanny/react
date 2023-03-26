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
  scales: boolean;
  horns: boolean;
  tail: boolean;
  ears: boolean;
  fangs: boolean;
  gender: string;
  img: string;
}
