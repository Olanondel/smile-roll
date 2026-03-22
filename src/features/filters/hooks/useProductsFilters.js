import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  filterProducts,
  getFeatureOptions,
  getIngredientOptions,
} from '@/shared/lib/products/index.js'

function parseArrayParam(value) {
  if (!value) return []
  return value.split(',').filter(Boolean)
}

function stringifyArrayParam(array) {
  if (!Array.isArray(array) || array.length === 0) return ''
  return array.join(',')
}

export function useProductsFilters({
  categoryOptions,
  products,
  featureDictionary,
  ingredientDictionary,
}) {
  const [searchParams, setSearchParams] = useSearchParams()

  // читаем начальные значения из URL
  const initialCategory = searchParams.get('category') || categoryOptions[0].value
  const initialFeatures = parseArrayParam(searchParams.get('features'))
  const initialIngredients = parseArrayParam(searchParams.get('ingredients'))

  const [category, setCategory] = useState(initialCategory)
  const [features, setFeatures] = useState(initialFeatures)
  const [ingredients, setIngredients] = useState(initialIngredients)

  // если нужен объект категории для UI
  const selectedCategoryOption = useMemo(() => {
    return categoryOptions.find((option) => option.value === category) || categoryOptions[0]
  }, [category, categoryOptions])

  const filtersState = useMemo(
    () => ({
      category,
      features,
      ingredients,
    }),
    [category, features, ingredients],
  )

  // options для filters, собранные по реальным товарам
  const featureOptions = useMemo(() => {
    return getFeatureOptions(products, featureDictionary)
  }, [products, featureDictionary])

  const ingredientOptions = useMemo(() => {
    return getIngredientOptions(products, ingredientDictionary)
  }, [products, ingredientDictionary])

  // сразу считаем отфильтрованные товары
  const filteredProducts = useMemo(() => {
    return filterProducts(products, filtersState)
  }, [products, filtersState])

  // синхронизация state -> URL
  const currentSearch = searchParams.toString()

  useEffect(() => {
    const nextParams = new URLSearchParams()

    if (category && category !== 'all') {
      nextParams.set('category', category)
    }

    if (features.length > 0) {
      nextParams.set('features', stringifyArrayParam(features))
    }

    if (ingredients.length > 0) {
      nextParams.set('ingredients', stringifyArrayParam(ingredients))
    }

    const nextSearch = nextParams.toString()

    if (nextSearch !== currentSearch) {
      setSearchParams(nextParams, { replace: true })
    }
  }, [category, features, ingredients, currentSearch, setSearchParams])

  const resetFilters = () => {
    setCategory(categoryOptions[0].value)
    setFeatures([])
    setIngredients([])
  }

  return {
    // state
    filtersState,
    category,
    setCategory,
    features,
    setFeatures,
    ingredients,
    setIngredients,

    // derived data
    selectedCategoryOption,
    featureOptions,
    ingredientOptions,
    filteredProducts,

    // actions
    resetFilters,
  }
}
