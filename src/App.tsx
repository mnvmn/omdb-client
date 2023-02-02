import '@fontsource/public-sans'
import { CssVarsProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { router } from 'router'
import { theme } from 'theme'
import './global.scss'
import { store } from './store'

export const App = () => {
  return (
    <Provider store={store}>
      <CssVarsProvider
        defaultMode="dark"
        theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </CssVarsProvider>
    </Provider>
  )
}
