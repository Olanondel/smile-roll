// src/store/slices/userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { STATUS } from '../../constants/status.js';

const userFromStorage = JSON.parse(localStorage.getItem('user')) || {
  isAuth: false,
  data: null,
};

const initialState = {
  user: userFromStorage.data,
  isAuth: userFromStorage.isAuth,
  status: STATUS.IDLE,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // логин — просто сохраняем данные и ставим isAuth в true
    login: (state, action) => {
      state.data = action.payload;
      state.isAuth = true;
      state.status = STATUS.SUCCEEDED;
    },

    // logout — очищаем данные
    logout: (state) => {
      state.data = null;
      state.isAuth = false;
      state.status = STATUS.IDLE;
    },

    // можно менять статус загрузки
    setLoading: (state) => {
      state.status = STATUS.LOADING;
    },

    setFailed: (state) => {
      state.status = STATUS.FAILED;
    },
  },
});

export const {
  login, logout, setLoading, setFailed,
} = userSlice.actions;

export default userSlice.reducer;
