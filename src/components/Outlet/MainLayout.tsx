import Navbar from '../layout/navbar'
import Sidebar from '../layout/sidebar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="below-nav">
        <Sidebar />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default MainLayout
