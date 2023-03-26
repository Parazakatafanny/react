import React from 'react';
import { CardFormData } from '../data/interface';

type ComponentProps = {
  onSubmit: (data: CardFormData) => void;
};

export default class FormAddCards extends React.Component<ComponentProps> {
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

  private genderMale: React.RefObject<HTMLInputElement>;

  private genderFemale: React.RefObject<HTMLInputElement>;

  private message: React.RefObject<HTMLDivElement>;

  private errorName: React.RefObject<HTMLDivElement>;

  private errorBithday: React.RefObject<HTMLDivElement>;

  private errorFeature: React.RefObject<HTMLDivElement>;

  private errorGender: React.RefObject<HTMLDivElement>;

  private errorFile: React.RefObject<HTMLDivElement>;

  constructor(props: ComponentProps) {
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
    this.genderMale = React.createRef();
    this.genderFemale = React.createRef();
    this.img = React.createRef();
    this.message = React.createRef();
    this.errorName = React.createRef();
    this.errorBithday = React.createRef();
    this.errorFeature = React.createRef();
    this.errorGender = React.createRef();
    this.errorFile = React.createRef();
  }

  handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const { onSubmit } = this.props;
    const currentGender = this.genderFemale.current!.checked || this.genderMale.current!.checked;
    const currentFeatures =
      this.scales.current!.checked ||
      this.horns.current!.checked ||
      this.tail.current!.checked ||
      this.ears.current!.checked ||
      this.fangs.current!.checked;

    if (!this.name.current!.value) {
      this.errorName.current!.style.display = 'block';
    } else {
      this.errorName.current!.style.display = 'none';
    }

    if (!this.birthday.current!.value) {
      this.errorBithday.current!.style.display = 'block';
    } else {
      this.errorBithday.current!.style.display = 'none';
    }

    if (!this.img.current!.files![0]) {
      this.errorFile.current!.style.display = 'block';
    } else {
      this.errorFile.current!.style.display = 'none';
    }

    if (currentGender) {
      this.errorGender.current!.style.display = 'none';
    } else {
      this.errorGender.current!.style.display = 'block';
    }

    if (currentFeatures) {
      this.errorFeature.current!.style.display = 'none';
    } else {
      this.errorFeature.current!.style.display = 'block';
    }

    if (
      this.name.current!.value &&
      this.birthday.current!.value &&
      this.img.current!.files![0] &&
      currentGender &&
      currentFeatures
    ) {
      this.message.current!.style.display = 'block';
      setTimeout(() => {
        this.message.current!.style.display = 'none';
        const gender = this.genderMale.current!.checked ? 'male' : 'female';
        onSubmit({
          name: this.name.current!.value,
          birthday: this.birthday.current!.value,
          pet: this.pet.current!.value,
          scales: this.scales.current!.checked,
          horns: this.horns.current!.checked,
          tail: this.tail.current!.checked,
          ears: this.ears.current!.checked,
          fangs: this.fangs.current!.checked,
          gender,
          img: URL.createObjectURL(this.img.current!.files![0]),
        });
        this.formLink.current?.reset();
        event.preventDefault();
      }, 500);
    }
  }

  render() {
    return (
      <>
        <div ref={this.message} className="message">
          card added
        </div>
        <form className="form" ref={this.formLink}>
          <label className="form__label" htmlFor="name">
            name
            <input id="name" type="text" name="name" ref={this.name} />
          </label>
          <div className="error-message" ref={this.errorName}>
            the field should not be empty
          </div>
          <label className="form__label" htmlFor="birthday">
            birthday
            <input id="birthday" type="date" name="birthday" ref={this.birthday} />
          </label>
          <div className="error-message" ref={this.errorBithday}>
            the field should not be empty
          </div>

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
          <div className="error-message" ref={this.errorFeature}>
            the field should not be empty
          </div>

          <fieldset className="form__label">
            Select a gender of the pet:
            <label htmlFor="male">
              male
              <input type="radio" id="male" name="gender" value="male" ref={this.genderMale} />
            </label>
            <label htmlFor="female">
              female
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                ref={this.genderFemale}
              />
            </label>
          </fieldset>
          <div className="error-message" ref={this.errorGender}>
            the field should not be empty
          </div>
          {/* TODO: Fix the resulting value radio button */}
          <input
            type="file"
            name="img"
            id="pet-img"
            accept="image/png, image/jpeg"
            ref={this.img}
          />

          <div className="error-message" ref={this.errorFile}>
            the field should not be empty
          </div>

          <button type="button" onClick={this.handleSubmit} className="form__btn">
            CREATE
          </button>
        </form>
      </>
    );
  }
}
