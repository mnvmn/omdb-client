import { Typography } from '@mui/joy'
import { PropsWithChildren } from 'react'

export const SearchInfo = ({ children }: PropsWithChildren) => (
  <Typography
    level="body2"
    sx={{ flex: '1 0 48px', lineHeight: '48px' }}>
    {children}
  </Typography>
)
