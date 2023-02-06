import { MovieDetail } from '@common/types'
import { Divider, Sheet, Stack } from '@mui/joy'
import {
  MovieDetailsListItem,
  MovieDetailsUlGridStyled,
} from './MovieDetail.styled'

export const MovieDetailContentsBottom = ({
  movie,
}: {
  movie: MovieDetail
}) => {
  return (
    <Sheet
      sx={{ color: 'text.secondary', padding: '2rem 2rem 3rem' }}
      color="neutral"
      variant="solid">
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" />}
        spacing={2}
        justifyContent="space-between"
        sx={{ width: '100%' }}>
        <MovieDetailsUlGridStyled
          gapX={1}
          gapY={1}>
          <MovieDetailsListItem
            label="Rated"
            value={movie.Rated}
          />
          <MovieDetailsListItem
            label="Released"
            value={movie.Released}
          />
          <MovieDetailsListItem
            label="Runtime"
            value={movie.Runtime}
          />
          <MovieDetailsListItem
            label="Genre"
            value={movie.Genre}
          />
          <MovieDetailsListItem
            label="Director"
            value={movie.Director}
          />
          <MovieDetailsListItem
            label="Writer"
            value={movie.Writer}
          />
          <MovieDetailsListItem
            label="Actors"
            value={movie.Actors}
          />
          <MovieDetailsListItem
            label="Language"
            value={movie.Language}
          />
          <MovieDetailsListItem
            label="Country"
            value={movie.Country}
          />
        </MovieDetailsUlGridStyled>
        <MovieDetailsUlGridStyled
          gapX={1}
          gapY={1}>
          <MovieDetailsListItem
            label="Awards"
            value={movie.Awards}
          />
          <MovieDetailsListItem
            label="Metascore"
            value={movie.Metascore}
          />
          <MovieDetailsListItem
            label="imdbRating"
            value={movie.imdbRating}
          />
          <MovieDetailsListItem
            label="imdbVotes"
            value={movie.imdbVotes}
          />
          <MovieDetailsListItem
            label="DVD"
            value={movie.DVD}
          />
          <MovieDetailsListItem
            label="BoxOffice"
            value={movie.BoxOffice}
          />
          <MovieDetailsListItem
            label="Production"
            value={movie.Production}
          />
          <MovieDetailsListItem
            label="Website"
            value={movie.Website}
          />
          <MovieDetailsListItem
            label="Response"
            value={movie.Response}
          />
        </MovieDetailsUlGridStyled>
      </Stack>
    </Sheet>
  )
}
