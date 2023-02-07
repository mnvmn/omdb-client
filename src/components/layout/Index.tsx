import { NavigationMain } from '@components/navigation/NavigationMain'
import { Outlet, ScrollRestoration } from 'react-router-dom'
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
      <ScrollRestoration
        getKey={(location, matches) => {
          return location.pathname
        }}
      />
    </LayoutStyled>
  )
}
