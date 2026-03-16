import { configureStore } from '@reduxjs/toolkit'

import userReducer from './slices/userSlice'
import cartReducer from './slices/cartSlice'
import favoritesReducer from '../features/favorites/store/favoritesSlice.js'
import { setupLocalStorageSync } from './setupLocalStorageSync.js'

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
  },
})

setupLocalStorageSync(store)

export default store
