import { CircularProgress } from '@mui/joy'
import styled from 'styled-components'

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  flex: 1 1 auto;
  height: 20rem;
  padding-bottom: 6rem;
`

export const MovieDetailLoader = () => {
  return (
    <LoaderWrapper>
      <CircularProgress
        size="sm"
        thickness={3}
        variant="soft"
      />
    </LoaderWrapper>
  )
}
