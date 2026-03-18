export const selectAuthRequestStatus = (store) => store.user.status

export const selectIsAuth = (state) => state.user.isAuth

export const selectUser = (state) => state.user.data
