export const getFirebaseAuthErrorMessage = (error) => {
  switch (error.code) {
    case 'auth/invalid-verification-code':
      return 'Неверный код подтверждения'

    case 'auth/code-expired':
      return 'Срок действия кода истёк. Запросите новый код'

    case 'auth/too-many-requests':
      return 'Слишком много попыток. Попробуйте позже'

    case 'auth/invalid-phone-number':
      return 'Неверный номер телефона'

    case 'auth/network-request-failed':
      return 'Проблема с интернет-соединением'

    case 'auth/operation-not-allowed':
      return 'Вход по телефону не включён в Firebase'

    default:
      return 'Произошла ошибка. Попробуйте ещё раз'
  }
}
