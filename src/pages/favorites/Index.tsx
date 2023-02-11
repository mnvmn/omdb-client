import { CardGrid } from '@components/cardGrid/Index'
import { selectMoviesFavorites } from '@store/sliceMovies'
import { appTitle } from 'App'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'

export const FavoritesPage = () => {
  const movies = useSelector(selectMoviesFavorites)
  const movieList = movies ? Object.values(movies) : []

  return (
    <>
      <Helmet>
        <title>{appTitle} | Favorites</title>
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
