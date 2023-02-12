import { appConfig } from '@common/vars'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Middleware } from 'redux'
import { apiGetMovieEndpoint as apiMoviesGetMovieEndpoint } from './apiMoviesGetMovieEndpoint'
import { getMoviesEndpoint as apiMoviesGetMoviesEndpoint } from './apiMoviesGetMoviesEndpoint'

export const fakeTimeout = 500
export const fakeTimeoutAlt = 500

export const apiMovies = createApi({
  reducerPath: 'apiMovies',
  baseQuery: fetchBaseQuery({
    baseUrl: `${appConfig.apiBaseUrl}`,
  }),
  endpoints: (builder) => ({
    getMovies: apiMoviesGetMoviesEndpoint(builder),
    getMovie: apiMoviesGetMovieEndpoint(builder),
  }),
})

export const { useGetMoviesQuery, useGetMovieQuery } = apiMovies
export const apiMoviesMiddleware: Middleware = apiMovies.middleware
