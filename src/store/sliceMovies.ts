import { Movie } from '@common/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.'
import { apiMovieReducer } from './apiMoviesExtraReducer'
import { ReduxErrorType } from './types'

export const sliceMoviesInitialState = {
  searchQuery: 'batman',
  searchResults: {
    movies: [] as Movie[],
    total: 0,
  },
  searchStatus: {
    loadPageCount: 0,
    isLoading: false,
    error: undefined as ReduxErrorType,
  },
  favorites: [] as Movie[],
}

export const sliceMovies = createSlice({
  name: 'movies',
  initialState: sliceMoviesInitialState,
  reducers: {
    setMoviesSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
      state.searchResults = {
        movies: [] as Movie[],
        total: 0,
      }
    },
    setMoviesSearchResults: (
      state,
      action: PayloadAction<typeof sliceMoviesInitialState.searchResults>
    ) => {
      state.searchResults = action.payload
    },
    setMoviesSearchStatus: (
      state,
      action: PayloadAction<
        typeof sliceMoviesInitialState.searchStatus | undefined
      >
    ) => {
      state.searchStatus = {
        loadPageCount: action.payload
          ? action.payload.loadPageCount
          : state.searchStatus.loadPageCount,
        isLoading: action.payload ? action.payload.isLoading : false,
        error: action.payload ? action.payload.error : undefined,
      }
    },
    updateMoviesSearchStatus: (state) => {
      state.searchStatus = {
        loadPageCount: state.searchStatus.loadPageCount + 1,
        isLoading: true,
        error: undefined,
      }
    },
    setMoviesFavorites: (state, action: PayloadAction<Movie[]>) => {
      state.favorites = action.payload
    },
    loadMoreMovies: (state) => {
      state.searchStatus.loadPageCount = state.searchStatus.loadPageCount + 1
    },
  },
  extraReducers: apiMovieReducer,
})

export const {
  setMoviesSearchQuery,
  setMoviesSearchResults,
  setMoviesSearchStatus,
  updateMoviesSearchStatus,
  setMoviesFavorites,
  loadMoreMovies,
} = sliceMovies.actions

export const selectMoviesSearchQuery = (state: RootState) =>
  state.movies.searchQuery
export const selectMoviesSearchResults = (state: RootState) =>
  state.movies.searchResults
export const selectMoviesSearchStatus = (state: RootState) =>
  state.movies.searchStatus
export const selectMoviesFavorites = (state: RootState) =>
  state.movies.favorites
