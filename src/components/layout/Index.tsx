import { NavigationMain } from '@components/nav/NavigationMain'
import { Outlet } from 'react-router-dom'
import { Logo } from '../logo/LogoHeader'
import { HeaderContainer, HeaderStyled, LayoutStyled } from './Layout.styled'

export const MainLayout = () => {
  return (
    <LayoutStyled>
      <HeaderStyled>
        <HeaderContainer>
          <Logo />
          <NavigationMain />
        </HeaderContainer>
      </HeaderStyled>
      <Outlet />
    </LayoutStyled>
  )
}
