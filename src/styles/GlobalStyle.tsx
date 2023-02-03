import '@fontsource/public-sans'
import GlobalStyles from '@mui/joy/GlobalStyles'

export const GlobalStyle = () => {
  return (
    <GlobalStyles
      styles={{
        // CSS object styles
        html: {
          height: '100%',
          width: '100%',
        },
        body: {
          backgroundColor: '#14224f',
          height: '100%',
          width: '100%',
        },
      }}
    />
  )
}
