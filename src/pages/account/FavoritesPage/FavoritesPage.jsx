import styles from './FavoritesPage.module.css'
import { ProductCard } from '../../../components/cards/ProductCard/ProductCard.jsx'
import { useCart } from '../../../hooks/useCart.js'
import { useFavorites } from '../../../features/favorites/hooks/useFavorites.js'
import { selectFavoriteProducts } from '../../../features/favorites/store/favoritesSelectors.js'
import { useSelector } from 'react-redux'
import FavoritesEmptyState from '../../../features/favorites/components/FavoritesEmptyState/FavoritesEmptyState.jsx'
import { AnimatePresence } from 'framer-motion'
import { AnimatedListItem } from '@/components/ui/AnimatedListItem/AnimatedListItem.jsx'

const FavoritesPage = () => {
  const { add } = useCart()
  const { toggle, favoriteSet } = useFavorites()

  const favoriteProducts = useSelector(selectFavoriteProducts)

  if (!favoriteProducts.length) {
    return <FavoritesEmptyState />
  }

  return (
    <div className={styles.grid}>
      <AnimatePresence>
        {favoriteProducts.map((product) => (
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
            />
          </AnimatedListItem>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default FavoritesPage
