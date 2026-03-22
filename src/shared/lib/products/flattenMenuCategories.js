export function flattenMenuCategories(menuCategories) {
  if (!Array.isArray(menuCategories)) return []

  return menuCategories.flatMap((menuCategory) => {
    const products = Array.isArray(menuCategory.products) ? menuCategory.products : []

    return products.map((product) => ({
      ...product,
      category: product.category || menuCategory.category,
      categoryId: menuCategory.id,
      categoryTitle: menuCategory.title,
    }))
  })
}
