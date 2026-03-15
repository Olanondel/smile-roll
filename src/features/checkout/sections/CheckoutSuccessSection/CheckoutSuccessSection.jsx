import styles from './CheckoutSuccessSection.module.css'

const CheckoutSuccessSection = ({
  address,
  time,
  paymentMethod,
  total,
  changeFrom,
  peopleCount,
  note,
  orderId,
}) => {
  const rows = [
    { label: 'Адрес', value: address },
    { label: 'Время', value: time },
    { label: 'Способ оплаты', value: paymentMethod },
    { label: 'Сумма к оплате', value: total },
    { label: 'Сдача с', value: changeFrom },
    { label: 'Кол-во человек', value: peopleCount },
  ]

  return (
    <div className={styles.wrapper}>
      <div style={{ fontSize: 34, maxWidth: 336, fontWeight: 700 }}>
        Спасибо,
        <br /> ваш заказ
        <span style={{ display: 'inline-block', padding: 8, color: 'orange' }}>{orderId}</span>{' '}
        успешно оформлен
      </div>

      <section className={styles.section}>
        <h2 className={styles.title}>Информация о доставке</h2>

        <div className={styles.card}>
          <div className={styles.list}>
            {rows
              .filter((row) => row.value)
              .map((row) => (
                <div key={row.label} className={styles.row}>
                  <span className={styles.label}>{row.label}:</span>
                  <span className={styles.dots} />
                  <span className={styles.value}>{row.value}</span>
                </div>
              ))}
          </div>

          {note ? (
            <div className={styles.noteBlock}>
              <div className={styles.noteLabel}>Примечание:</div>
              <div className={styles.noteText}>{note}</div>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  )
}

export default CheckoutSuccessSection
