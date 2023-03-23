import React from 'react';

export default class FormAddCards extends React.Component {
  private formLink: React.RefObject<HTMLFormElement>;

  private name: React.RefObject<HTMLInputElement>;

  private birthday: React.RefObject<HTMLInputElement>;

  private pet: React.RefObject<HTMLSelectElement>;

  private scales: React.RefObject<HTMLInputElement>;

  private img: React.RefObject<HTMLInputElement>;

  private horns: React.RefObject<HTMLInputElement>;

  private tail: React.RefObject<HTMLInputElement>;

  private ears: React.RefObject<HTMLInputElement>;

  private fangs: React.RefObject<HTMLInputElement>;

  private gender: React.RefObject<HTMLInputElement>;

  constructor(props: object) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.formLink = React.createRef();
    this.name = React.createRef();
    this.birthday = React.createRef();
    this.pet = React.createRef();
    this.scales = React.createRef();
    this.horns = React.createRef();
    this.tail = React.createRef();
    this.ears = React.createRef();
    this.fangs = React.createRef();
    this.gender = React.createRef();
    this.img = React.createRef();
  }

  handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log(
      `A name was submitted: ${this.name.current?.value}, ${this.pet.current?.value}, ${this.birthday.current?.value}`
    );

    this.formLink.current?.reset();
    event.preventDefault();
  }

  render() {
    return (
      <form className="form" ref={this.formLink}>
        <label className="form__label" htmlFor="name">
          name
          <input id="name" type="text" name="name" ref={this.name} />
        </label>

        <label className="form__label" htmlFor="birthday">
          birthday
          <input id="birthday" type="date" name="birthday" ref={this.birthday} />
        </label>

        <label className="form__label" htmlFor="pet">
          choose a pet:
          <select id="pet" name="pet" ref={this.pet}>
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
            <input type="checkbox" id="scales" name="scales" ref={this.scales} />
          </label>
          <label htmlFor="horns">
            horns
            <input type="checkbox" id="horns" name="horns" ref={this.horns} />
          </label>
          <label htmlFor="tail">
            tail
            <input type="checkbox" id="tail" name="tail" ref={this.tail} />
          </label>
          <label htmlFor="ears">
            ears
            <input type="checkbox" id="ears" name="ears" ref={this.ears} />
          </label>
          <label htmlFor="fangs">
            fangs
            <input type="checkbox" id="fangs" name="fangs" ref={this.fangs} />
          </label>
        </div>

        <fieldset className="form__label">
          Select a gender of the pet:
          <label htmlFor="male">
            male
            <input type="radio" id="male" name="gender" value="male" ref={this.gender} />
          </label>
          <label htmlFor="female">
            female
            <input type="radio" id="female" name="gender" value="female" ref={this.gender} />
          </label>
        </fieldset>

        <input type="file" name="img" id="pet-img" accept="image/png, image/jpeg" ref={this.img} />

        <button type="button" onClick={this.handleSubmit} className="form__btn">
          CREATE
        </button>
      </form>
    );
  }
}
