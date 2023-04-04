import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CardFormData } from '../data/interface';

type ComponentProps = {
  onSubmitData: (data: CardFormData) => void;
};

type Inputs = {
  name: string;
  birthday: string;
  pet: string;
  features: string[];
  gender: string;
  img: FileList;
};

export default function FormAddCards(props: ComponentProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { onSubmitData } = props;

  const [message, setMessage] = useState(false);

  function onSubmit(data: Inputs) {
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
      onSubmitData({
        pet: data.pet,
        name: data.name,
        birthday: data.birthday,
        features: data.features,
        gender: data.gender,
        img: URL.createObjectURL(data.img[0]),
      } as CardFormData);
      reset();
    }, 500);
  }

  return (
    <>
      {message ? <div className="message">card added</div> : null}
      <form className="form" onSubmit={handleSubmit((data) => onSubmit(data as Inputs))}>
        <label className="form__label" htmlFor="name">
          name
          <input id="name" type="text" {...register('name', { required: true })} />
        </label>
        {errors.name && <div className="error-message">the field should not be empty</div>}
        <label className="form__label" htmlFor="birthday">
          birthday
          <input id="birthday" type="date" {...register('birthday', { required: true })} />
        </label>
        {errors.birthday && <div className="error-message">the field should not be empty</div>}

        <label className="form__label" htmlFor="pet">
          choose a pet:
          <select id="pet" {...register('pet', { required: true })}>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select>
        </label>

        <fieldset className="form__label">
          Choose your pet features:
          <label htmlFor="scales">
            scales
            <input type="checkbox" value="scales" {...register('features', { required: true })} />
          </label>
          <label htmlFor="horns">
            horns
            <input type="checkbox" value="horns" {...register('features', { required: true })} />
          </label>
          <label htmlFor="tail">
            tail
            <input type="checkbox" value="tail" {...register('features', { required: true })} />
          </label>
          <label htmlFor="ears">
            ears
            <input type="checkbox" value="ears" {...register('features', { required: true })} />
          </label>
          <label htmlFor="fangs">
            fangs
            <input type="checkbox" value="fangs" {...register('features', { required: true })} />
          </label>
        </fieldset>
        {errors.features && <div className="error-message">the field should not be empty</div>}

        <fieldset className="form__label">
          Select a gender of the pet:
          <label htmlFor="male">
            male
            <input
              type="radio"
              id="male"
              value="male"
              {...register('gender', { required: true })}
            />
          </label>
          <label htmlFor="female">
            female
            <input
              type="radio"
              id="female"
              value="female"
              {...register('gender', { required: true })}
            />
          </label>
        </fieldset>
        {errors.gender && <div className="error-message">the field should not be empty</div>}

        <input
          type="file"
          id="pet-img"
          accept="image/png, image/jpeg"
          {...register('img', { required: true })}
        />
        {errors.img && <div className="error-message">the field should not be empty</div>}

        <button type="submit" className="form__btn">
          CREATE
        </button>
      </form>
    </>
  );
}
