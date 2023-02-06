import { forwardRef, PropsWithChildren } from 'react'
import styled from 'styled-components'
import { theme } from 'styles/theme'

export const MenuContainerStyled = styled.div`
  display: flex;
  justify-content: stretch;
  width: 100%;
  z-index: 100;
  background-color: var(--color-bg-body);
  @media (max-width: ${theme.breakpoints.values.lg}px) {
    padding-bottom: 1.5rem;
  }
  @media (min-width: ${theme.breakpoints.values.lg + 1}px) {
    padding-bottom: 2rem;
  }
`

// unused
export const MenuContainerStickyStyled = styled(MenuContainerStyled)`
  position: fixed;
  @media (max-width: ${theme.breakpoints.values.lg}px) {
    top: 6rem;
    padding-top: 0;
  }
  @media (min-width: ${theme.breakpoints.values.lg + 1}px) {
    top: 0;
    padding-top: 4rem;
    padding-bottom: 0.5rem;
  }
`

export const StickyMenu = forwardRef<HTMLDivElement, PropsWithChildren>(
  ({ children }, ref) => {
    return <MenuContainerStyled>{children}</MenuContainerStyled>
  }
)
