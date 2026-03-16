import styles from './OrdersEmptyState.module.css'

function ClipboardIcon({ className }) {
  return (
    <svg viewBox="0 0 160 160" aria-hidden="true" focusable="false" className={className}>
      <ellipse cx="78" cy="88" rx="60" ry="42" fill="#ececec" />

      <circle cx="138" cy="38" r="8" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="28" cy="24" r="2.5" fill="currentColor" />
      <circle cx="18" cy="18" r="2.5" fill="currentColor" />
      <circle cx="22" cy="34" r="2.5" fill="currentColor" />
      <circle cx="10" cy="28" r="2.5" fill="currentColor" />

      <rect
        x="54"
        y="26"
        width="44"
        height="22"
        rx="8"
        fill="#ff6a36"
        stroke="currentColor"
        strokeWidth="4"
      />

      <rect
        x="44"
        y="36"
        width="70"
        height="92"
        rx="12"
        fill="#fff"
        stroke="currentColor"
        strokeWidth="4"
      />

      <line
        x1="58"
        y1="64"
        x2="100"
        y2="64"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="58"
        y1="86"
        x2="100"
        y2="86"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="58"
        y1="108"
        x2="100"
        y2="108"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function OrdersEmptyState({
  title = 'У вас нет заказов',
  description = 'Переходите в интересующую вас категорию и сделайте свой первый заказ',
}) {
  return (
    <section className={styles.root} aria-labelledby="orders-empty-title">
      <div className={styles.illustration} aria-hidden="true">
        <ClipboardIcon className={styles.icon} />
      </div>

      <div className={styles.content}>
        <h2 id="orders-empty-title" className={styles.title}>
          {title}
        </h2>

        <p className={styles.description}>{description}</p>
      </div>
    </section>
  )
}
