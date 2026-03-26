import styles from './ProductsGrid.module.css'
import { ProductCard } from '../cards/ProductCard/ProductCard.jsx'
import { useCart } from '@/hooks/useCart.js'
import { useFavorites } from '@/features/favorites/hooks/useFavorites.js'
import { AnimatePresence } from 'framer-motion'
import { AnimatedListItem } from '@/components/ui/AnimatedListItem/AnimatedListItem.jsx'

const ProductsGrid = ({ products, ...props }) => {
  const { add, increase, decrease, getQuantity } = useCart()
  const { toggle, favoriteSet } = useFavorites()

  return (
    <div {...props} className={styles.grid}>
      <AnimatePresence>
        {products?.map((product) => (
          <AnimatedListItem key={product.id}>
            <ProductCard
              image={product.image}
              title={product.title}
              weight={product.weight}
              description={product.description}
              price={product.price}
              isFavourite={favoriteSet.has(product.id)}
              onFavoriteClick={() => toggle(product.id)}
              onAddClick={() => add(product)}
              onIncrement={() => increase(product.id)}
              onDecrement={() => decrease(product.id)}
              count={getQuantity(product.id)}
            />
          </AnimatedListItem>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default ProductsGrid
