import React from 'react';

type Props = object;
type State = {
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
};

export default class FormAddCards extends React.Component<Props, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      name: '',
      birthday: '',
      pet: '',
      scales: false,
      horns: false,
      tail: false,
      ears: false,
      fangs: false,
      gender: '',
      img: '',
    };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { target } = event;
    let value;
    if (target.type === 'checkbox') {
      value = target.checked;
    } else if (target.type === 'file') {
      const file = target.files![0];
      value = window.URL.createObjectURL(file);
    } else {
      value = target.value;
    }
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({ [name]: value } as Pick<State, keyof State>);
    console.log(this.state);
  }

  render() {
    const { name, birthday, pet, scales, horns, tail, ears, fangs, gender } = this.state;
    return (
      <form className="form">
        <label className="form__label" htmlFor="name">
          name
          <input id="name" type="text" name="name" value={name} onChange={this.handleChange} />
        </label>

        <label className="form__label" htmlFor="birthday">
          birthday
          <input
            id="birthday"
            type="date"
            name="birthday"
            value={birthday}
            onChange={this.handleChange}
          />
        </label>

        <label className="form__label" htmlFor="pet">
          choose a pet:
          <select id="pet" name="pet" value={pet} onChange={this.handleChange}>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select>
        </label>

        <div className="form__label">
          Choose your pet features:
          <label htmlFor="scales">
            scales
            <input
              type="checkbox"
              id="scales"
              name="scales"
              checked={scales}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="horns">
            horns
            <input
              type="checkbox"
              id="horns"
              name="horns"
              checked={horns}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="tail">
            tail
            <input
              type="checkbox"
              id="tail"
              name="tail"
              checked={tail}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="ears">
            ears
            <input
              type="checkbox"
              id="ears"
              name="ears"
              checked={ears}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="fangs">
            fangs
            <input
              type="checkbox"
              id="fangs"
              name="fangs"
              checked={fangs}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <fieldset className="form__label">
          Select a gender of the pet:
          <label htmlFor="male">
            male
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={gender === 'male'}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="female">
            female
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={gender === 'female'}
              onChange={this.handleChange}
            />
          </label>
        </fieldset>

        <input
          type="file"
          name="img"
          onChange={this.handleChange}
          id="pet-img"
          accept="image/png, image/jpeg"
        />

        <button type="button" className="form__btn">
          CREATE
        </button>
      </form>
    );
  }
}
