import { configureStore } from '@reduxjs/toolkit';
import { api, apiMiddleware } from './apiMovie';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMiddleware),
});
