export function filterProducts(products, filters) {
  if (!Array.isArray(products)) return []

  const { category = '', features = [], ingredients = [] } = filters || {}

  return products.filter((product) => {
    const matchesCategory = !category || category === 'all' || product.category === category

    const matchesFeatures =
      !features.length ||
      features.every((featureId) => product.features?.some((feature) => feature.id === featureId))

    const matchesIngredients =
      !ingredients.length ||
      ingredients.every((ingredientId) =>
        product.ingredients?.some((ingredient) => ingredient.id === ingredientId),
      )

    return matchesCategory && matchesFeatures && matchesIngredients
  })
}
