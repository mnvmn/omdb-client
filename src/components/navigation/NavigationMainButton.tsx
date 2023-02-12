import { routes } from '@components/router'
import styled from '@emotion/styled'
import { Link } from '@mui/joy'
import { theme } from '@styles/theme'
import { PropsWithChildren } from 'react'
import { Link as LinkRouter, useMatch } from 'react-router-dom'

const ListItemStyled = styled.li<{ isActive?: boolean }>`
  display: flex;
  flex: 1 0 auto;
  justify-content: start;
  & > a {
    ${({ isActive }) =>
      isActive && `background-color: var(--joy-palette-neutral-plainActiveBg);`}
    color: var(--joy-palette-neutral-300);
    &.Joy-disabled {
      color: var(--joy-palette-neutral-200) !important;
    }
    &:hover {
      color: var(--joy-palette-neutral-300);
      box-shadow: ${theme.shadow.xs};
    }
    & > svg {
      @media (max-width: ${theme.breakpoints.values.lg}px) {
        margin-right: 0.5em;
      }
      @media (min-width: ${theme.breakpoints.values.lg + 1}px) {
        flex: 0 0 50px;
      }
    }
  }
`

export const NavigationMainButton = ({
  children,
  disabled,
  route,
}: PropsWithChildren & {
  disabled?: boolean
  route: (typeof routes)[keyof typeof routes]
}) => {
  const matches = !!useMatch(route)

  return (
    <ListItemStyled isActive={matches}>
      <Link
        component={LinkRouter}
        to={route}
        disabled={matches}
        sx={{
          padding: {
            xs: '1em 1em',
            lg: '1em 3em',
          },
          margin: '0',
          flex: ' 1 0 auto',
          justifyContent: 'start',
          display: 'flex',
        }}
        level="h5"
        underline="none"
        variant="plain"
        color="neutral">
        {children}
      </Link>
    </ListItemStyled>
  )
}
