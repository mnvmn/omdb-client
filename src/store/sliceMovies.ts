import { MovieDetailWithMeta, MovieList, MovieWithMeta } from '@common/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.'
import { numberOfParallelRequests } from './apiMovies'
import { apiMoviesExtraReducer } from './apiMoviesExtraReducer'
import { ReduxErrorType } from './types'

const initialFavorites = JSON.parse(localStorage.getItem('favorites') || '{}')

export const sliceMoviesInitialState = {
  searchQuery: '',
  searchResults: {
    movies: [] as MovieWithMeta[],
    total: 0,
  },
  searchStatus: {
    currentPageIndex: 0,
    loadedPageIndex: 0,
    isLoading: false,
    error: undefined as ReduxErrorType,
  },
  // todo: validate with zod
  favorites: initialFavorites as Record<string, MovieWithMeta>,
  movie: null as MovieDetailWithMeta | null,
}

export const sliceMovies = createSlice({
  name: 'movies',
  initialState: sliceMoviesInitialState,
  reducers: {
    setMoviesSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
      state.searchResults = {
        movies: [] as MovieList,
        total: 0,
      }
    },
    setMoviesSearchResults: (
      state,
      action: PayloadAction<typeof sliceMoviesInitialState.searchResults>
    ) => {
      state.searchResults.total = action.payload.total
      state.searchResults.movies = [
        ...state.searchResults.movies,
        ...action.payload.movies,
      ]
    },
    setMoviesSearchStatusDone: (
      state,
      action: PayloadAction<{ error: ReduxErrorType }>
    ) => {
      state.searchStatus.loadedPageIndex =
        state.searchStatus.loadedPageIndex + numberOfParallelRequests
      state.searchStatus.isLoading = false
      state.searchStatus.error = action.payload.error
    },
    setMoviesSearchStatusInProgress: (state) => {
      state.searchStatus.isLoading = true
      state.searchStatus.error = undefined
    },
    loadMoreMovies: (state) => {
      state.searchStatus.currentPageIndex =
        state.searchStatus.currentPageIndex + numberOfParallelRequests
    },
    toggleMovieCurrentFavorite: (state) => {
      if (state.movie) {
        state.movie.isFavorite = !state.movie.isFavorite
        if (state.movie.isFavorite) {
          state.favorites[state.movie.imdbID as string] =
            coerceMovieWithDetailsToMovie(state.movie)
        } else {
          delete state.favorites[state.movie.imdbID]
        }
        persistFavorites(state.favorites)
        console.log('state.favorites', state.favorites)
        console.log('movie', state.movie)
      }
    },
  },
  extraReducers: apiMoviesExtraReducer,
})

function persistFavorites(favorites: Record<string, MovieWithMeta>) {
  localStorage.setItem('favorites', JSON.stringify(favorites))
}

function coerceMovieWithDetailsToMovie(
  movie: MovieDetailWithMeta
): MovieWithMeta {
  return {
    Title: movie.Title,
    Year: movie.Year,
    imdbID: movie.imdbID,
    Type: movie.Type,
    Poster: movie.Poster,
    isFavorite: movie.isFavorite,
  }
}

export const {
  setMoviesSearchQuery,
  setMoviesSearchResults,
  setMoviesSearchStatusDone,
  setMoviesSearchStatusInProgress,
  toggleMovieCurrentFavorite,
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
export const selectMovie = (state: RootState) => state.movies.movie
