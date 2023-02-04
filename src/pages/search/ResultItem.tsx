import { Movie } from '@common/types'

export const ResultItem = ({ movie }: { movie: Movie }) => {
  return (
    <li>
      {movie.Title} - {movie.Year}
    </li>
  )
}
