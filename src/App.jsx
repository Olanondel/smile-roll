import AppRouter from './router/AppRouter.jsx'
import Header from './components/Header/Header.jsx'
import Loader from './components/Loader/Loader.jsx'
import { useSelector } from 'react-redux'
import { selectAuthRequestStatus } from './features/auth/selectors.js'
import { STATUS } from './constants/status.js'
import { useState } from 'react'

const App = () => {
  const [canShow, setCanShow] = useState(false)

  setTimeout(() => {
    setCanShow(true)
  }, 2000)

  const authRequestStatus = useSelector(selectAuthRequestStatus)

  const isAuthChecked = authRequestStatus === STATUS.SUCCEEDED

  if (!isAuthChecked && !canShow) {
    return <Loader />
  }

  return (
    <div style={{ paddingTop: 16 }}>
      <Header styles={{ margin: '0 auto 32px' }} />

      <AppRouter />
    </div>
  )
}

export default App
