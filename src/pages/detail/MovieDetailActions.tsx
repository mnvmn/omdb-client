import { MovieDetailWithMeta } from '@common/types'
import StarOutlineSharpIcon from '@mui/icons-material/StarOutlineSharp'
import StarSharpIcon from '@mui/icons-material/StarSharp'
import { IconButton, Stack, Tooltip } from '@mui/joy'
import { toggleMovieCurrentFavorite } from '@store/sliceMovies'
import { useDispatch } from 'react-redux'
const iconSize = '2em'

export const MovieDetailActions = ({
  movie,
}: {
  movie: MovieDetailWithMeta
}) => {
  // dispatch action to add movie to favorites
  const dispatch = useDispatch()
  const handleFavorite = () => {
    dispatch(toggleMovieCurrentFavorite(movie.imdbID))
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
          title={
            movie.isFavorite ? 'Remove from favorites' : 'Add to favorites'
          }
          placement="left-end"
          variant="soft">
          <IconButton
            // sx={{ color: '#d4a72c' }}
            onClick={handleFavorite}
            size="lg"
            color="primary"
            variant="plain">
            {movie.isFavorite ? (
              <StarSharpIcon sx={{ fontSize: '2.5rem' }} />
            ) : (
              <StarOutlineSharpIcon sx={{ fontSize: '2.5rem' }} />
            )}
          </IconButton>
        </Tooltip>
      </Stack>
    </Stack>
  )
}
