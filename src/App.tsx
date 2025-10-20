import Home from './pages/home.tsx';
import Favorites from './pages/favorites.tsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/nav-bar/navbar.tsx';
function App() {

  return (
    <>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
