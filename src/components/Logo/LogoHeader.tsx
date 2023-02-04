import styled from 'styled-components'
import { themeVars } from 'styles/vars'
import LogoSvg from './logo.svg'

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
`
const LogoIcon = styled.div`
  @media (max-width: ${themeVars.breakpointMd}px) {
    gap: 5px;
    space-between: center;
    transform: scale(0.7);
  }
  @media (min-width: ${themeVars.breakpointMd + 1}px) {
    position: relative;
    left: 2px;
    svg {
      transform: scale(1.2);
    }
  }
`
const LogoTextStyled = styled.div`
  font-family: 'Alegreya Sans SC', sans-serif;
  font-weight: 900;
  font-style: italic;
  font-size: 2.5rem;
  line-height: 3rem;
  color: #fff;
  text-shadow: 0 0 1px #000;
  z-index: 10;
`

const logoText = 'Movie Database'

export const Logo = () => {
  return (
    <LogoStyled>
      <LogoIcon>
        <LogoSvg />
      </LogoIcon>
      <LogoTextStyled>{logoText}</LogoTextStyled>
    </LogoStyled>
  )
}
