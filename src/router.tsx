import { MainLayout } from '@components/layout/Index'
import { DetailPage } from '@pages/detail/Index'
import { FavoritesPage } from '@pages/favorites/Index'
import { SearchPage } from '@pages/search/Index'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

export const routes = {
  home: '/',
  favorites: '/favorites',
  movie: '/movie',
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
        element={<DetailPage />}
      />
    </Route>
  )
)
