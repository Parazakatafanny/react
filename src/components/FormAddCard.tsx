import React from 'react';
import { CardFormData } from '../data/interface';

type ComponentProps = {
  onSubmit: (data: CardFormData) => void;
};

type ComponentState = {
  errorName: boolean;
  errorBithday: boolean;
  errorFeature: boolean;
  errorGender: boolean;
  errorFile: boolean;
  message: boolean;
};

export default class FormAddCards extends React.Component<ComponentProps, ComponentState> {
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

    this.state = {
      errorName: false,
      errorBithday: false,
      errorFeature: false,
      errorGender: false,
      errorFile: false,
      message: false,
    };
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { onSubmit } = this.props;

    this.validateInputs(() => {
      const { errorName, errorBithday, errorFeature, errorFile, errorGender } = this.state;

      if (!errorName && !errorBithday && !errorFeature && !errorFile && !errorGender) {
        this.setState({ message: true });
        setTimeout(() => {
          this.setState({ message: false });
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
        }, 500);
      }
    });
  }

  validateInputs(callback: () => void) {
    const gender = this.genderMale.current!.checked || this.genderFemale.current!.checked;
    const features =
      this.scales.current!.checked ||
      this.horns.current!.checked ||
      this.tail.current!.checked ||
      this.ears.current!.checked ||
      this.fangs.current!.checked;

    this.setState(
      {
        errorName: !this.name.current!.value,
        errorBithday: !this.birthday.current!.value,
        errorFile: !this.img.current!.files![0],
        errorGender: !gender,
        errorFeature: !features,
      },
      callback
    );
  }

  render() {
    const { errorName, errorBithday, errorFeature, errorFile, errorGender, message } = this.state;
    return (
      <>
        {message ? <div className="message">card added</div> : null}
        <form className="form" ref={this.formLink} onSubmit={this.handleSubmit}>
          <label className="form__label" htmlFor="name">
            name
            <input id="name" type="text" name="name" ref={this.name} />
          </label>
          {errorName ? <div className="error-message">the field should not be empty</div> : null}
          <label className="form__label" htmlFor="birthday">
            birthday
            <input id="birthday" type="date" name="birthday" ref={this.birthday} />
          </label>
          {errorBithday ? <div className="error-message">the field should not be empty</div> : null}

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
          {errorFeature ? <div className="error-message">the field should not be empty</div> : null}

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
          {errorGender ? <div className="error-message">the field should not be empty</div> : null}

          <input
            type="file"
            name="img"
            id="pet-img"
            accept="image/png, image/jpeg"
            ref={this.img}
          />

          {errorFile ? <div className="error-message">the field should not be empty</div> : null}

          <button type="submit" className="form__btn">
            CREATE
          </button>
        </form>
      </>
    );
  }
}
