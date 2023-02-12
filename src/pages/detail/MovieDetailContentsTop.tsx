import { MovieDetailWithMeta } from '@common/types'
import { AspectRatio, Sheet, Stack, Typography } from '@mui/joy'
import { themeVars } from '@styles/vars'
import {
  MoveDetailContentsTopStyled,
  MovieDetailsListItem,
  MovieDetailsUlGridStyled,
} from './MovieDetail.styled'
import { MovieDetailActions } from './MovieDetailActions'

export const MovieDetailContentsTop = ({
  movie,
}: {
  movie: MovieDetailWithMeta
}) => {
  return (
    <MoveDetailContentsTopStyled
      // sx={{ backgroundColor: '#012' }}
      color="neutral"
      variant="plain">
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ width: '100%' }}>
        <AspectRatio
          ratio="3/4"
          sx={{ height: '100%', minWidth: '350px' }}>
          <img
            src={movie.Poster === 'N/A' ? themeVars.noImagePath : movie.Poster}
            alt={movie.Title}
            loading="lazy"
          />
        </AspectRatio>
        <Stack
          justifyContent="space-between"
          sx={{ padding: '2rem 2rem 1rem' }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ width: '100%' }}>
            <Sheet
              sx={{
                color: 'text.secondary',
                fontSize: 'md',
                marginTop: '2rem',
              }}
              color="neutral"
              variant="plain">
              <MovieDetailsUlGridStyled
                gapX={0.5}
                gapY={2}>
                {movie.Ratings.map((rating) => {
                  return (
                    <MovieDetailsListItem
                      key={rating.Source}
                      label={rating.Value}>
                      <span>{rating.Source}</span>
                    </MovieDetailsListItem>
                  )
                })}
              </MovieDetailsUlGridStyled>
            </Sheet>
            <MovieDetailActions movie={movie} />
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
    </MoveDetailContentsTopStyled>
  )
}
