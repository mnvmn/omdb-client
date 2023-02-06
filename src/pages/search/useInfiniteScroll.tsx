import { loadMoreMovies, selectMoviesSearchStatus } from '@store/sliceMovies'
import { throttle } from 'lodash'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const useInfiniteScroll = (
  tableRef: React.RefObject<HTMLDivElement>
) => {
  const dispatch = useDispatch()
  const { isLoading, error, currentPageIndex, loadedPageIndex } = useSelector(
    selectMoviesSearchStatus
  )
  useEffect(() => {
    console.log('useEffect', currentPageIndex)

    const scrollHandler = throttle(() => {
      console.log('scroll', isLoading, error, currentPageIndex)

      tableRef.current &&
        currentPageIndex < loadedPageIndex &&
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
  }, [loadedPageIndex, currentPageIndex])
}

function shouldLoadMoreMovies(tableEl: HTMLDivElement): boolean {
  const tableBottomPosition = tableEl.offsetTop + tableEl.offsetHeight
  const scrollPosition = window.scrollY + window.innerHeight
  const gridRowHeight = 500 // just a guess
  const shouldLoadMore = scrollPosition > tableBottomPosition - gridRowHeight
  return shouldLoadMore
}
