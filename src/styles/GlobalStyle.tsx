import '@fontsource/public-sans'
import GlobalStyles from '@mui/joy/GlobalStyles'

export const GlobalStyle = () => {
  return (
    <GlobalStyles
      styles={{
        html: {
          height: '100%',
          width: '100%',
        },
        body: {
          backgroundColor: 'var(--color-bg-body)',
          height: '100%',
          width: '100%',
          overflowY: 'scroll',
        },
      }}
    />
  )
}
