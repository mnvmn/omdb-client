import { MovieDetailWithMeta } from '@common/types'
import { CircularProgress } from '@mui/joy'
import Card from '@mui/joy/Card'
import { DetailPageLoaderStyled } from './MovieDetail.styled'
import { MovieDetailContentsBottom } from './MovieDetailContentsBottom'
import { MovieDetailContentsTop } from './MovieDetailContentsTop'

export const MovieDetail = ({
  movie,
  id,
}: {
  movie: MovieDetailWithMeta
  id: string
}) => {
  return (
    <>
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

export default MovieDetail
