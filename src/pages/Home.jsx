import ProductsGrid from '../components/ProductsGrid/ProductsGrid.jsx'
import { menuCategories } from '../mock/product.js'

const HomePage = () => {
  return (
    <section>
      <ProductsGrid products={menuCategories} />
    </section>
  )
}

export default HomePage
