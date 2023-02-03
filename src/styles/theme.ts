import { extendTheme } from '@mui/joy/styles'
import { themeVars } from './vars'

export const theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          solidBg: '#4e89b3',
          solidHoverBg: '#2C7A7B',
          solidActiveBg: '#4e89b3',
          outlinedColor: '#2C7A7B',
          outlinedBorder: '#2C7A7B',
          outlinedHoverBorder: undefined,
          outlinedHoverBg: '#4e89b3',
          outlinedActiveBg: '#4e89b3',
          400: themeVars.themeBgPrimary, // table bg 1
          500: themeVars.themeBgPrimary, // table bg 2
        },
        focusVisible: 'rgba(66, 153, 225, 0.6)',
      },
    },
  },
  focus: {
    default: {
      outlineWidth: '3px',
    },
  },
  fontFamily: {
    body: 'Public Sans',
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          '&:focus': theme.focus.default,
          fontWeight: 600,
          ...(ownerState.size === 'md' && {
            borderRadius: '0.375rem',
            paddingInline: '5rem',
          }),
        }),
      },
    },
  },
})
