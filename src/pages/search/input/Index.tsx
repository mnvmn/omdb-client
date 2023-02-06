import {
  selectMoviesSearchResults,
  selectMoviesSearchStatus,
} from '@store/sliceMovies'
import { forwardRef } from 'react'
import { useSelector } from 'react-redux'
import { SearchInfoStyled, SearchInputStyled } from './Search.styled'
import { SearchInfo } from './SearchInfo'
import { SearchInput } from './SearchInput'

export const MovieSearch = forwardRef<HTMLDivElement>((props, ref) => {
  const { total } = useSelector(selectMoviesSearchResults)
  const { isLoading } = useSelector(selectMoviesSearchStatus)

  return (
    <>
      <SearchInputStyled>
        <SearchInput />
      </SearchInputStyled>
      <SearchInfoStyled>
        {isLoading ? (
          <SearchInfo>Loading...</SearchInfo>
        ) : total > 0 ? (
          <SearchInfo>
            <span>{total}</span> results found
          </SearchInfo>
        ) : (
          <SearchInfo>No results</SearchInfo>
        )}
      </SearchInfoStyled>
    </>
  )
})
