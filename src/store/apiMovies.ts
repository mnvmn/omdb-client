import { Movie, MovieListResponse, MovieWithMeta } from '@common/types'
import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'
import { Middleware } from 'redux'
import { apiGetMovieEndpoint } from './apiMoviesGetMovieEndpoint'
import {
  apiGetMoviesFakeHandler,
  apiGetMoviesHandler,
} from './apiMoviesGetMoviesHandler'
import {
  setMoviesSearchResults,
  setMoviesSearchStatusDone,
  setMoviesSearchStatusInProgress,
} from './sliceMovies'

// export const isFake = true
export const isFake = false
export const numberOfParallelRequests = 3
export interface GetMoviesQueryArgs {
  title: string
  pageIndex?: number
}
export interface GetMoviesQueryResult {
  data: {
    Search: Movie[]
    totalResults: string
    Response: string
  }
  error: FetchBaseQueryError | undefined
}

const getQueryString = (title: string, pageNumber: number) => {
  return `?apikey=${process.env.OMDB_API_KEY}&type=movie&page=${pageNumber}&s=${title}`
}

export const apiMovies = createApi({
  reducerPath: 'apiMovies',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.OMDB_URL_DATA}`,
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<MovieListResponse, GetMoviesQueryArgs>({
      async queryFn(
        { title, pageIndex = 0 },
        _queryApi,
        _extraOptions,
        fetchWithBQ
      ) {
        console.log('load page', pageIndex)
        _queryApi.dispatch(setMoviesSearchStatusInProgress())
        // we want to load multiple pages of results at once
        const startPage = pageIndex + 1

        const getRequests = () => {
          return Array.apply(null, Array(numberOfParallelRequests)).map(
            (val, index) => {
              return fetchWithBQ(getQueryString(title, startPage + index))
            }
          )
        }

        const result = isFake
          ? await apiGetMoviesFakeHandler(startPage)
          : await apiGetMoviesHandler(getRequests())

        const moviesWithMeta = result.data.Search.map((movie) => {
          return {
            ...movie,
            isFavorite: false,
          }
        })

        console.log('moviesWithMeta', moviesWithMeta)

        _queryApi.dispatch(
          setMoviesSearchResults({
            movies: moviesWithMeta,
            total: parseInt(result.data.totalResults),
          })
        )

        _queryApi.dispatch(
          setMoviesSearchStatusDone({
            error: result.error,
          })
        )
        return result.error
          ? {
              error: result.error,
            }
          : { data: result.data }
      },
    }),
    // getMoviesSimple: builder.query<MovieListResponse, GetMoviesQueryArgs>({
    //   query: ({ title, page = 0 }) => getQueryString(title, page),
    // }),
    getFavoriteMovies: builder.query<Movie[], GetMoviesQueryArgs>({
      async queryFn(_args, _queryApi, _extraOptions) {
        // todo: implement
        return { data: [] as MovieWithMeta[] }
      },
    }),
    getMovie: apiGetMovieEndpoint(builder),
  }),
})

export const { useGetMoviesQuery, useGetMovieQuery } = apiMovies

export const apiMoviesMiddleware: Middleware = apiMovies.middleware
