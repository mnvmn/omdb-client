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
          softBg: '#14171c',
        },
        neutral: {
          // plainHoverBg: '#00153c',
          plainActiveBg: '#07193a',
          plainHoverBg: '#00153c',
          700: '#61617c',
        },
        focusVisible: 'rgba(66, 153, 225, 0.6)',
      },
    },
  },
  focus: {
    default: {
      outlineWidth: '1px',
    },
  },
  fontFamily: {
    body: themeVars.fontFamily,
    display: themeVars.fontFamily,
  },
  letterSpacing: {
    sm: '0.03em',
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
    JoyCard: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          boxShadow: theme.shadow.xs,
          '&:hover': {
            boxShadow: theme.shadow.sm,
            backgroundColor: theme.colorSchemes.dark.palette.neutral[700],
          },
        }),
      },
    },
  },
})
