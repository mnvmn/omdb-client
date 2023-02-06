import { MovieList } from '@common/types'
import { forwardRef } from 'react'
import { GridContainerTallStyled } from './Grid.styled'
import { ResultsGridCard } from './GridCard'

export const CardGrid = forwardRef<
  HTMLDivElement,
  { movies: MovieList; isLoading?: boolean }
>(({ movies, isLoading }, ref) => {
  // console.log('CardGrid render', movies)

  return (
    <GridContainerTallStyled ref={ref}>
      {movies.map((movie) => (
        <ResultsGridCard
          key={movie.imdbID}
          movie={movie}
        />
      ))}
      {isLoading && <div>Loading...</div>}
    </GridContainerTallStyled>
  )
})
