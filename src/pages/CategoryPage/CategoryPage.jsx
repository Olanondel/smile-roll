import { useMemo } from 'react'
import { useParams } from 'react-router-dom'

import { CATEGORIES } from '@/constants/categories.js'

import { Container } from '@/components/Container/Container.jsx'
import ProductsGrid from '@/components/ProductsGrid/ProductsGrid.jsx'
import ProductsFilters from '@/features/filters/components/ProductsFilters/ProductsFilters.jsx'
import { useProductsFilters } from '@/features/filters/hooks/useProductsFilters.js'
import { categoryOptions } from '@/features/filters/model/filterOptions.js'
import { FEATURE_OPTIONS, INGREDIENT_OPTIONS, menuCategories } from '@/shared/config/index.js'
import { flattenMenuCategories } from '@/shared/lib/products/index.js'

export default function CategoryPage() {
  const { slug } = useParams()

  const category = CATEGORIES.find((item) => item.slug === slug)

  const categoryProducts = useMemo(() => {
    return menuCategories.filter((item) => item.category === slug)
  }, [slug])

  const allProducts = useMemo(() => flattenMenuCategories(categoryProducts), [categoryProducts])

  const {
    category: category1,
    setCategory,
    features,
    setFeatures,
    ingredients,
    setIngredients,
    featureOptions,
    ingredientOptions,
    filteredProducts,
    resetFilters,
    filtersState,
  } = useProductsFilters({
    categoryOptions,
    products: allProducts,
    featureDictionary: FEATURE_OPTIONS,
    ingredientDictionary: INGREDIENT_OPTIONS,
  })

  if (!category) {
    return (
      <Container>
        <div>Категория не найдена</div>
      </Container>
    )
  }

  return (
    <Container>
      <section>
        {!allProducts.length ? (
          <p>Товаров пока нет</p>
        ) : (
          <div>
            <h1>{category.title}</h1>

            <ProductsFilters
              category={category1}
              setCategory={setCategory}
              features={features}
              setFeatures={setFeatures}
              ingredients={ingredients}
              setIngredients={setIngredients}
              filtersState={filtersState}
              resetFilters={resetFilters}
              ingredientOptions={ingredientOptions}
              featureOptions={featureOptions}
            />

            {filteredProducts?.length ? (
              <ProductsGrid products={filteredProducts} />
            ) : (
              <div>По заданным фильтрам товаров нет!</div>
            )}
          </div>
        )}
      </section>
    </Container>
  )
}
