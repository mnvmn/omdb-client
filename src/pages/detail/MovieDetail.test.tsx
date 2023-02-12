import movieJson from '@assets/data/movie1.json'
import { render, screen } from '@common/jest/testWithProviders'
import '@testing-library/jest-dom'
import 'jest-styled-components'
import MovieDetail from './MovieDetail'

test('Render header logo', async () => {
  render(
    <MovieDetail
      movie={{ ...movieJson, isFavorite: false }}
      id={movieJson.imdbID}
    />
  )
  const title = screen.getByText(movieJson.Title)
  expect(title).toBeInTheDocument()
})
