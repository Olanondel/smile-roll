import { createSlice } from '@reduxjs/toolkit'

const initialState = { items: [] }

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      if (state.items.includes(action.payload)) {
        state.items = state.items.filter((itemId) => itemId !== action.payload)
        return
      }

      state.items = [...state.items, action.payload]
    },

    clearFavorites(state) {
      state.items = []
    },
  },
})

export const { toggleFavorite, clearFavorites } = favoritesSlice.actions

export default favoritesSlice.reducer
