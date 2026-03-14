import { useRef } from 'react'

export default function CodeInput({ length = 6, value, onChange }) {
  const inputs = useRef([])

  const handleChange = (e, i) => {
    const val = e.target.value
    if (!/^\d*$/.test(val)) return // только цифры
    const newValue = value.split('')
    newValue[i] = val
    onChange(newValue.join(''))

    // авто переход на следующий input
    if (val && i < length - 1) inputs.current[i + 1].focus()
  }

  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={(el) => (inputs.current[i] = el)}
          value={value[i] || ''}
          onChange={(e) => handleChange(e, i)}
          style={{ width: '40px', textAlign: 'center', fontSize: '20px' }}
        />
      ))}
    </div>
  )
}
