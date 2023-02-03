import Sheet from '@mui/joy/Sheet'
import Table from '@mui/joy/Table'

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]

export default function ResultsTable() {
  return (
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
        <caption>Nutrition of your favorite menus.</caption>
        <thead>
          <tr>
            <th>Column width</th>
            <th>Calories</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <td>{row.name}</td>
              <td>{row.calories}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Sheet>
  )
}
