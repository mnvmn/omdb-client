import { Movie } from '@common/types'
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react'
import { StoreState } from '.'
import { isFake } from './apiMovies'
import {
  apiGetMoviesFakeHandler,
  apiGetMoviesHandler,
} from './apiMoviesGetMoviesHandler'
import {
  setMoviesSearchError,
  setMoviesSearchResults,
  setMoviesSearchStatusInProgress,
} from './sliceMovies'

const getMoviesQueryString = (title: string, pageNumber: number) => {
  return `?apikey=${process.env.OMDB_API_KEY}&type=movie&page=${pageNumber}&s=${title}`
}
export const numberOfParallelRequests = 3

export interface GetMoviesEndpointArgs {
  movieTitle: string
  pageIndex?: number
}

export interface GetMoviesEndpointResponse {
  movies: Movie[]
  total: number
}

export const getMoviesEndpoint = (
  builder: EndpointBuilder<
    BaseQueryFn<
      string | FetchArgs,
      unknown,
      FetchBaseQueryError,
      {},
      FetchBaseQueryMeta
    >,
    never,
    'apiMovies'
  >
) => {
  return builder.query<GetMoviesEndpointResponse, GetMoviesEndpointArgs>({
    async queryFn(
      { movieTitle, pageIndex = 0 },
      _queryApi,
      _extraOptions,
      fetchWithBQ
    ) {
      if (movieTitle) {
        _queryApi.dispatch(setMoviesSearchStatusInProgress())
        const startPage = pageIndex + 1
        const getRequests = () => {
          // we want to load multiple pages of results at once
          return Array.apply(null, Array(numberOfParallelRequests)).map(
            (val, index) => {
              return fetchWithBQ(
                getMoviesQueryString(movieTitle, startPage + index)
              )
            }
          )
        }

        const result = isFake
          ? await apiGetMoviesFakeHandler(startPage)
          : await apiGetMoviesHandler(getRequests())

        const currentSearchStatus = (_queryApi.getState() as StoreState).movies
          .searchStatus

        if (currentSearchStatus.searchQuery !== movieTitle) {
          return {
            error: {
              status: 412,
              data: 'Search query changed',
            },
          }
        } else if (result.data && result.data.movies.length > 0) {
          _queryApi.dispatch(
            setMoviesSearchResults({
              movies: result.data.movies.map((movie) => {
                return {
                  ...movie,
                  isFavorite: false,
                }
              }),
              total: result.data.total,
              processPageIndex: pageIndex + numberOfParallelRequests,
              // error: result.error,
            })
          )

          return { data: result.data }
        } else {
          const error = result.error
            ? result.error
            : { status: 406, data: 'Error' }

          _queryApi.dispatch(
            setMoviesSearchError({
              error: error,
            })
          )

          return {
            error: error,
          }
        }
      } else {
        return {
          data: {
            movies: [],
            total: 0,
          },
        }
      }
    },
  })
}
