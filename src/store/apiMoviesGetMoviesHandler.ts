import { ListResponse, Movie } from '@common/types'
import {
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query'
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes'
import { MaybePromise } from '@reduxjs/toolkit/dist/query/tsHelpers'
import batmanJson from '../assets/data/batman.json'
import { fakeTimeout, fakeTimeoutAlt } from './apiMovies'
import { numberOfParallelRequests } from './apiMoviesGetMoviesEndpoint'

export type MoviesApiResponse = ListResponse<Movie>
export interface GetMoviesHandlerResponse {
  data: {
    movies: Movie[]
    total: number
  }
  error?: FetchBaseQueryError
}

export const apiGetMoviesHandler = async (
  requests: MaybePromise<
    QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>
  >[]
): Promise<GetMoviesHandlerResponse> => {
  const resolvedRequests = await Promise.allSettled(requests)

  return resolvedRequests.reduce(
    (memo: GetMoviesHandlerResponse, res) => {
      if (res.status !== 'fulfilled') {
        memo.error = {
          status: 500,
          data: 'Server error',
        }
      }

      if (!memo.error && res.status === 'fulfilled') {
        const data = res.value.data as MoviesApiResponse
        if (data.Response === 'True' && data.Search) {
          memo.data.movies = [...memo.data.movies, ...data.Search]
          memo.data.total = parseInt(data.totalResults)
        } else {
          memo.error = {
            status: 404,
            data: 'No data',
          }
        }
      }
      return memo
    },
    {
      data: {
        movies: [] as Movie[],
        total: 0,
      },
    }
  )
}

export const apiGetMoviesFakeHandler = async (
  startPage: number
): Promise<GetMoviesHandlerResponse> => {
  await new Promise((resolve) =>
    setTimeout(resolve, startPage === 1 ? fakeTimeout : fakeTimeoutAlt)
  )

  return Array.apply(null, Array(numberOfParallelRequests)).reduce(
    (memo: GetMoviesHandlerResponse, res, index) => {
      const data = batmanJson[
        (startPage + index) as unknown as keyof typeof batmanJson
      ] as MoviesApiResponse

      if (!data) {
        memo.error = {
          status: 500,
          data: 'Server error',
        }
      }

      if (!memo.error && data) {
        if (data.Response === 'True' && data.Search) {
          memo.data.movies = [...memo.data.movies, ...data.Search]
          memo.data.total = parseInt(data.totalResults)
        } else {
          memo.error = {
            status: 404,
            data: 'No data',
          }
        }
      }

      return memo
    },
    {
      data: {
        movies: [] as Movie[],
        total: 0,
      },
    }
  )
}
