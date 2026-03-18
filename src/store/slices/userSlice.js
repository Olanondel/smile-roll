import { createSlice } from '@reduxjs/toolkit'
import { STATUS } from '../../constants/status.js'

const initialState = {
  user: null,
  isAuth: null,
  status: STATUS.IDLE,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // логин — просто сохраняем данные и ставим isAuth в true
    login: (state, action) => {
      state.data = action.payload
      state.isAuth = true
      state.status = STATUS.SUCCEEDED
    },

    // logout — очищаем данные
    logout: (state) => {
      state.data = null
      state.isAuth = false
      state.status = STATUS.IDLE
    },

    setSucceeded: (state) => {
      state.status = STATUS.SUCCEEDED
    },

    setLoading: (state) => {
      state.status = STATUS.LOADING
    },

    setFailed: (state) => {
      state.status = STATUS.FAILED
    },
  },
})

export const { login, logout, setLoading, setFailed, setSucceeded } = userSlice.actions

export default userSlice.reducer
