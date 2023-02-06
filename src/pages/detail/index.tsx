import Card from '@mui/joy/Card'
import { useGetMovieQuery } from '@store/apiMovies'
import { selectMovie } from '@store/sliceMovies'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { MovieDetailContentsBottom } from './MovieDetailContentsBottom'
import { MovieDetailContentsTop } from './MovieDetailContentsTop'

export const DetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const { error, isLoading } = useGetMovieQuery(id as string)
  const movie = useSelector(selectMovie)

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error</div>}
      {movie && (
        <Card
          variant="solid"
          sx={{ padding: '0', margin: '0', overflow: 'hidden' }}>
          <MovieDetailContentsTop movie={movie} />
          <MovieDetailContentsBottom movie={movie} />
        </Card>
      )}
    </div>
  )
}
