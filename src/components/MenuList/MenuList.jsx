import { menuCategories } from '../../mock/product.js'
import { ProductCard } from '../cards/ProductCard/ProductCard.jsx'
import { useCart } from '../../hooks/useCart.js'
import { useFavorites } from '../../features/favorites/hooks/useFavorites.js'

import styles from './MenuList.module.css'

export const MenuList = () => {
  const { add } = useCart()
  const { toggle, favoriteSet } = useFavorites()

  return (
    <div className={styles.wrapper}>
      {menuCategories.map((category) => (
        <section key={category.id}>
          <h2 className={styles.sectionTitle}>{category.title}</h2>

          <div className={styles.productsGrid}>
            {category.products.map((product) => (
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
        </section>
      ))}
    </div>
  )
}
