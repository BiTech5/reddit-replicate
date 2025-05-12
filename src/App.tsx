import './App.scss'
import Navbar from './components/layout/navbar'
import Sidebar from './components/layout/sidebar'
import Home from './pages/Home'
function App() {

  return (
    <>
      <Navbar />
      <div className='below-nav'>
        <Sidebar />
        <Home />
      </div>
    </>
  )
}

export default App
