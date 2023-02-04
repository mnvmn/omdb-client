import { Button, Input } from '@mui/joy'
import { MovieArgs, useGetMoviesQuery } from '@store/apiMovie'
import { selectMovieSearchQuery, setMovieSearchQuery } from '@store/sliceMovie'
import { useDispatch, useSelector } from 'react-redux'

export const SearchInput = () => {
  const dispatch = useDispatch()
  const searchQuery = useSelector(selectMovieSearchQuery)
  const args: MovieArgs = {
    title: searchQuery,
    page: 0,
  }
  const { isLoading } = useGetMoviesQuery(args)

  return (
    <Input
      value={searchQuery}
      onChange={(e) => {
        dispatch(setMovieSearchQuery(e.target.value))
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
