import { menuCategories } from '../mock/product.js'
import { ProductCard } from './cards/ProductCard/ProductCard.jsx'
import { useCart } from '../hooks/useCart.js'
import { useFavorites } from '../features/favorites/hooks/useFavorites.js'

export const MenuList = () => {
  const { add } = useCart()
  const { toggle, favoriteSet } = useFavorites()

  return (
    <div style={{ display: 'grid', gap: 124 }}>
      {menuCategories.map((category) => (
        <section key={category.id}>
          <h2 style={{ fontWeight: 700, fontSize: 48, lineHeight: '64px', marginBottom: 32 }}>
            {category.title}
          </h2>

          <div
            className="productsGrid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
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
