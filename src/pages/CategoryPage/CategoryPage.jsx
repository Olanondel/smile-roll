import { useMemo } from 'react'
import { useParams } from 'react-router-dom'

import { menuCategories } from '@/mock/product.js'
import { CATEGORIES } from '@/constants/categories.js'

import { Container } from '../../components/Container/Container.jsx'
import ProductsGrid from '../../components/ProductsGrid/ProductsGrid.jsx'
import ProductsFilters from '@/features/filters/components/ProductsFilters/ProductsFilters.jsx'

export default function CategoryPage() {
  const { slug } = useParams()

  const category = CATEGORIES.find((item) => item.slug === slug)

  const categoryProducts = useMemo(() => {
    return menuCategories.filter((item) => item.category === slug)?.[0]
  }, [slug])

  if (!category) {
    return (
      <Container>
        <div>Категория не найдена</div>
      </Container>
    )
  }

  const products = categoryProducts?.products || []

  return (
    <Container>
      <section>
        {!products.length ? (
          <p>Товаров пока нет</p>
        ) : (
          <div>
            <h1>{category.title}</h1>

            <ProductsFilters />

            <ProductsGrid products={products} />
          </div>
        )}
      </section>
    </Container>
  )
}
