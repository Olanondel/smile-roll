import { Section } from '../../../../components/Section/Section.jsx'

const DELIVERY_DAY_OPTIONS = [
  { value: 'today', label: 'Сегодня' },
  { value: 'tomorrow', label: 'Завтра' },
]

const DELIVERY_TIME_OPTIONS = [
  { value: 'nearest', label: 'Ближайшее время' },
  { value: '12:00-13:00', label: '12:00 – 13:00' },
  { value: '13:00-14:00', label: '13:00 – 14:00' },
  { value: '14:00-15:00', label: '14:00 – 15:00' },
]

export const DeliveryTimeSection = ({ form }) => {
  const {
    register,
    formState: { errors },
  } = form

  return (
    <Section title="Время доставки">
      <div style={{ display: 'grid', gap: 20 }}>
        <div style={{ display: 'grid', gap: 10 }}>
          <div style={{ fontWeight: 500 }}>День</div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: 12,
            }}
          >
            {DELIVERY_DAY_OPTIONS.map((option) => (
              <label
                key={option.value}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '14px 16px',
                  border: '1px solid #e7e7e7',
                  borderRadius: 14,
                  cursor: 'pointer',
                }}
              >
                <input type="radio" value={option.value} {...register('deliveryDay')} />
                <span>{option.label}</span>
              </label>
            ))}
          </div>

          {errors.deliveryDay ? (
            <span style={{ color: 'red', fontSize: 14 }}>{errors.deliveryDay.message}</span>
          ) : null}
        </div>

        <div style={{ display: 'grid', gap: 10 }}>
          <label htmlFor="deliveryTime" style={{ fontWeight: 500 }}>
            Время
          </label>

          <select
            id="deliveryTime"
            {...register('deliveryTime')}
            style={{
              height: 48,
              borderRadius: 14,
              border: '1px solid #e7e7e7',
              padding: '0 14px',
              background: '#fff',
            }}
          >
            {DELIVERY_TIME_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {errors.deliveryTime ? (
            <span style={{ color: 'red', fontSize: 14 }}>{errors.deliveryTime.message}</span>
          ) : null}
        </div>
      </div>
    </Section>
  )
}
