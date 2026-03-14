import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import CodeInput from '../../components/CodeInput'
import { useDispatch } from 'react-redux'
import { login } from '../../store/slices/userSlice.js'

function CodePage() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const phone = state?.phone

  const [code, setCode] = useState('')
  const [timer, setTimer] = useState(30)
  const [loading, setLoading] = useState(false)

  // Таймер повторной отправки
  useEffect(() => {
    if (timer <= 0) return
    const interval = setInterval(() => setTimer((t) => t - 1), 1000)
    return () => clearInterval(interval)
  }, [timer])

  const handleVerify = async () => {
    if (code.length < 6) return alert('Enter full code')

    setLoading(true)
    try {
      // эмуляция проверки кода
      await new Promise((r) => setTimeout(r, 1000))
      dispatch(
        login({
          name: 'John Doe',
          phone: '+123456789',
          email: 'john@example.com',
        }),
      )

      localStorage.setItem(
        'user',
        JSON.stringify({
          name: 'John Doe',
          phone: '+123456789',
          email: 'john@example.com',
          isAuth: true,
        }),
      )

      // редирект после успешной авторизации
      navigate('/')
    } finally {
      setLoading(false)
    }
  }

  const resendCode = () => {
    console.log('Resend code to', phone)
    setTimer(30)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        width: '300px',
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h2 style={{ margin: 0, fontSize: '18px', color: '#333', textAlign: 'center' }}>
        Enter code sent to {phone}
      </h2>

      <CodeInput
        value={code}
        onChange={setCode}
        style={{
          padding: '10px',
          fontSize: '16px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          width: '100%',
          boxSizing: 'border-box',
          textAlign: 'center',
        }}
      />

      <button
        onClick={handleVerify}
        disabled={loading}
        style={{
          padding: '10px',
          fontSize: '16px',
          borderRadius: '4px',
          border: 'none',
          backgroundColor: loading ? '#999' : '#28a745',
          color: '#fff',
          cursor: loading ? 'not-allowed' : 'pointer',
          width: '100%',
        }}
      >
        {loading ? 'Verifying...' : 'Verify'}
      </button>

      <div style={{ marginTop: '10px' }}>
        {timer > 0 ? (
          <span style={{ color: '#555' }}>Resend code in {timer}s</span>
        ) : (
          <button
            onClick={resendCode}
            style={{
              padding: '6px 12px',
              fontSize: '14px',
              borderRadius: '4px',
              border: '1px solid #007bff',
              backgroundColor: '#fff',
              color: '#007bff',
              cursor: 'pointer',
            }}
          >
            Resend code
          </button>
        )}
      </div>
    </div>
  )
}

export default CodePage
