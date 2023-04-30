import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CardResponse } from '../interfaces/mainCards';

export const apiCharacter = createApi({
  reducerPath: 'apiCharacter',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/character' }),
  endpoints: (builder) => ({
    getCharacterByName: builder.query<CardResponse, string>({
      query: (name) => `?name=${name}`,
    }),
  }),
});

export const { useGetCharacterByNameQuery } = apiCharacter;
