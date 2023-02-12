import styled from '@emotion/styled'
import { theme } from '@styles/theme'

export const LogoStyled = styled.div`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  user-select: none;
  @media (max-width: ${theme.breakpoints.values.lg}px) {
    padding: 0 0.5rem;
  }
  @media (min-width: ${theme.breakpoints.values.lg + 1}px) {
    padding: 0 2rem;
  }
`
export const LogoIcon = styled.div`
  position: relative;

  @media (max-width: ${theme.breakpoints.values.lg}px) {
    gap: 5px;
    space-between: center;
    transform: scale(1);
    top: 5px;
  }
  @media (min-width: ${theme.breakpoints.values.lg + 1}px) {
    svg {
      transform: scale(1.2);
    }
  }
`
export const LogoTextStyled = styled.div`
  position: relative;
  font-family: 'Alegreya Sans SC', sans-serif;
  font-weight: 900;
  font-style: italic;
  font-size: 2.5rem;
  line-height: 3rem;
  color: #fff;
  text-shadow: 0 0 1px #000;
  z-index: 10;
  @media (max-width: ${theme.breakpoints.values.lg}px) {
    padding-left: 0.3em;
  }
  @media (min-width: ${theme.breakpoints.values.lg + 1}px) {
    padding-left: 0.3em;
  }
`
