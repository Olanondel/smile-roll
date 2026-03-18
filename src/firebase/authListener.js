import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './auth.js'

import { mapFirebaseUser } from './mapFirebaseUser'
import { login, logout, setSucceeded } from '../store/slices/userSlice.js'
let unsubscribeAuthListener = null

export const initAuthListener = (store) => {
  if (unsubscribeAuthListener) return unsubscribeAuthListener

  unsubscribeAuthListener = onAuthStateChanged(auth, (user) => {
    if (user) {
      store.dispatch(login(mapFirebaseUser(user)))
    } else {
      store.dispatch(logout())
    }

    store.dispatch(setSucceeded())
  })

  return unsubscribeAuthListener
}
