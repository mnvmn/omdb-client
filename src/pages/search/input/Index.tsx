import {
  selectMoviesSearchResults,
  selectMoviesSearchStatus,
} from '@store/sliceMovies'
import { forwardRef } from 'react'
import { useSelector } from 'react-redux'
import { SearchInfo } from './SearchInfo'
import { SearchInput } from './SearchInput'

export const MovieSearch = forwardRef<HTMLDivElement>((props, ref) => {
  const { total } = useSelector(selectMoviesSearchResults)
  const { isLoading, loadedPageIndex } = useSelector(selectMoviesSearchStatus)

  return (
    <>
      <SearchInput />

      {isLoading ? (
        <SearchInfo>Loading...</SearchInfo>
      ) : total > 0 ? (
        <SearchInfo>
          <span>{total}</span> results found
        </SearchInfo>
      ) : (
        loadedPageIndex > 0 && <SearchInfo>No results</SearchInfo>
      )}
    </>
  )
})
