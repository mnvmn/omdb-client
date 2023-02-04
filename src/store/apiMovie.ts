// http://www.omdbapi.com/?apikey=[yourkey]&
// http://img.omdbapi.com/?apikey=[yourkey]&

import { ListResponse, Movie, MovieDetail } from '@common/types'
import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Middleware } from 'redux'
import { sliceMovieInitialState } from './sliceMovie'

export const apiMovie = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&type=movie&`,
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<ListResponse<Movie>, MovieArgs>({
      query: ({ title, page = 0 }) => `page=${page}&s=${title}`,
    }),
    getMovie: builder.query<MovieDetail, string>({
      query: (id) => `i=${id}`,
    }),
  }),
})

export const apiMovieReducer = (
  builder: ActionReducerMapBuilder<typeof sliceMovieInitialState>
) => {
  builder.addMatcher(
    apiMovie.endpoints.getMovies.matchFulfilled,
    (state, { payload }) => {
      const total = parseInt(payload.totalResults)
      console.log(
        'matchFulfilled :>> ',
        state.searchResults.movies,
        payload.Search
      )
      if (!isNaN(total)) {
        state.searchResults = {
          movies: [...state.searchResults.movies, ...payload.Search],
          total,
        }
      }
    }
  )
}

export const { useGetMoviesQuery, useGetMovieQuery } = apiMovie

export const apiMovieMiddleware: Middleware = apiMovie.middleware

export interface MovieArgs {
  title: string
  page?: number
}
