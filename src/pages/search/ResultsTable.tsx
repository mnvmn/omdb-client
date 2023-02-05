import Sheet from '@mui/joy/Sheet'
import Table from '@mui/joy/Table'
import {
  selectMoviesSearchResults,
  selectMoviesSearchStatus,
} from '@store/sliceMovies'
import { forwardRef } from 'react'
import { useSelector } from 'react-redux'

export const ResultsTable = forwardRef<HTMLDivElement>((props, ref) => {
  const movieSearchResults = useSelector(selectMoviesSearchResults)
  const { isLoading } = useSelector(selectMoviesSearchStatus)

  return (
    <div ref={ref}>
      <Sheet
        variant="solid"
        color="primary"
        invertedColors
        sx={{
          pt: 1,
          borderRadius: 'sm',
          transition: '0.3s',
          background: (theme) =>
            `linear-gradient(45deg, ${theme.vars.palette.primary[500]}, ${theme.vars.palette.primary[400]})`,
          '& tr:last-child': {
            '& td:first-child': {
              borderBottomLeftRadius: '8px',
            },
            '& td:last-child': {
              borderBottomRightRadius: '8px',
            },
          },
        }}>
        <Table
          stripe="odd"
          hoverRow>
          <thead>
            <tr>
              <th>Movie name</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {movieSearchResults.movies.map((row) => (
              <tr key={row.imdbID}>
                <td>{row.Title}</td>
                <td>{row.Year}</td>
              </tr>
            ))}
            {isLoading && <tr>Loading...</tr>}
          </tbody>
        </Table>
      </Sheet>
    </div>
  )
})
