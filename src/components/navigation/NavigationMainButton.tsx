import { Link as LinkRouter } from 'react-router-dom'
import { Link } from '@mui/joy'
import { PropsWithChildren } from 'react'
import { routes } from 'router'
import styled from 'styled-components'
import { theme } from 'styles/theme'

const ListItemStyled = styled.li`
  display: flex;
  flex: 1 0 auto;
  justify-content: start;
  & > a {
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
  return (
    <ListItemStyled>
      <Link
        component={LinkRouter}
        to={route}
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
