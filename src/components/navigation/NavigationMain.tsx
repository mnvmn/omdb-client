import { MdFavoriteBorder, MdOutlineManageSearch } from 'react-icons/md'
import { routes } from 'router'
import styled from 'styled-components'
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
        <MdOutlineManageSearch
          size={'1.6em'}
          style={{
            position: 'relative',
            top: '-0.1em',
          }}
        />
        <span>Search</span>
      </NavigationMainButton>
      <NavigationMainButton route={routes.favorites}>
        <MdFavoriteBorder size={'1.2em'} />
        <span>Favorites</span>
      </NavigationMainButton>
    </ListStyled>
  )
}
