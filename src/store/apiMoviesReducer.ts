import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { apiMovies } from './apiMovies'
import { sliceMoviesInitialState } from './sliceMovies'

export const apiMovieReducer = (
  builder: ActionReducerMapBuilder<typeof sliceMoviesInitialState>
) => {
  builder.addMatcher(
    apiMovies.endpoints.getMoviesSimple.matchFulfilled,
    (state, { payload }) => {
      const total = parseInt(payload.totalResults)
      if (!isNaN(total) && payload.Search) {
        state.searchResults = {
          movies: [...state.searchResults.movies, ...payload.Search],
          total,
        }
        state.searchStatus.isLoading = false
        state.searchStatus.loadPageCount = state.searchStatus.loadPageCount + 1
        state.searchStatus.error = undefined
      }
    }
  )
}
