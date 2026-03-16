import { saveToLocalStorage } from '../utils/storage.js'

export const setupLocalStorageSync = (store) => {
  let prevCartItems = store.getState().cart.items
  let prevFavoriteItems = store.getState().favorites.items

  store.subscribe(() => {
    const state = store.getState()

    if (state.cart.items !== prevCartItems) {
      prevCartItems = state.cart.items
      saveToLocalStorage('cart', state.cart.items)
    }

    if (state.favorites.items !== prevFavoriteItems) {
      prevFavoriteItems = state.favorites.items
      saveToLocalStorage('favorites', state.favorites.items)
    }
  })
}
