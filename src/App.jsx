import AppRouter from './router/AppRouter.jsx'
import Header from './components/Header/Header.jsx'

const App = () => {
  return (
    <div style={{ paddingTop: 16 }}>
      <Header styles={{ margin: '0 auto 32px' }} />

      <AppRouter />
    </div>
  )
}

export default App
