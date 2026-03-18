import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { sendPhoneCode } from '../../firebase/auth.js'
import { setConfirmationResultRef } from '../../features/auth/phoneAuthSession.js'
import Recaptcha from '../../components/Recaptcha.jsx'

function PhonePage() {
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSendCode = async (e) => {
    e.preventDefault()

    if (!phone) return alert('Enter phone')

    setLoading(true)
    try {
      const confirmationResult = await sendPhoneCode(phone)

      setConfirmationResultRef(confirmationResult)

      navigate('/verify', { state: { phone } })
    } finally {
      setLoading(false)
    }
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
      <h2 style={{ margin: 0, fontSize: '18px', color: '#333' }}>Enter your phone</h2>

      <form method="POST" onSubmit={handleSendCode}>
        <input
          type="tel"
          name="phone"
          placeholder="+49 123 4567890"
          autoComplete="tel"
          inputMode="tel"
          pattern="^\+[1-9]\d{7,14}$"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          maxLength={16}
          aria-describedby="phone-hint"
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            width: '100%',
            boxSizing: 'border-box',
          }}
        />

        <button
          disabled={loading}
          id="sign-in-button"
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: loading ? '#999' : '#007bff',
            color: '#fff',
            cursor: loading ? 'not-allowed' : 'pointer',
            width: '100%',
          }}
        >
          {loading ? 'Sending...' : 'Send code'}
        </button>
      </form>

      <Recaptcha />
    </div>
  )
}

export default PhonePage
