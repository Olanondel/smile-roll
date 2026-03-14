import { menuCategories } from '../mock/product.js'
import { ProductCard } from './cards/ProductCard/ProductCard.jsx'
import { useCart } from '../hooks/useCart.js'

export const MenuList = () => {
  const { add } = useCart()

  return (
    <div>
      {menuCategories.map((category) => (
        <section key={category.id}>
          <h2>{category.title}</h2>

          <div
            className="productsGrid"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '3rem',
              marginBottom: '3rem',
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
                onFavoriteClick={() => console.log('favorite', product.id)}
                onAddClick={() => add(product)}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
