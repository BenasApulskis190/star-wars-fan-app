import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Film, ResourcesType, People, Response } from './types';
import {
  MovieImage,
  resolveMovieImages
} from '../../../utils/resolveMovieImages';
import { assets } from '../../../assets';
import { fetchCharacterById } from '../../../utils/fetchCharacters';

export const swapiApi = createApi({
  reducerPath: 'swapiApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.APP_BASE_URL}/` }),
  endpoints: (builder) => ({
    getFilms: builder.query<Film[], void>({
      query: () => ResourcesType.Films,
      transformResponse: (response: Response<Film[]>) =>
        response.results.map((result) => ({
          ...result,
          movieImage: resolveMovieImages(
            assets.movieImages,
            result.episode_id
          ) as MovieImage
        }))
    }),
    getFilm: builder.query<Film, number>({
      query: (id: number) => `${ResourcesType.Films}/${id}`
    }),
    getPerson: builder.query<People, number>({
      query: (id: number) => `${ResourcesType.People}/${id}`
    }),
    getCharactersByIds: builder.query<People[], number[]>({
      queryFn: async (ids) => {
        const promises = ids.map((id) => fetchCharacterById(id));
        const results = await Promise.all(promises);
        return { data: results };
      }
    })
  })
});

export const {
  useGetFilmsQuery,
  useGetFilmQuery,
  useGetPersonQuery,
  useGetCharactersByIdsQuery
} = swapiApi;
