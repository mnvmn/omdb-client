import styled from 'styled-components'
import { themeVars } from 'styles/vars'

export const LayoutStyled = styled.div`
  display: flex;
  padding: ${themeVars.pagePaddingY}rem ${themeVars.pagePaddingX}rem;
  @media (max-width: ${themeVars.breakpointMd}px) {
    flex-direction: column;
    gap: 2rem;
  }
  @media (min-width: ${themeVars.breakpointMd + 1}px) {
    padding: ${themeVars.pagePaddingYmd}rem ${themeVars.pagePaddingXmd}rem;
    padding-left: 0;
  }
`

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${themeVars.breakpointMd}px) {
    align-items: start;
    justify-content: stretch;
  }
  @media (min-width: ${themeVars.breakpointMd + 1}px) {
    flex-direction: column;
    flex: 0 0 ${themeVars.sidebarWidth}px;
  }
`
export const HeaderContainer = styled.div`
  display: flex;
  @media (max-width: ${themeVars.breakpointMd}px) {
    justify-content: space-between;
    flex: 1 1 auto;
  }
  @media (min-width: ${themeVars.breakpointMd + 1}px) {
    position: fixed;
    left: 0;
    top: 0;
    width: ${themeVars.sidebarWidth}px;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    top: 100px;
  }
  @media (min-width: ${themeVars.breakpointMd + 1}px) and (min-height: 500px) {
    top: 185px;
  }
`
export const PageStyled = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  @media (max-width: ${themeVars.breakpointMd}px) {
    gap: 1rem;
  }
  @media (min-width: ${themeVars.breakpointMd + 1}px) {
    gap: 3rem;
  }
`

// background-color: var(--color-bg-header);
// background-color: ${themeVars.themeBgPrimary};
// border-radius: var(--joy-radius-lg);
export const PageContentStyled = styled.div`
  display: flex;
  padding: 1rem;
`
