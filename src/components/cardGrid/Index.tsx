import { MovieList } from '@common/types'
import { forwardRef } from 'react'
import { GridContainerTallStyled } from './Grid.styled'
import { GridCard } from './GridCard'
import { GridLoader } from './GridLoader'

export const CardGrid = forwardRef<
  HTMLDivElement,
  { movies: MovieList; isLoading?: boolean; size?: 'sm' | 'lg' }
>(({ movies, isLoading = false, size = 'sm' }, ref) => {
  return (
    <GridContainerTallStyled
      ref={ref}
      size={size}>
      {movies.map((movie) => (
        <GridCard
          key={movie.imdbID}
          movie={movie}
        />
      ))}
      {isLoading && <GridLoader />}
    </GridContainerTallStyled>
  )
})
