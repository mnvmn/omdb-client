import { CircularProgress, Input } from '@mui/joy'
import { useGetMoviesQuery } from '@store/apiMovies'
import {
  selectMoviesSearchQuery,
  selectMoviesSearchStatus,
  setMoviesSearchQuery,
} from '@store/sliceMovies'
import { throttle } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import { SearchInputStyled } from './Search.styled'

export const SearchInput = () => {
  const dispatch = useDispatch()
  const searchQuery = useSelector(selectMoviesSearchQuery)
  const { isLoading, processPageIndex } = useSelector(selectMoviesSearchStatus)
  useGetMoviesQuery({
    movieTitle: searchQuery,
    pageIndex: processPageIndex,
  })

  return (
    <SearchInputStyled>
      <Input
        value={searchQuery}
        onChange={throttle((e: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(setMoviesSearchQuery(e.target.value as string))
        }, 500)}
        placeholder="Search for a movie"
        color="primary"
        disabled={false}
        size="lg"
        variant="soft"
        endDecorator={
          isLoading && (
            <CircularProgress
              size="sm"
              thickness={3}
              variant="soft"
            />
          )
        }
      />
    </SearchInputStyled>
  )
}
