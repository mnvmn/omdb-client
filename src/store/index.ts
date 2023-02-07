import { configureStore } from '@reduxjs/toolkit'
import { apiMovies, apiMoviesMiddleware } from './apiMovies'
import { sliceMovies } from './sliceMovies'

export const store = configureStore({
  reducer: {
    [apiMovies.reducerPath]: apiMovies.reducer,
    [sliceMovies.name]: sliceMovies.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMoviesMiddleware),
})

export type StoreState = ReturnType<typeof store.getState>
