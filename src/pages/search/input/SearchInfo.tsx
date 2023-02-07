import { Typography } from '@mui/joy'
import { PropsWithChildren } from 'react'
import { SearchInfoStyled } from './Search.styled'

export const SearchInfo = ({ children }: PropsWithChildren) => (
  <SearchInfoStyled>
    <Typography
      level="body2"
      sx={{ flex: '1 0 3rem', lineHeight: '3rem' }}>
      {children}
    </Typography>
  </SearchInfoStyled>
)
