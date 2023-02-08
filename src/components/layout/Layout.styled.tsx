import styled from '@emotion/styled'
import { theme } from 'styles/theme'
import { themeVars } from 'styles/vars'

export const LayoutStyled = styled.div`
  display: flex;
  padding: ${themeVars.pagePaddingY}rem ${themeVars.pagePaddingX}rem;
  @media (max-width: ${theme.breakpoints.values.lg}px) {
    flex-direction: column;
  }
  @media (min-width: ${theme.breakpoints.values.lg + 1}px) {
    padding: ${themeVars.pagePaddingYmd}rem ${themeVars.pagePaddingXmd}rem;
    padding-left: 0;
  }
`
export const NavBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${theme.breakpoints.values.lg}px) {
    align-items: start;
    justify-content: stretch;
  }
  @media (min-width: ${theme.breakpoints.values.lg + 1}px) {
    flex-direction: column;
    flex: 0 0 ${themeVars.sidebarWidth}px;
  }
`
export const NavBarContainer = styled.div`
  display: flex;
  @media (max-width: ${theme.breakpoints.values.lg}px) {
    justify-content: space-between;
    flex: 1 1 auto;
  }
  @media (min-width: ${theme.breakpoints.values.lg + 1}px) {
    position: fixed;
    left: 0;
    top: 0;
    width: ${themeVars.sidebarWidth}px;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    top: 100px;
  }
  @media (min-width: ${theme.breakpoints.values.lg +
    1}px) and (min-height: 500px) {
    top: 185px;
  }
`
export const PageStyled = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`

export const PageStyledOffset = styled(PageStyled)`
  @media (max-width: ${theme.breakpoints.values.lg}px) {
    margin-top: 10rem;
  }
  @media (min-width: ${theme.breakpoints.values.lg + 1}px) {
    margin-top: 6rem;
  }
`

// background-color: var(--color-bg-header);
// background-color: ${themeVars.themeBgPrimary};
// border-radius: var(--joy-radius-lg);
export const PageContentStyled = styled.div`
  display: flex;
  padding: 1rem;
`
