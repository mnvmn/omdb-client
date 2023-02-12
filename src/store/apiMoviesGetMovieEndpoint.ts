import { MovieDetail } from '@common/types'
import { appConfig } from '@common/vars'
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query'
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import movieJson from '@assets/data/movie1.json'

const getMovieQueryString = (id: string) => {
  return `?apikey=${appConfig.apiKey}&i=${id}`
}

export const apiGetMovieEndpoint = (
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
  return appConfig.isFakeApi
    ? builder.query<MovieDetail, string>({
        async queryFn(_args, _queryApi, _extraOptions) {
          return { data: movieJson as MovieDetail }
        },
      })
    : builder.query<MovieDetail, string>({
        query: (id) => getMovieQueryString(id),
      })
}
