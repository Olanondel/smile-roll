import { useDispatch, useSelector } from 'react-redux'
import { selectFavoritesIds } from '../store/favoritesSelectors.js'
import { clearFavorites, toggleFavorite } from '../store/favoritesSlice.js'

export const useFavorites = () => {
  const items = useSelector(selectFavoritesIds)
  const dispatch = useDispatch()

  const toggle = (productId) => dispatch(toggleFavorite(productId))
  const clear = () => dispatch(clearFavorites())
  const favoriteSet = new Set(items)

  return { toggle, clear, favoriteSet, items }
}
