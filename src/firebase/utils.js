import { RecaptchaVerifier } from 'firebase/auth'
import { auth } from './auth.js'

export const createRecaptcha = (id, size = 'normal') => {
  if (!window.recaptchaVerifier) {
    const submitButton = document.getElementById(id)

    if (!submitButton) {
      throw new Error(`No document with id ${id}`)
    }

    window.recaptchaVerifier = new RecaptchaVerifier(auth, id, {
      size,
      callback: (response) => {
        console.log(`recaptcha verifier ${response}`)
      },
    })
  }

  return window.recaptchaVerifier
}
