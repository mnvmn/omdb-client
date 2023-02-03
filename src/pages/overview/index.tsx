import { ContentStyled, PageStyled } from '@components/Layout.styled'
import { Input } from '@mui/joy'
import ResultsTable from './ResultsTable'

export const OverviewPage = () => {
  return (
    <PageStyled>
      <Input
        color="primary"
        disabled={false}
        size="lg"
        variant="soft"
      />
      <ContentStyled>
        <ResultsTable />
      </ContentStyled>
    </PageStyled>
  )
}
