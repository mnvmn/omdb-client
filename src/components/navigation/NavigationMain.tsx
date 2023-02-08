import styled from '@emotion/styled'
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp'
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined'
import { routes } from 'router'
import { theme } from 'styles/theme'
import { NavigationMainButton } from './NavigationMainButton'
const ListStyled = styled.ul`
  flex: 1 1 0;
  list-style: none;
  gap: 0.5em;
  padding: 1em 1em;

  @media (max-width: ${theme.breakpoints.values.lg}px) {
    display: flex;
    flex: 0 1 auto;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
  }
  @media (min-width: ${theme.breakpoints.values.lg + 1}px) {
    display: grid;
    flex: 1 1 auto;
    grid-template-rows: repeat(2, 1fr);
    grid-auto-columns: 1fr;
  }
`

export const NavigationMain = () => {
  return (
    <ListStyled>
      <NavigationMainButton
        disabled
        route={routes.home}>
        <ManageSearchOutlinedIcon
          sx={{ fontSize: '2rem', top: '-2px', position: 'relative' }}
        />
        <span>Search</span>
      </NavigationMainButton>
      <NavigationMainButton route={routes.favorites}>
        <FavoriteBorderSharpIcon
          sx={{ fontSize: '1.7rem', top: '-1px', position: 'relative' }}
        />
        <span>Favorites</span>
      </NavigationMainButton>
    </ListStyled>
  )
}
