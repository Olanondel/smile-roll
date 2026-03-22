import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header.jsx'
import CategoryTabs from '../components/CategoryTabs/CategoryTabs.jsx'
import { useState } from 'react'

const MainLayout = () => {
  const [activeCategory, setActiveCategory] = useState('rolls')

  return (
    <div style={{ padding: '26px 0 46px' }}>
      <Header styles={{ margin: '0 auto 32px' }} />

      <CategoryTabs
        activeId={activeCategory}
        onChange={setActiveCategory}
        style={{ marginBottom: 42 }}
      />

      <Outlet />
    </div>
  )
}

export default MainLayout
