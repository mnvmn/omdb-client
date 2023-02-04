import styled from 'styled-components'
import { themeVars } from 'styles/vars'

export const LayoutStyled = styled.div`
  display: flex;
  padding: 1rem 1rem;
  @media (max-width: ${themeVars.breakpointMd}px) {
    flex-direction: column;
  }
  @media (min-width: ${themeVars.breakpointMd + 1}px) {
    padding: 2rem 2rem;
    gap: 2rem;
  }
`
export const PageStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ContentStyled = styled.div`
  background-color: ${themeVars.themeBgPrimary};
  border-radius: var(--joy-radius-lg);
  padding: 1rem;
`

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  // background-color: var(--color-bg-header);
`
