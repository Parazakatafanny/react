export interface CardFormData {
  name: string;
  birthday: string;
  pet: string;
  features: string[];
  gender: string;
  img: string;
}

export type Inputs = {
  name: string;
  birthday: string;
  pet: string;
  features: string[];
  gender: string;
  img: FileList;
};
