import { configureStore } from '@reduxjs/toolkit'
import { setupLocalStorageSync } from './setupLocalStorageSync.js'

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

setupLocalStorageSync(store)

export default store
