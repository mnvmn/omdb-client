import LogoSvg from './logo.svg'
import { LogoIcon, LogoStyled, LogoTextStyled } from './LogoHeader.styled'

const logoText = 'Movie Database'

export const LogoHeader = () => {
  return (
    <LogoStyled>
      <LogoIcon>
        <LogoSvg />
      </LogoIcon>
      <LogoTextStyled>{logoText}</LogoTextStyled>
    </LogoStyled>
  )
}
