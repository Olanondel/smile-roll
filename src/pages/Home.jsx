import ProductsGrid from '../components/ProductsGrid/ProductsGrid.jsx'
import { allProducts } from '@/mock/product.js'

const HomePage = () => {
  return (
    <section>
      <ProductsGrid products={allProducts} />
    </section>
  )
}

export default HomePage
