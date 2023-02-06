import { Movie } from '@common/types'
import { AspectRatio, CardOverflow, Link, Typography } from '@mui/joy'
import Card from '@mui/joy/Card'
import { Link as LinkRouter } from 'react-router-dom'
import { routes } from 'router'
import styled from 'styled-components'
import { theme } from 'styles/theme'

const CardStyled = styled(Card)`
  // cursor: pointer;
`

export const ResultsGridCard = ({ movie }: { movie: Movie }) => {
  return (
    <CardStyled
      variant="solid"
      sx={{
        overflowWrap: 'break-word',
        '&:hover': {
          boxShadow: theme.shadow.sm,
          backgroundColor: theme.colorSchemes.dark.palette.neutral[700],
        },
      }}>
      <AspectRatio ratio="3/4">
        <img
          src={movie.Poster}
          alt={movie.Title}
          loading="lazy"
        />
      </AspectRatio>

      <Typography
        level="h2"
        sx={{ fontSize: 'md', mt: 2 }}>
        <Link
          component={LinkRouter}
          to={`${routes.movie}/${movie.imdbID}`}
          overlay
          underline="none"
          sx={{ color: 'text.primary', '&:after': { zIndex: 10 } }}>
          {movie.Title}
        </Link>
      </Typography>
      <CardOverflow>
        <Typography
          level="body2"
          sx={{ mt: 0.5, mb: 2 }}>
          {movie.Year}
        </Typography>
      </CardOverflow>
    </CardStyled>
  )
}
