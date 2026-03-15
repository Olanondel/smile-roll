import styles from './CheckoutLayout.module.css'

export const CheckoutLayout = ({ children, sidebar }) => {
  return (
    <section>
      <h2 style={{ fontSize: '48px', lineHeight: '64px', marginBottom: '24px', fontWeight: 700 }}>
        Оформление заказа
      </h2>

      <div className={styles.layout}>
        <main className={styles.main}>{children}</main>
        <aside className={styles.sidebar}>{sidebar}</aside>
      </div>
    </section>
  )
}
