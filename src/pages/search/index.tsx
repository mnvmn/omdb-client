import { GridContainerShortStyled } from '@components/cardGrid/Grid.styled'
import { CardGrid } from '@components/cardGrid/Index'
import { PageStyled } from '@components/layout/Layout.styled'
import { StickyMenu } from '@components/stickyMenu/Index copy'
import {
  selectMoviesSearchResults,
  selectMoviesSearchStatus,
} from '@store/sliceMovies'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { MovieSearch } from './input/Index'
import { useInfiniteScroll } from './useInfiniteScroll'

export const SearchPage = () => {
  const tableRef = useRef<HTMLDivElement>(null)
  useInfiniteScroll(tableRef)
  const { movies } = useSelector(selectMoviesSearchResults)
  const { isLoading, loadedPageIndex } = useSelector(selectMoviesSearchStatus)
  return (
    <PageStyled>
      <StickyMenu>
        <GridContainerShortStyled>
          <MovieSearch />
        </GridContainerShortStyled>
      </StickyMenu>
      <CardGrid
        ref={tableRef}
        movies={movies}
        isLoading={isLoading && loadedPageIndex > 0}
      />
    </PageStyled>
  )
}
