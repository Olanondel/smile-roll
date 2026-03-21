import AppRouter from './router/AppRouter.jsx'
import Loader from './components/Loader/Loader.jsx'
import { useSelector } from 'react-redux'
import { selectAuthRequestStatus } from './features/auth/selectors.js'
import { STATUS } from './constants/status.js'
import { useState } from 'react'

const App = () => {
  const [canShow, setCanShow] = useState(false)
  const isAuth = useSelector((state) => state.user.isAuth)

  setTimeout(() => {
    setCanShow(true)
  }, 1500)

  const authRequestStatus = useSelector(selectAuthRequestStatus)

  const isAuthChecked = authRequestStatus === STATUS.SUCCEEDED

  if (!isAuthChecked || !canShow) {
    return <Loader />
  }

  return <AppRouter isAuth={isAuth} />
}

export default App
