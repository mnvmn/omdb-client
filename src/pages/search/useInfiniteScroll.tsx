import { loadMoreMovies, selectMoviesSearchStatus } from '@store/sliceMovies'
import throttle from 'lodash/throttle'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const useInfiniteScroll = (
  tableRef: React.RefObject<HTMLDivElement>
) => {
  const dispatch = useDispatch()
  const { isLoading, error, processPageIndex, loadedPageIndex } = useSelector(
    selectMoviesSearchStatus
  )
  useEffect(() => {
    const scrollHandler = throttle(() => {
      tableRef.current &&
        processPageIndex < loadedPageIndex &&
        !isLoading &&
        !error &&
        shouldLoadMoreMovies(tableRef.current) &&
        dispatch(loadMoreMovies())
    }, 1000)

    window.addEventListener('scroll', scrollHandler)
    window.addEventListener('resize', scrollHandler)

    scrollHandler()

    return () => {
      window.removeEventListener('scroll', scrollHandler)
      window.removeEventListener('resize', scrollHandler)
    }
  }, [loadedPageIndex, processPageIndex])
}

function shouldLoadMoreMovies(tableEl: HTMLDivElement): boolean {
  const tableBottomPosition = tableEl.offsetTop + tableEl.offsetHeight
  const scrollPosition = window.scrollY + window.innerHeight
  const gridRowHeight = 500 // todo: retrieve value from css
  const shouldLoadMore = scrollPosition > tableBottomPosition - gridRowHeight
  return shouldLoadMore
}
