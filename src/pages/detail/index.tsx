import { useGetMovieQuery } from '@store/apiMovies'
import { useParams } from 'react-router-dom'
import { MovieDetailSurface } from './MovieDetailSurface'

export const DetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const { data, error, isLoading } = useGetMovieQuery(id as string)

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error</div>}
      {data && <MovieDetailSurface movie={data} />}
    </div>
  )
}
