import { useEffect } from 'react'
import { createRecaptcha } from '../firebase/utils.js'

const Recaptcha = () => {
  useEffect(() => {
    createRecaptcha('recaptcha-container')

    return () => {
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear()
        window.recaptchaVerifier = null
      }
    }
  }, [])

  return <div id="recaptcha-container" />
}

export default Recaptcha
