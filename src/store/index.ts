import { configureStore } from '@reduxjs/toolkit'
import { apiMovies, apiMoviesMiddleware } from './apiMovies'
import { sliceMovies } from './sliceMovies'

export const getStore = () => {
  return configureStore({
    reducer: {
      [apiMovies.reducerPath]: apiMovies.reducer,
      [sliceMovies.name]: sliceMovies.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiMoviesMiddleware),
  })
}

export const store = getStore()

export type StoreState = ReturnType<typeof store.getState>
