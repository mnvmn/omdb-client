import '@fontsource/alegreya-sans-sc'
import '@fontsource/nunito-sans'
import '@fontsource/public-sans'
import { CssVarsProvider } from '@mui/joy'
import CssBaseline from '@mui/joy/CssBaseline'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { router } from 'router'
import { GlobalStyle } from 'styles/GlobalStyle'
import { theme } from 'styles/theme'
import { store } from './store'
import './styles/global.scss'

export const App = () => {
  return (
    <Provider store={store}>
      <CssVarsProvider
        defaultMode="dark"
        theme={theme}>
        {/* <ThemeProvider theme={theme}> */}
        <CssBaseline />
        <GlobalStyle />

        <RouterProvider router={router} />
        {/* </ThemeProvider> */}
      </CssVarsProvider>
    </Provider>
  )
}
