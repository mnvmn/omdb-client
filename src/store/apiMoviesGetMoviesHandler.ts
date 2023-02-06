import { ListResponse, Movie } from '@common/types'
import {
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query'
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes'
import { MaybePromise } from '@reduxjs/toolkit/dist/query/tsHelpers'
import batmanJson from '../assets/data/batman.json'
import { GetMoviesQueryResult, numberOfInitialRequests } from './apiMovies'

export const apiGetMoviesHandler = async (
  requests: MaybePromise<
    QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>
  >[]
): Promise<GetMoviesQueryResult> => {
  const resolvedRequests = await Promise.allSettled(requests)

  return resolvedRequests.reduce(
    (memo, res) => {
      if (memo.data && res.status === 'fulfilled') {
        const data = res.value.data as ListResponse<Movie>
        if (data.Response === 'True' && data.Search) {
          memo.data.Search = [...memo.data.Search, ...data.Search]
          memo.data.totalResults = data.totalResults
        } else {
          memo.error = data.Response as unknown as FetchBaseQueryError
        }
      }
      return memo
    },
    {
      data: {
        Search: [] as Movie[],
        totalResults: '0',
        Response: '',
      },
      error: undefined as FetchBaseQueryError | undefined,
    }
  )
}

const fakeTimeout = 1000

export const apiGetMoviesFakeHandler =
  async (): Promise<GetMoviesQueryResult> => {
    await new Promise((resolve) => setTimeout(resolve, fakeTimeout))

    const intialResult = {
      data: {
        Search: [] as Movie[],
        totalResults: '0',
        Response: '',
      },
      error: undefined as FetchBaseQueryError | undefined,
    }

    return Array.apply(null, Array(numberOfInitialRequests)).reduce(
      (memo: typeof intialResult, res, index) => {
        if (memo.data && !memo.error) {
          const data = batmanJson[
            (index + 1) as unknown as keyof typeof batmanJson
          ] as ListResponse<Movie>

          if (data.Response === 'True' && data.Search) {
            memo.data.Search = [
              ...memo.data.Search,
              ...(data.Search as Movie[]),
            ]
            memo.data.totalResults = data.totalResults
          } else {
            memo.error = data.Response as unknown as FetchBaseQueryError
          }
        }
        return memo
      },
      intialResult
    )
  }
