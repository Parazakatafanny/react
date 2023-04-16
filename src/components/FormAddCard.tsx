import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { addNewCard, addCurrentCard } from '../app/cardsForm';
import { useAppDispatch, useAppSelector } from '../app/store';
import { CardFormData, Inputs } from '../interfaces/cardForm';

export default function FormAddCards() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const cardData = useAppSelector((state) => state.cardsForm.currentCard);
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState(false);

  useEffect(() => {
    watch((value) => {
      const card = value;
      card.img = '';
      dispatch(addCurrentCard(card));
    });
  }, [dispatch, watch]);

  function onSubmit(data: Inputs) {
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
      dispatch(
        addNewCard({
          pet: data.pet,
          name: data.name,
          birthday: data.birthday,
          features: data.features,
          gender: data.gender,
          img: URL.createObjectURL(data.img[0]),
        } as CardFormData)
      );
      reset();
    }, 500);
  }

  return (
    <>
      {message ? <div className="message">card added</div> : null}
      <form className="form" onSubmit={handleSubmit((data) => onSubmit(data as Inputs))}>
        <label className="form__label" htmlFor="name">
          name
          <input
            id="name"
            type="text"
            {...register('name', { required: true, value: cardData.name })}
          />
        </label>
        {errors.name && <div className="error-message">the field should not be empty</div>}
        <label className="form__label" htmlFor="birthday">
          birthday
          <input
            id="birthday"
            type="date"
            {...register('birthday', { required: true, value: cardData.birthday })}
          />
        </label>
        {errors.birthday && <div className="error-message">the field should not be empty</div>}

        <label className="form__label" htmlFor="pet">
          choose a pet:
          <select id="pet" {...register('pet', { required: true, value: cardData.pet })}>
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
            <input
              type="checkbox"
              value="scales"
              {...register('features', { required: true, value: cardData.features })}
            />
          </label>
          <label htmlFor="horns">
            horns
            <input
              type="checkbox"
              value="horns"
              {...register('features', { required: true, value: cardData.features })}
            />
          </label>
          <label htmlFor="tail">
            tail
            <input
              type="checkbox"
              value="tail"
              {...register('features', { required: true, value: cardData.features })}
            />
          </label>
          <label htmlFor="ears">
            ears
            <input
              type="checkbox"
              value="ears"
              {...register('features', { required: true, value: cardData.features })}
            />
          </label>
          <label htmlFor="fangs">
            fangs
            <input
              type="checkbox"
              value="fangs"
              {...register('features', { required: true, value: cardData.features })}
            />
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
              {...register('gender', { required: true, value: cardData.gender })}
            />
          </label>
          <label htmlFor="female">
            female
            <input
              type="radio"
              id="female"
              value="female"
              {...register('gender', { required: true, value: cardData.gender })}
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
