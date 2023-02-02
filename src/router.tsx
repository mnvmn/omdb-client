import { FavoritesPage } from '@pages/favorites'
import { OverviewPage } from '@pages/overview'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<OverviewPage />}>
            <Route
                path="favorites"
                element={<FavoritesPage />}
            />
            {/* <Route path='detail/:id' element={<DetailPage />} /> */}
        </Route>
    )
)
