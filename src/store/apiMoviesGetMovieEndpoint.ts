import { MovieDetail } from '@common/types'
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query'
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import movieJson from '../assets/data/movie2.json'
import { GetMoviesQueryArgs, isFake } from './apiMovies'

const getMovieQueryString = (id: string) => {
  return `?apikey=${process.env.OMDB_API_KEY}&i=${id}`
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
  return isFake
    ? builder.query<MovieDetail, GetMoviesQueryArgs>({
        async queryFn(_args, _queryApi, _extraOptions) {
          return { data: movieJson as MovieDetail }
        },
      })
    : builder.query<MovieDetail, string>({
        query: (id) => getMovieQueryString(id),
      })
}
