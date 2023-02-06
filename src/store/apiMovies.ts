import { ListResponse, Movie } from '@common/types'
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
  setMoviesSearchStatus,
  updateMoviesSearchStatus,
} from './sliceMovies'

// we want to load multiple pages of results at once
export const isFake = true
export const numberOfInitialRequests = 2
export const numberOfSubsequentRequests = 2
export interface GetMoviesQueryArgs {
  title: string
  isInitial: boolean
  page?: number
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
    getMovies: builder.query<ListResponse<Movie>, GetMoviesQueryArgs>({
      async queryFn(
        { isInitial, title },
        _queryApi,
        _extraOptions,
        fetchWithBQ
      ) {
        _queryApi.dispatch(
          isInitial
            ? setMoviesSearchStatus({
                loadPageCount: 0,
                isLoading: true,
                error: undefined,
              })
            : updateMoviesSearchStatus()
        )

        const getRequests = () => {
          return Array.apply(
            null,
            Array(
              isInitial ? numberOfInitialRequests : numberOfSubsequentRequests
            )
          ).map((val, index) => {
            return fetchWithBQ(getQueryString(title, index + 1))
          })
        }

        const result = isFake
          ? await apiGetMoviesFakeHandler()
          : await apiGetMoviesHandler(getRequests())

        _queryApi.dispatch(
          setMoviesSearchResults({
            movies: result.data.Search,
            total: parseInt(result.data.totalResults),
          })
        )
        _queryApi.dispatch(
          setMoviesSearchStatus({
            loadPageCount: numberOfInitialRequests,
            isLoading: false,
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
    getMoviesSimple: builder.query<ListResponse<Movie>, GetMoviesQueryArgs>({
      query: ({ title, page = 0 }) => getQueryString(title, page),
    }),
    getFavoriteMovies: builder.query<Movie[], GetMoviesQueryArgs>({
      async queryFn(_args, _queryApi, _extraOptions) {
        // todo: implement
        return { data: [] as Movie[] }
      },
    }),
    getMovie: apiGetMovieEndpoint(builder),
  }),
})

export const { useGetMoviesSimpleQuery, useGetMoviesQuery, useGetMovieQuery } =
  apiMovies

export const apiMoviesMiddleware: Middleware = apiMovies.middleware
