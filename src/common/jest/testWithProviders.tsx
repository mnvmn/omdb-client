import { CssVarsProvider } from '@mui/joy'
import { getStore } from '@store/index'
import { render, RenderOptions } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

export const renderWithProviders = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => {
  const store = getStore()
  return render(
    <Provider store={store}>
      <CssVarsProvider>
        <BrowserRouter>{ui}</BrowserRouter>
      </CssVarsProvider>
    </Provider>,
    options
  )
}

export * from '@testing-library/react'
export { renderWithProviders as render }
