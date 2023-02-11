import { MainLayout } from '@components/layout/Index'
import { MovieDetailPage } from '@pages/detail/Index'
import { FavoritesPage } from '@pages/favorites/Index'
import { SearchPage } from '@pages/search/Index'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

const PUBLIC_PATH = process.env.PUBLIC_PATH || '/'

export const routes = {
  home: `${PUBLIC_PATH}`,
  favorites: `${PUBLIC_PATH}favorites`,
  movie: `${PUBLIC_PATH}movie`,
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route
        path={routes.home}
        element={<SearchPage />}></Route>
      <Route
        path={routes.favorites}
        element={<FavoritesPage />}
      />
      <Route
        path={`${routes.movie}/:id`}
        element={<MovieDetailPage />}
      />
    </Route>
  )
)
