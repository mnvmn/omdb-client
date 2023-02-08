import { CardGrid } from '@components/cardGrid/Index'
import { selectMoviesFavorites } from '@store/sliceMovies'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'

export const FavoritesPage = () => {
  const movies = useSelector(selectMoviesFavorites)
  const movieList = movies ? Object.values(movies) : []

  return (
    <>
      <Helmet>
        <title>Movie app | Favorites</title>
        <meta
          name="description"
          content="Movie app favorites page"
        />
      </Helmet>
      <CardGrid
        movies={movieList}
        size="lg"
      />
    </>
  )
}
