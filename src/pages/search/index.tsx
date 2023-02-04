import { ContentStyled, PageStyled } from '@components/layout/Layout.styled'
import { Results } from './Results'
import { SearchInput } from './SearchInput'

export const SearchPage = () => {
  return (
    <PageStyled>
      <SearchInput />
      <ContentStyled>
        <Results />
      </ContentStyled>
    </PageStyled>
  )
}
