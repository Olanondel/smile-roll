import { Section } from '../../../../components/Section/Section.jsx'
import { PAYMENT_METHOD_OPTIONS } from '../../constants.js'

export const PaymentSection = ({ form }) => {
  const { register, watch } = form
  const paymentMethod = watch('paymentMethod')

  return (
    <Section title="Способ оплаты" description="Алкогольные напитки оплачиваются только наличными">
      <div style={{ display: 'grid', gap: 12 }}>
        {PAYMENT_METHOD_OPTIONS.map((option) => (
          <label key={option.value} style={{ display: 'flex', gap: 10 }}>
            <input type="radio" value={option.value} {...register('paymentMethod')} />
            <span>{option.label}</span>
          </label>
        ))}
      </div>

      {paymentMethod === 'cash' ? (
        <div>
          <label>Подготовить сдачу с</label>
          <input placeholder="500" {...register('changeFrom')} />
        </div>
      ) : null}
    </Section>
  )
}
