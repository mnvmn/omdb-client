import { appConfig } from '@common/vars'

export const themeVars = {
  pagePaddingX: 1,
  pagePaddingY: 1,
  pagePaddingXmd: 4,
  pagePaddingYmd: 4,
  breakpointMd: 1200,
  bodyRadius: 20,
  themeBgPrimary: '#4e89b3',
  themeBgPrimary1: '#00153c',
  fontFamily: 'Nunito Sans',
  sidebarWidth: 300,
  noImagePath: `${appConfig.publicPath || '/'}public/no-image.png`,
}
