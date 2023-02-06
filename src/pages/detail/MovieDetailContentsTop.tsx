import { MovieDetail } from '@common/types'
import { IconButton, Link, Sheet, Stack, Tooltip, Typography } from '@mui/joy'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import {
  MovieDetailsListItem,
  MovieDetailsUlGridStyled,
} from './MovieDetail.styled'

export const MovieDetailContentsTop = ({ movie }: { movie: MovieDetail }) => {
  return (
    <Sheet
      // sx={{ backgroundColor: '#012' }}
      color="neutral"
      variant="plain">
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ width: '100%' }}>
        <img
          src={movie.Poster}
          alt={movie.Title}
        />
        <Stack
          justifyContent="space-between"
          sx={{ padding: '3rem 2rem 1rem' }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ width: '100%' }}>
            <Sheet
              sx={{ color: 'text.secondary', fontSize: 'sm', pt: 1 }}
              color="neutral"
              variant="plain">
              <MovieDetailsUlGridStyled
                gapX={0.5}
                gapY={2}>
                {movie.Ratings.map((rating) => {
                  return (
                    <MovieDetailsListItem
                      key={rating.Source}
                      label={rating.Source}>
                      <span>{rating.Value}</span>
                    </MovieDetailsListItem>
                  )
                })}
              </MovieDetailsUlGridStyled>
            </Sheet>
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
                    size="lg"
                    variant="plain">
                    <MdOutlineFavoriteBorder size={'1.5em'} />
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
          </Stack>
          <div>
            <hgroup>
              <Typography level="h2">{movie.Title}</Typography>
              <Typography level="h5">{movie.Year}</Typography>
            </hgroup>
            <Typography level="body1">{movie.Plot}</Typography>
          </div>
        </Stack>
      </Stack>
    </Sheet>
  )
}
