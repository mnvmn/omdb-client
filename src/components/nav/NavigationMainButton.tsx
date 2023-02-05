import { Link } from '@mui/joy'
import { PropsWithChildren } from 'react'
import { routes } from 'router'
import styled from 'styled-components'

const ListItemStyled = styled.li`
  flex: 1 1 auto;
  display: flex;
  & > a {
    & > svg {
      flex: 0 0 3rem;
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
        sx={{
          padding: '1em 2em',
          margin: '0',
          flex: ' 1 1 auto',
          display: 'flex',
        }}
        level="h5"
        underline="none"
        variant="plain"
        color="neutral"
        href={route}>
        {children}
      </Link>
    </ListItemStyled>
  )
}
