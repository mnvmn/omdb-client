import { numberOfInitialRequests } from '@store/apiMovies'
import { loadMoreMovies, selectMoviesSearchStatus } from '@store/sliceMovies'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ResultsTable } from './ResultsTable'

export const Results = () => {
  const tableRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()
  const { loadPageCount } = useSelector(selectMoviesSearchStatus)

  useEffect(() => {
    const handleScroll = () => {
      if (tableRef.current && loadPageCount > numberOfInitialRequests) {
        // if table size + Y offset is less then scroll position, dispatch load more movies
        const tableHeight = tableRef.current.offsetHeight
        const tableOffsetTop = tableRef.current.offsetTop
        const scrollPosition = window.scrollY
        if (tableHeight + tableOffsetTop < scrollPosition) {
          dispatch(loadMoreMovies())
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return <ResultsTable ref={tableRef} />
}
