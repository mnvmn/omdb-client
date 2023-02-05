import { MdOutlineFavoriteBorder, MdOutlineManageSearch } from 'react-icons/md'
import { routes } from 'router'
import styled from 'styled-components'
import { themeVars } from 'styles/vars'
import { NavigationMainButton } from './NavigationMainButton'

const ListStyled = styled.ul`
  list-style: none;
  display: grid;
  gap: 0.5em;
  padding: 1em 1em;

  @media (max-width: ${themeVars.breakpointMd}px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
  }
  @media (min-width: ${themeVars.breakpointMd + 1}px) {
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
        <MdOutlineFavoriteBorder size={'1.2em'} />
        <span>Favorites</span>
      </NavigationMainButton>
    </ListStyled>
  )
}
