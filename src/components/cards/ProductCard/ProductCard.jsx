import styles from './ProductCard.module.css'

export const ProductCard = ({
  image,
  title,
  weight,
  description,
  price,
  onFavoriteClick,
  onAddClick,
}) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={image} alt={title} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        <p className={styles.weight}>
          Вес: <span>{weight}</span>
        </p>

        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.footer}>
        <div className={styles.price}>
          {price} <span>грн</span>
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.favoriteButton}
            onClick={onFavoriteClick}
            aria-label="Добавить в избранное"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 20.5L10.55 19.2C5.4 14.55 2 11.5 2 7.75C2 4.7 4.42 2.5 7.5 2.5C9.24 2.5 10.91 3.31 12 4.59C13.09 3.31 14.76 2.5 16.5 2.5C19.58 2.5 22 4.7 22 7.75C22 11.5 18.6 14.55 13.45 19.21L12 20.5Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            className={styles.addButton}
            onClick={onAddClick}
            aria-label="Добавить в корзину"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  )
}
