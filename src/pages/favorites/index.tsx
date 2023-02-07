import { CardGrid } from '@components/cardGrid/Index'
import { selectMoviesFavorites } from '@store/sliceMovies'
import { useSelector } from 'react-redux'

export const FavoritesPage = () => {
  const movies = useSelector(selectMoviesFavorites)
  const movieList = movies ? Object.values(movies) : []

  return <CardGrid movies={movieList} size="lg"/>
}
