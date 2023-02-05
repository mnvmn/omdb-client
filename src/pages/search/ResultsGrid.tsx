import { Typography } from '@mui/joy'
import {
  selectMoviesSearchResults,
  selectMoviesSearchStatus,
} from '@store/sliceMovies'
import { forwardRef, PropsWithChildren } from 'react'
import { useSelector } from 'react-redux'
import {
  GridContainerStyled,
  SearchInfoStyled,
  SearchInputStyled,
} from './ResultsGrid.styled'
import { ResultsGridCard } from './ResultsGridCard'
import { SearchInput } from './SearchInput'

const SearchInfoText = ({ children }: PropsWithChildren) => (
  <Typography
    level="body2"
    sx={{ flex: '1 0 48px', lineHeight: '48px' }}>
    {children}
  </Typography>
)

export const ResultsGrid = forwardRef<HTMLDivElement>((props, ref) => {
  const { movies, total } = useSelector(selectMoviesSearchResults)
  const { isLoading } = useSelector(selectMoviesSearchStatus)

  return (
    <GridContainerStyled ref={ref}>
      <SearchInputStyled>
        <SearchInput />
      </SearchInputStyled>

      <SearchInfoStyled>
        {isLoading ? (
          <SearchInfoText>Loading...</SearchInfoText>
        ) : total > 0 ? (
          <SearchInfoText>
            <span>{total}</span> results found
          </SearchInfoText>
        ) : (
          <SearchInfoText>No results</SearchInfoText>
        )}
      </SearchInfoStyled>

      {movies.map((movie) => (
        <ResultsGridCard
          key={movie.imdbID}
          movie={movie}
        />
      ))}
    </GridContainerStyled>
  )
})
