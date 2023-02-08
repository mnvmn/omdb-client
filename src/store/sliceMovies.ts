import { MovieDetailWithMeta, MovieList, MovieWithMeta } from '@common/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import { StoreState } from '.'
import { apiMoviesExtraReducer } from './apiMoviesExtraReducer'
import { numberOfParallelRequests } from './apiMoviesGetMoviesEndpoint'

const initialFavorites = JSON.parse(localStorage.getItem('favorites') || '{}')

interface MoviesSearchResults {
  movies: MovieWithMeta[]
  total: number
}

type MoviesSearchResultsCache = Record<
  string,
  MoviesSearchResults & {
    loadedPageIndex: number
    error: FetchBaseQueryError | undefined
  }
>

type MovieCache = Record<string, MovieDetailWithMeta>

export const sliceMoviesInitialState = {
  movieCache: {} as MovieCache,
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
    error: undefined as FetchBaseQueryError | undefined,
  },
  // todo: validate with zod
  favorites: initialFavorites as Record<string, MovieWithMeta>,
}

export const sliceMovies = createSlice({
  name: 'movies',
  initialState: sliceMoviesInitialState,
  reducers: {
    loadMoreMovies: (state) => {
      state.searchStatus.processPageIndex =
        state.searchStatus.processPageIndex + numberOfParallelRequests
      state.searchStatus.isLoading = true
    },
    setMoviesSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchStatus.searchQuery = action.payload

      // use cached movie results if available
      const cachedResult =
        state.searchResultsCache[state.searchStatus.searchQuery]
      state.searchResults = cachedResult ?? {
        movies: [] as MovieList,
        total: 0,
      }
      state.searchStatus.loadedPageIndex = cachedResult
        ? cachedResult.loadedPageIndex
        : 0
      state.searchStatus.error = cachedResult ? cachedResult.error : undefined
      state.searchStatus.processPageIndex = 0
    },
    setMoviesSearchResults: (
      state,
      action: PayloadAction<{
        movies: MovieList
        total: number
        processPageIndex: number
        // since we are making multiple requests in parallel
        // it is valid to have results and error at the same time
        error?: FetchBaseQueryError
      }>
    ) => {
      // todo: if the order of results is actually important - we will need to index the requests
      state.searchResults.movies =
        action.payload.processPageIndex === 0
          ? action.payload.movies
          : [...state.searchResults.movies, ...action.payload.movies]
      state.searchResults.total = action.payload.total
      state.searchStatus.error = action.payload.error
      state.searchStatus.loadedPageIndex = action.payload.processPageIndex
      state.searchStatus.isLoading = false

      // cache results
      state.searchResultsCache[state.searchStatus.searchQuery] = {
        ...state.searchResults,
        loadedPageIndex: action.payload.processPageIndex,
        error: action.payload.error,
      }
    },
    setMoviesSearchError: (
      state,
      action: PayloadAction<{ error: FetchBaseQueryError }>
    ) => {
      state.searchStatus.isLoading = false
      state.searchStatus.error = action.payload.error

      // cache results
      state.searchResultsCache[state.searchStatus.searchQuery] = {
        ...state.searchResults,
        loadedPageIndex: state.searchStatus.loadedPageIndex,
        error: action.payload.error,
      }
    },
    setMoviesSearchStatusInProgress: (state) => {
      state.searchStatus.isLoading = true
      state.searchStatus.error = undefined
    },
    toggleMovieCurrentFavorite: (state, action: PayloadAction<string>) => {
      const movie = state.movieCache[action.payload]
      if (movie) {
        movie.isFavorite = !movie.isFavorite
        if (movie.isFavorite) {
          state.favorites[movie.imdbID as string] =
            coerceMovieWithDetailsToMovie(movie)
        } else {
          delete state.favorites[movie.imdbID]
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
export const selectMovieCache = (state: StoreState) => state.movies.movieCache
