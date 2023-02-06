import { NavigationMain } from '@components/navigation/NavigationMain'
import { Outlet } from 'react-router-dom'
import { Logo } from '../logo/LogoHeader'
import { LayoutStyled, NavBarContainer, NavBarStyled } from './Layout.styled'

export const MainLayout = () => {
  return (
    <LayoutStyled>
      <NavBarStyled>
        <NavBarContainer>
          <Logo />
          <NavigationMain />
        </NavBarContainer>
      </NavBarStyled>
      <Outlet />
    </LayoutStyled>
  )
}
