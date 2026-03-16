import styles from './FavoritesEmptyState.module.css'

function HeartIcon({ className }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false" className={className}>
      <path
        d="M32 56c-.8 0-1.6-.3-2.2-.9L11.4 37.8a13.8 13.8 0 0 1 0-19.8 13.9 13.9 0 0 1 19.7 0l.9 1 .9-1a13.9 13.9 0 0 1 19.7 0 13.8 13.8 0 0 1 0 19.8L34.2 55.1c-.6.6-1.4.9-2.2.9Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function FavoritesEmptyState({
  title = 'Вы еще ничего не добавили в избранное',
  description = 'Переходите в интересующую вас категорию и отмечайте понравившиеся',
}) {
  return (
    <section className={styles.root} aria-labelledby="favorites-empty-title">
      <div className={styles.illustration} aria-hidden="true">
        <div className={styles.blob} />

        <HeartIcon className={`${styles.heart} ${styles.heartSmallLeft}`} />
        <HeartIcon className={`${styles.heart} ${styles.heartSmallTop}`} />
        <HeartIcon className={`${styles.heart} ${styles.heartLarge}`} />
      </div>

      <div className={styles.content}>
        <h2 id="favorites-empty-title" className={styles.title}>
          {title}
        </h2>

        <p className={styles.description}>{description}</p>
      </div>
    </section>
  )
}
