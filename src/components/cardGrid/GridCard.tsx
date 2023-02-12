import { Movie } from '@common/types'
import { routes } from '@components/router'
import { AspectRatio, CardOverflow, Link, Typography } from '@mui/joy'
import { theme } from '@styles/theme'
import { themeVars } from '@styles/vars'
import { Link as LinkRouter } from 'react-router-dom'
import { GridCardStyled } from './Grid.styled'

export const GridCard = ({ movie }: { movie: Movie }) => {
  return (
    <GridCardStyled
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
          src={movie.Poster === 'N/A' ? themeVars.noImagePath : movie.Poster}
          alt={movie.Title}
          loading="lazy"
        />
      </AspectRatio>

      <Typography
        level="h2"
        sx={{ fontSize: 'md', mt: 2, wordBreak: 'break-word' }}>
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
    </GridCardStyled>
  )
}
