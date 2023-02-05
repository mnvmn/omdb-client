import styled from 'styled-components'
import { themeVars } from 'styles/vars'
const inputColumns = {
  xs: 4,
  sm: 5,
}
export const GridContainerStyled = styled.div`
  display: grid;
  gap: 1rem 1rem;
  grid-template-rows: calc(48px + 2em) repeat(auto-fill, minmax(150px, 1fr));
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
`

export const SearchInputStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
  align-items: start;
  grid-row: 1;
  grid-column-start: 1;

  @media (max-width: ${themeVars.breakpointMd}px) {
    grid-column-end: ${inputColumns.xs};
  }
  @media (min-width: ${themeVars.breakpointMd + 1}px) {
    grid-column-end: ${inputColumns.sm};
  }
  & > div {
    flex: 1 1 auto;
  }
`

export const SearchInfoStyled = styled.div`
  grid-row: 1;
  grid-column-end: -1;
  line-height: 48px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${themeVars.breakpointMd}px) {
    grid-column-start: ${inputColumns.xs};
  }
  @media (min-width: ${themeVars.breakpointMd + 1}px) {
    grid-column-start: ${inputColumns.sm};
  }
`
