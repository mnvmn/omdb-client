import { Card } from '@mui/joy'
import styled from 'styled-components'
import { theme } from 'styles/theme'
import { themeVars } from 'styles/vars'

const GridContainerStyled = styled.div`
  display: grid;
  width: 100%;
  gap: 1rem 1rem;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
`
export const GridContainerShortStyled = styled(GridContainerStyled)`
  @media (max-width: ${theme.breakpoints.values.sm}px) {
    grid-template-columns: 1fr;
    grid-template-rows: 3rem 3rem;
  }
  @media (min-width: ${theme.breakpoints.values.sm + 1}px) {
    grid-template-rows: 3rem;
  }
`
export const GridContainerTallStyled = styled(GridContainerStyled)<{
  size: 'sm' | 'lg'
}>`
  grid-template-rows: repeat(
    auto-fill,
    minmax(${({ size }) => (size === 'sm' ? 200 : 250)}px, 1fr)
  );
  grid-template-columns: repeat(
    auto-fill,
    minmax(${({ size }) => (size === 'sm' ? 200 : 250)}px, 1fr)
  );
`

export const GridCardStyled = styled(Card)`
  position: relative;
  img:before {
    content: ' ';
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: url(${themeVars.noImagePath});
    background-size: auto 100%;
  }
`
export const GridLoaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column-start: 1;
  grid-column-end: -1;
  position: relative;
  top: 1.5rem;
  height: 0;
`
