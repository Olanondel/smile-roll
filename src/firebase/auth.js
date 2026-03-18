import { getAuth, signInWithPhoneNumber } from 'firebase/auth'
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
