import { CircularProgress } from '@mui/joy'
import Card from '@mui/joy/Card'
import { useGetMovieQuery } from '@store/apiMovies'
import { selectMovieCache } from '@store/sliceMovies'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { DetailPageLoaderStyled } from './MovieDetail.styled'
import { MovieDetailContentsBottom } from './MovieDetailContentsBottom'
import { MovieDetailContentsTop } from './MovieDetailContentsTop'

export const DetailPage = () => {
  const { id } = useParams<{ id: string }>()
  useGetMovieQuery(id as string)
  const movieCache = useSelector(selectMovieCache)
  const movie = id && movieCache[id]

  return (
    <>
      <Helmet>
        <title>{movie ? movie.Title : 'Movie detail'}</title>
        <meta
          name="description"
          content={movie ? `${movie.Title} detail page` : 'Movie detail page'}
        />
      </Helmet>
      {movie && movie.imdbID === id ? (
        <Card
          variant="solid"
          sx={{
            padding: '0',
            margin: '0',
            overflow: 'hidden',
            maxWidth: '1000px',
          }}>
          <MovieDetailContentsTop movie={movie} />
          <MovieDetailContentsBottom movie={movie} />
        </Card>
      ) : (
        <DetailPageLoaderStyled>
          <CircularProgress
            size="sm"
            thickness={3}
            variant="soft"
          />
        </DetailPageLoaderStyled>
      )}
    </>
  )
}
