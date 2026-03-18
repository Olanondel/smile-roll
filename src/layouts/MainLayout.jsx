import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header.jsx'

const MainLayout = () => {
  return (
    <div style={{ paddingTop: 16 }}>
      <Header styles={{ margin: '0 auto 32px' }} />

      <Outlet />
    </div>
  )
}

export default MainLayout
