import '@fontsource/alegreya-sans-sc'
import '@fontsource/nunito-sans'
import '@fontsource/public-sans'
import { CssVarsProvider } from '@mui/joy'
import CssBaseline from '@mui/joy/CssBaseline'
import '@styles/global.scss'
import { GlobalStyle } from '@styles/GlobalStyle'
import { theme } from '@styles/theme'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { store } from '../store'
import { router } from './router'

export const App = () => {
  return (
    <Provider store={store}>
      <CssVarsProvider
        defaultMode="dark"
        theme={theme}>
        <CssBaseline />
        <GlobalStyle />
        <RouterProvider router={router} />
      </CssVarsProvider>
    </Provider>
  )
}
