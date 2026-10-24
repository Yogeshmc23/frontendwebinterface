import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Sidebar from '../components/Sidebar.jsx'

export default function DashboardLayout() {
  return (
    <>
      <Navbar />
      <div className="dashboard-layout">
        <Sidebar />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </>
  )
}
