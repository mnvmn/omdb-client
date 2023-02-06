import { MovieDetail } from '@common/types'
import Card from '@mui/joy/Card'
import { MovieDetailContentsBottom } from './MovieDetailContentsBottom'
import { MovieDetailContentsTop } from './MovieDetailContentsTop'

export const MovieDetailSurface = ({ movie }: { movie: MovieDetail }) => {
  return (
    <Card
      variant="solid"
      sx={{ padding: '0', margin: '0', overflow: 'hidden' }}>
      <MovieDetailContentsTop movie={movie} />
      <MovieDetailContentsBottom movie={movie} />
    </Card>
  )
}
