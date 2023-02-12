import { appConfig } from '@common/vars'
import { useGetMovieQuery } from '@store/apiMovies'
import { selectMovieCache } from '@store/sliceMovies'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { MovieDetailLoader } from './MovieDetailLoader'
const MovieDetail = React.lazy(
  () =>
    import(
      /* webpackMode: "lazy" */
      /* webpackChunkName: "movie-detail" */
      /* webpackPrefetch: true */
      './MovieDetail'
    )
)

export const MovieDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  useGetMovieQuery(id as string)
  const movieCache = useSelector(selectMovieCache)
  const movie = id && movieCache[id]

  return (
    <>
      <Helmet>
        <title>{`${appConfig.title} | ${
          movie ? movie.Title : 'Movie detail page'
        }`}</title>
        <meta
          name="description"
          content={movie ? `${movie.Title} detail page` : 'Movie detail page'}
        />
      </Helmet>
      {movie && id ? (
        <React.Suspense fallback={<MovieDetailLoader />}>
          <MovieDetail
            movie={movie}
            id={id}
          />
        </React.Suspense>
      ) : (
        <MovieDetailLoader />
      )}
    </>
  )
}
