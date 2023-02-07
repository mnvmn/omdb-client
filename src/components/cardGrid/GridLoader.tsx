import { CircularProgress } from '@mui/joy'
import { GridLoaderStyled } from './Grid.styled'

export const GridLoader = () => {
  return (
    <GridLoaderStyled>
      <CircularProgress
        size="sm"
        thickness={3}
        variant="soft"
      />
    </GridLoaderStyled>
  )
}
