import { Movie } from '@common/types'
import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import { RootState } from '.'
import { apiMovie } from './apiMovie'

type reduxErrorType = FetchBaseQueryError | SerializedError | undefined

interface setMovieSearchStatePayload {
  isLoading: boolean
  error: reduxErrorType
}
export const sliceMovieInitialState = {
  loadPageCount: 0,
  searchQuery: 'batman',
  searchResults: {
    movies: [] as Movie[],
    total: 0,
  },
  searchStatus: {
    isLoading: false,
    error: undefined as reduxErrorType,
  },
  favorites: [] as Movie[],
}

export const sliceMovie = createSlice({
  name: 'movie',
  initialState: sliceMovieInitialState,
  reducers: {
    setLoadPageCount: (state, action: PayloadAction<number>) => {
      state.loadPageCount = action.payload
    },
    setMovieSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
      state.searchResults = {
        movies: [] as Movie[],
        total: 0,
      }
    },
    setMovieSearchState: (
      state,
      action: PayloadAction<setMovieSearchStatePayload>
    ) => {
      state.searchStatus = {
        isLoading: action.payload.isLoading,
        error: action.payload.error,
      }
    },
    setMovieFavorites: (state, action: PayloadAction<Movie[]>) => {
      state.favorites = action.payload
    },
  },
  extraReducers: (builder) => {
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
  },
})

export const { setMovieSearchQuery, setMovieFavorites, setLoadPageCount } =
  sliceMovie.actions

export const selectMovieSearchQuery = (state: RootState) =>
  state.movie.searchQuery
export const selectMovieSearchResults = (state: RootState) =>
  state.movie.searchResults
export const selectMovieSearchStatus = (state: RootState) =>
  state.movie.searchStatus
export const selectMovieFavorites = (state: RootState) => state.movie.favorites
export const selectLoadPageCount = (state: RootState) =>
  state.movie.loadPageCount
