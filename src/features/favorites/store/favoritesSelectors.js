import { createSelector } from '@reduxjs/toolkit'

import { allProducts } from '@/shared/config/menu-categories.js'

export const selectFavoriteIds = (state) => state.favorites.items

export const selectFavoriteProducts = createSelector([selectFavoriteIds], (favoriteIds) => {
  const favoriteSet = new Set(favoriteIds)

  return allProducts.filter((product) => favoriteSet.has(product.id))
})
