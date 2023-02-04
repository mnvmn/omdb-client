import { MainLayout } from '@components/layout/Layout'
import { DetailPage } from '@pages/detail/Index'
import { FavoritesPage } from '@pages/favorites/Index'
import { SearchPage } from '@pages/search'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route
        path="/"
        element={<SearchPage />}>
        <Route
          path="favorites"
          element={<FavoritesPage />}
        />
        <Route
          path="detail/:id"
          element={<DetailPage />}
        />
      </Route>
    </Route>
  )
)
