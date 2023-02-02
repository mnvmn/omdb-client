import { OverviewPage } from '@pages/overview'
import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { FavoritesPage } from './pages/favorites'
import { store } from './store'

const App = () => {
    return (
        <Provider store={store}>
            <Routes>
                <Route
                    path="/"
                    element={<OverviewPage />}
                />
                <Route
                    path="favorites"
                    element={<FavoritesPage />}
                />
                {/* <Route path='detail/:id' element={<DetailPage />} /> */}
            </Routes>
        </Provider>
    )
}

export default App
