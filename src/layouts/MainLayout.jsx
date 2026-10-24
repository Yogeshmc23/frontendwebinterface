import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: 'calc(100vh - var(--nav-height) - 80px)' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
