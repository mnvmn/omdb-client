import { Card } from '@mui/joy'
import styled from 'styled-components'
import { theme } from 'styles/theme'

const GridContainerStyled = styled.div`
  display: grid;
  width: 100%;
  gap: 1rem 1rem;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
`
export const GridContainerShortStyled = styled(GridContainerStyled)`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    grid-template-columns: 1fr;
    grid-template-rows: 3em 3em;
  }
  @media (min-width: ${theme.breakpoints.values.sm + 1}px) {
    grid-template-rows: 3em;
  }
`
export const GridContainerTallStyled = styled(GridContainerStyled)`
  grid-template-rows: repeat(auto-fill, minmax(150px, 1fr));
`

export const CardStyled = styled(Card)`
  // cursor: pointer;
  position: relative;
  img:before {
    content: ' ';
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: url(no-image.png);
  }
`
