import './App.scss'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/Outlet/MainLayout'
import Home from './pages/Home'
import Popular from './pages/popular'
import Error from './components/Error/404'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
      </Route>

      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App
