import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function parseArrayParam(value) {
  if (!value) return []
  return value.split(',').filter(Boolean)
}

function stringifyArrayParam(array) {
  if (!Array.isArray(array) || array.length === 0) return ''
  return array.join(',')
}

export function useProductsFilters(categoryOptions) {
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
    filtersState,
    category,
    setCategory,
    features,
    setFeatures,
    ingredients,
    setIngredients,
    selectedCategoryOption,
    resetFilters,
  }
}
