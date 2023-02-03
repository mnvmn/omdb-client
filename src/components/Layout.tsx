import { Outlet } from 'react-router-dom'
import { HeaderStyled, LayoutStyled } from './Layout.styled'
import { Logo } from './logo/LogoHeader'

export const MainLayout = () => {
  return (
    <LayoutStyled>
      <HeaderStyled>
        <Logo />
      </HeaderStyled>
      <Outlet />
    </LayoutStyled>
  )
}
