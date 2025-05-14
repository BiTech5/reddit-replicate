import './App.scss'
import Navbar from './components/layout/navbar'
import Sidebar from './components/layout/sidebar'
import Home from './pages/Home'
import Popular from './pages/popular'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <Navbar />
      <div className="below-nav">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/popular" element={<Popular />} />
          </Routes>
        </div>
      </div>

    </>
  )
}

export default App
