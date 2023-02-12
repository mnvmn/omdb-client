export const appConfig = {
  title: 'Movie app',
  publicPath: process.env.PUBLIC_PATH || '/',
  isFakeApi: process.env.IS_FAKE_API === 'true',
  apiBaseUrl: process.env.OMDB_URL_DATA,
  apiKey: process.env.OMDB_API_KEY,
}
