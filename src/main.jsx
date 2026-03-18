import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './assets/style/reset.css'
import './assets/style/index.css'

import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store/index.js'

import { initAuthListener } from './firebase/authListener.js'

initAuthListener(store)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
