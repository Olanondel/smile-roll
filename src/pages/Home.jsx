import { allProducts } from '@/shared/config/menu-categories.js'

import ProductsGrid from '../components/ProductsGrid/ProductsGrid.jsx'

const HomePage = () => {
  return (
    <section>
      <ProductsGrid products={allProducts} />
    </section>
  )
}

export default HomePage
