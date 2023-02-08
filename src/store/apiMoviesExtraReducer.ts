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
      const isFavorite = !!state.favorites[payload.imdbID]
      const movie = {
        ...payload,
        isFavorite,
      } as MovieDetailWithMeta
      
      state.movieCache[movie.imdbID] = movie
    }
  )
}
