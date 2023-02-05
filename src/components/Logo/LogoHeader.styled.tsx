import styled from 'styled-components'
import { themeVars } from 'styles/vars'

export const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  @media (max-width: ${themeVars.breakpointMd}px) {
    padding: 0 0.5rem;
  }
  @media (min-width: ${themeVars.breakpointMd + 1}px) {
    padding: 0 2rem;
  }
`
export const LogoIcon = styled.div`
  position: relative;

  @media (max-width: ${themeVars.breakpointMd}px) {
    gap: 5px;
    space-between: center;
    transform: scale(1);
    top: 5px;
  }
  @media (min-width: ${themeVars.breakpointMd + 1}px) {
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
  @media (max-width: ${themeVars.breakpointMd}px) {
    padding-left: 0.3em;
  }
  @media (min-width: ${themeVars.breakpointMd + 1}px) {
    padding-left: 0.3em;
  }
`
