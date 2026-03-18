import {
  getAuth,
  signInWithPhoneNumber,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth'
import { firebaseApp } from './firebase.js'
import { createRecaptcha } from './utils.js'

export const auth = getAuth(firebaseApp)

export async function sendPhoneCode(phone) {
  const appVerifier = createRecaptcha()

  if (!appVerifier) {
    throw new Error('reCAPTCHA is not initialized')
  }

  const confirmationResult = await signInWithPhoneNumber(auth, phone, appVerifier)

  return confirmationResult
}

export async function handleLogout() {
  try {
    await signOut(auth)
    console.log('Пользователь вышел')
  } catch (error) {
    console.error('Ошибка при выходе:', error)
  }
}

const googleProvider = new GoogleAuthProvider()

export async function loginWithGoogle() {
  const result = await signInWithPopup(auth, googleProvider)
  return result.user
}

const facebookProvider = new FacebookAuthProvider()

export async function loginWithFacebook() {
  const result = await signInWithPopup(auth, facebookProvider)

  return result.user
}
