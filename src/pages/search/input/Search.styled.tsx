import styled from 'styled-components'
import { theme } from 'styles/theme'

const inputColumns = {
  sm: 4,
  md: 5,
  lg: 5,
  xl: 6,
}

export const SearchInputStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
  align-items: start;
  grid-row: 1;
  grid-column-start: 1;
  grid-column-end: -1;
  @media (min-width: ${theme.breakpoints.values.sm}px) {
    grid-column-end: ${inputColumns.sm};
  }
  @media (min-width: ${theme.breakpoints.values.md}px) {
    grid-column-end: ${inputColumns.md};
  }
  @media (min-width: ${theme.breakpoints.values.lg}px) {
    grid-column-end: ${inputColumns.lg};
  }
  @media (min-width: ${theme.breakpoints.values.xl}px) {
    grid-column-end: ${inputColumns.xl};
  }
  & > div {
    flex: 1 1 auto;
  }
`

export const SearchInfoStyled = styled.div`
  line-height: 3em;
  display: flex;
  flex-direction: column;
  grid-row: 1;
  grid-column-end: -1;
  grid-column-start: 1;
  @media (max-width: ${theme.breakpoints.values.sm - 1}px) {
    grid-row: 2;
  }
  @media (min-width: ${theme.breakpoints.values.sm}px) {
    grid-column-start: ${inputColumns.sm};
  }
  @media (min-width: ${theme.breakpoints.values.md}px) {
    grid-column-start: ${inputColumns.md};
  }
  @media (min-width: ${theme.breakpoints.values.lg}px) {
    grid-column-start: ${inputColumns.lg};
  }
  @media (min-width: ${theme.breakpoints.values.xl}px) {
    grid-column-start: ${inputColumns.xl};
  }
`
