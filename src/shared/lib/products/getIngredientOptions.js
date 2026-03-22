export function getIngredientOptions(products, ingredientDictionary) {
  const ids = new Set()

  products.forEach((product) => {
    product.ingredients?.forEach((ingredient) => {
      if (ingredient?.id) ids.add(ingredient.id)
    })
  })

  return Array.from(ids)
    .map((id) => ingredientDictionary[id])
    .filter(Boolean)
    .map((item) => ({
      value: item.id,
      label: item.label,
      category: item.category,
    }))
}
