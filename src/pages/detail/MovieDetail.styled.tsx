import { PropsWithChildren } from 'react'
import styled from 'styled-components'

export const MovieDetailsUlStyled = styled.ul`
  list-style: none;
`
export const MovieDetailsUlGridStyled = styled.ul<{
  gapX?: number
  gapY?: number
}>`
  list-style: none;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: ${({ gapX = 0, gapY = 0 }) => `${gapX}rem ${gapY}rem`};
  & > li {
    // display: flex;
    // align-items: center;
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
