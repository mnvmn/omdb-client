import { GridContainerShortStyled } from '@components/cardGrid/Grid.styled'
import { CardGrid } from '@components/cardGrid/Index'
import { PageStyled } from '@components/layout/Layout.styled'
import { StickyMenu } from '@components/stickyMenu/Index'
import {
  selectMoviesSearchResults,
  selectMoviesSearchStatus,
} from '@store/sliceMovies'
import { appTitle } from 'App'
import { useRef } from 'react'
import { Helmet } from 'react-helmet'
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
      <Helmet>
        <title>{appTitle} | Search</title>
        <meta
          name="description"
          content="Movie app search page"
        />
      </Helmet>
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
