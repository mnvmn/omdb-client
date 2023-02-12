import { render, screen } from '@common/jest/testWithProviders'
import { LogoHeader } from './LogoHeader'

test('Render header logo', async () => {
  render(<LogoHeader />)
  const logo = screen.getByText('Movie Database')
  expect(logo).toBeInTheDocument()
})
