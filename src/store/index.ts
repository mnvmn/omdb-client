import { configureStore } from '@reduxjs/toolkit'
import { apiMovie, apiMovieMiddleware } from './apiMovie'
import { sliceMovie } from './sliceMovie'

export const store = configureStore({
  reducer: {
    [apiMovie.reducerPath]: apiMovie.reducer,
    [sliceMovie.name]: sliceMovie.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMovieMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
