import { allProducts } from '../../../mock/product.js'
import { createSelector } from '@reduxjs/toolkit'

export const selectFavoriteIds = (state) => state.favorites.items

export const selectFavoriteProducts = createSelector([selectFavoriteIds], (favoriteIds) => {
  const favoriteSet = new Set(favoriteIds)

  return allProducts.filter((product) => favoriteSet.has(product.id))
})
