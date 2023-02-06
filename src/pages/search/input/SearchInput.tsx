import { CircularProgress, Input } from '@mui/joy'
import { GetMoviesQueryArgs, useGetMoviesQuery } from '@store/apiMovies'
import {
  selectMoviesSearchQuery,
  selectMoviesSearchStatus,
  setMoviesSearchQuery,
} from '@store/sliceMovies'
import { useDispatch, useSelector } from 'react-redux'

export const SearchInput = () => {
  const dispatch = useDispatch()
  const searchQuery = useSelector(selectMoviesSearchQuery)
  const { isLoading, currentPageIndex } = useSelector(
    selectMoviesSearchStatus
  )

  const args: GetMoviesQueryArgs = {
    title: searchQuery,
    pageIndex: currentPageIndex,
  }

  useGetMoviesQuery(args)

  return (
    <Input
      value={searchQuery}
      onChange={(e) => {
        dispatch(setMoviesSearchQuery(e.target.value))
      }}
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
  )
}
