import { Sheet } from '@mui/joy'
import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { themeVars } from 'styles/vars'

export const MovieDetailsUlStyled = styled.ul`
  list-style: none;
`
export const MovieDetailsUlGridStyled = styled.ul<{
  gapX?: number
  gapY?: number
}>`
  flex: 1 1 0;
  list-style: none;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: ${({ gapX = 0, gapY = 0 }) => `${gapX}rem ${gapY}rem`};
  & > li {
    // display: flex;
    // align-items: center;
  }
`

export const MovieDetailsListSpanStyled = styled.div`
  grid-column: 1 / span 2;
`

export const MoveDetailContentsTopStyled = styled(Sheet)`
  --AspectRatio-radius: 0;
  position: relative;
  img: before {
    content: ' ';
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: url(${themeVars.noImagePath});
    background-size: auto 100%;
  }
`

export const MovieDetailsListItem = ({
  label,
  value,
  children,
}: PropsWithChildren & {
  label: string
  value?: string
}) => {
  return (
    <>
      <li>{label}</li>
      <li>{children ? children : value}</li>
    </>
  )
}
