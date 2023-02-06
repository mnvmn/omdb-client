import { MovieDetailWithMeta } from '@common/types'
import { IconButton, Link, Stack, Tooltip, Typography } from '@mui/joy'
import { toggleMovieCurrentFavorite } from '@store/sliceMovies'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { useDispatch } from 'react-redux'

export const MovieDetailActions = ({
  movie,
}: {
  movie: MovieDetailWithMeta
}) => {
  // dispatch action to add movie to favorites
  const dispatch = useDispatch()
  const handleFavorite = () => {
    dispatch(toggleMovieCurrentFavorite())
  }

  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      alignItems="flex-start"
      sx={{ width: '100%' }}>
      <Stack
        direction="row"
        gap={2}
        justifyContent="flex-end"
        alignItems="center"
        sx={{ width: '100%' }}>
        <Tooltip
          size="lg"
          title="Favorite"
          placement="left-end"
          variant="soft">
          <IconButton
            // sx={{ color: '#d4a72c' }}
            onClick={handleFavorite}
            size="lg"
            color="primary"
            variant="plain">
            {movie.isFavorite ? (
              <MdFavorite size={'1.5em'} />
            ) : (
              <MdFavoriteBorder size={'1.5em'} />
            )}
          </IconButton>
        </Tooltip>
        <Typography level="h6">
          <Link
            color="primary"
            variant="plain"
            href={`https://www.imdb.com/title/${movie.imdbID}`}
            target="_blank">
            IMDB
          </Link>
        </Typography>
      </Stack>
    </Stack>
  )
}
