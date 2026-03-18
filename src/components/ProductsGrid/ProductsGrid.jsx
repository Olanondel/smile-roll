import styles from './ProductsGrid.module.css'
import { ProductCard } from '../cards/ProductCard/ProductCard.jsx'
import { useCart } from '../../hooks/useCart.js'
import { useFavorites } from '../../features/favorites/hooks/useFavorites.js'

const ProductsGrid = ({ products, ...props }) => {
  const { add } = useCart()
  const { toggle, favoriteSet } = useFavorites()

  return (
    <div {...props} className={styles.grid}>
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          weight={product.weight}
          description={product.description}
          price={product.price}
          isFavourite={favoriteSet.has(product.id)}
          onFavoriteClick={() => toggle(product.id)}
          onAddClick={() => add(product)}
        />
      ))}
    </div>
  )
}

export default ProductsGrid
