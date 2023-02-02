import { MainLayout } from '@components/MainLayout'
import { DetailPage } from '@pages/detail/Index'
import { FavoritesPage } from '@pages/favorites/Index'
import { OverviewPage } from '@pages/overview/Index'
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
        element={<OverviewPage />}>
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
