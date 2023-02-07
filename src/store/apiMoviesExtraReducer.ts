import { MovieDetailWithMeta } from '@common/types'
import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { apiMovies } from './apiMovies'
import { sliceMoviesInitialState } from './sliceMovies'

export const apiMoviesExtraReducer = (
  builder: ActionReducerMapBuilder<typeof sliceMoviesInitialState>
) => {
  builder.addMatcher(
    apiMovies.endpoints.getMovie.matchFulfilled,
    (state, { payload }) => {
      const movie = { ...payload } as MovieDetailWithMeta
      const isFavorite = !!state.favorites[movie.imdbID]
      movie.isFavorite = isFavorite
      state.movie = movie
    }
  )
}
