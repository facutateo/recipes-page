import Home from './pages/home.tsx';
import Favorites from './pages/favorites.tsx';
import Search from './pages/search.tsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/navbar.tsx';
function App() {

  return (
    <>

    <BrowserRouter>
    <NavBar />
      <Routes>
            
        <Route path="/home" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
