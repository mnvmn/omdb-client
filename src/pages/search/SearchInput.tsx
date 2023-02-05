import { Button, Input } from '@mui/joy'
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
  const { isLoading } = useSelector(selectMoviesSearchStatus)

  const args: GetMoviesQueryArgs = {
    title: searchQuery,
    isInitial: true,
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
          <Button
            variant="solid"
            color="primary"
            loading
            type="submit"
            sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
            Subscribe
          </Button>
        )
      }
    />
  )
}
