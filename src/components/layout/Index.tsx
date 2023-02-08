import { LogoHeader } from '@components/logo/LogoHeader'
import { NavigationMain } from '@components/navigation/NavigationMain'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import { LayoutStyled, NavBarContainer, NavBarStyled } from './Layout.styled'

export const MainLayout = () => {
  return (
    <LayoutStyled>
      <NavBarStyled>
        <NavBarContainer>
          <LogoHeader />
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
