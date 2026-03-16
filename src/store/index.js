import { configureStore } from '@reduxjs/toolkit'

import userReducer from './slices/userSlice'
import cartReducer from './slices/cartSlice'
import favoritesReducer from '../features/favorites/store/favoritesSlice.js'

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
  },
})

// TODO
store.subscribe(() => {
  const state = store.getState()

  localStorage.setItem('cart', JSON.stringify(state.cart.items))
})

export default store
