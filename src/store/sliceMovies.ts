import { MovieDetailWithMeta, MovieList, MovieWithMeta } from '@common/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StoreState } from '.'
import { apiMoviesExtraReducer } from './apiMoviesExtraReducer'
import { numberOfParallelRequests } from './apiMoviesGetMoviesEndpoint'
import { ReduxErrorType } from './types'

const initialFavorites = JSON.parse(localStorage.getItem('favorites') || '{}')

interface MoviesSearchResults {
  movies: MovieWithMeta[]
  total: number
}

type MoviesSearchResultsCache = Record<
  string,
  MoviesSearchResults & {
    processPageIndex: number
    loadedPageIndex: number
  }
>

export const sliceMoviesInitialState = {
  searchResultsCache: {} as MoviesSearchResultsCache,
  searchResults: {
    movies: [] as MovieWithMeta[],
    total: 0,
  },
  searchStatus: {
    searchQuery: '',
    processPageIndex: 0,
    loadedPageIndex: 0,
    isLoading: false,
    error: undefined as ReduxErrorType | undefined,
  },
  movie: null as MovieDetailWithMeta | null,
  // todo: validate with zod
  favorites: initialFavorites as Record<string, MovieWithMeta>,
}

export const sliceMovies = createSlice({
  name: 'movies',
  initialState: sliceMoviesInitialState,
  reducers: {
    setMoviesSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchStatus.searchQuery = action.payload

      // use cached results if available
      const cachedResult =
        state.searchResultsCache[state.searchStatus.searchQuery]
      state.searchResults = cachedResult ?? {
        movies: [] as MovieList,
        total: 0,
      }
      state.searchStatus.loadedPageIndex = cachedResult
        ? cachedResult.loadedPageIndex
        : 0
      state.searchStatus.processPageIndex = cachedResult
        ? cachedResult.processPageIndex
        : 0
    },
    setMoviesSearchResults: (
      state,
      action: PayloadAction<{
        movies: MovieList
        total: number
        processPageIndex: number
        // since we are making multiple requests in parallel
        // it is valid to have results and error at the same time
        error?: ReduxErrorType
      }>
    ) => {
      state.searchStatus.loadedPageIndex = action.payload.processPageIndex
      state.searchStatus.isLoading = false
      state.searchStatus.error = action.payload.error
      state.searchResults.total = action.payload.total

      // todo: if the order of results is actually important - we will need to index the requests
      state.searchResults.movies =
        state.searchStatus.loadedPageIndex === 0
          ? action.payload.movies
          : [...state.searchResults.movies, ...action.payload.movies]

      // cache results
      state.searchResultsCache[state.searchStatus.searchQuery] = {
        ...state.searchResults,
        loadedPageIndex: action.payload.processPageIndex,
        processPageIndex: action.payload.processPageIndex,
      }
    },
    setMoviesSearchError: (
      state,
      action: PayloadAction<{ error: ReduxErrorType }>
    ) => {
      state.searchStatus.isLoading = false
      state.searchStatus.error = action.payload.error
    },
    setMoviesSearchStatusInProgress: (state) => {
      state.searchStatus.isLoading = true
      state.searchStatus.error = undefined
    },
    loadMoreMovies: (state) => {
      state.searchStatus.processPageIndex =
        state.searchStatus.processPageIndex + numberOfParallelRequests
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
  setMoviesSearchError,
  setMoviesSearchStatusInProgress,
  toggleMovieCurrentFavorite,
  loadMoreMovies,
} = sliceMovies.actions

export const selectMoviesSearchQuery = (state: StoreState) =>
  state.movies.searchStatus.searchQuery
export const selectMoviesSearchResults = (state: StoreState) =>
  state.movies.searchResults
export const selectMoviesSearchStatus = (state: StoreState) =>
  state.movies.searchStatus
export const selectMoviesFavorites = (state: StoreState) =>
  state.movies.favorites
export const selectMovie = (state: StoreState) => state.movies.movie
