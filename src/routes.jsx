import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Watch from "./pages/Watch"
import PageNotFound from "./pages/PageNotFound"
import Search from "./pages/Search"
import Favorites from "./pages/Favorites"
import FavoritesProvider from "./context/favorites"
import VideoRegister from "./pages/VideoRegister"

function AppRoutes() {
    return (
        <BrowserRouter>
            <FavoritesProvider>
                <Routes>
                    <Route path="/" element={<Home />} ></Route>
                    <Route path="/watch/:id" element={<Watch />} ></Route>
                    <Route path="/search" element={<Search />} ></Route>
                    <Route path="/favorites" element={<Favorites />} ></Route>
                    <Route path="/videoregister" element={<VideoRegister />} ></Route>
                    <Route path="*" element={<PageNotFound />} ></Route>
                </Routes>
            </FavoritesProvider>
        </BrowserRouter>
    )
}

export default AppRoutes