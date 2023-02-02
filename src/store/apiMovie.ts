// http://www.omdbapi.com/?apikey=[yourkey]&
// http://img.omdbapi.com/?apikey=[yourkey]&

import { ListResponse, Movie, MovieDetail } from '@common/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Middleware } from 'redux'

export const api = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&type=movie&`,
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<ListResponse<Movie>, MovieArgs>({
      query: ({ title, page = 1 }) => `page=${page}&s=${title}`,
    }),
    getMovie: builder.query<MovieDetail, string>({
      query: (id) => `i=${id}`,
    }),
  }),
})

export const { useGetMoviesQuery, useGetMovieQuery } = api

export const apiMiddleware: Middleware = api.middleware

export interface MovieArgs {
  title: string
  page?: number
}
