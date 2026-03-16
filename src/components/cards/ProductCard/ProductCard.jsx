import styles from './ProductCard.module.css'

import HeartIcon from '../../../assets/icons/heart.svg?react'

export const ProductCard = ({
  image,
  title,
  weight,
  description,
  price,
  isFavourite,
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
            className={[styles.favoriteButton, isFavourite && styles.favoriteButtonActive].join(
              ' ',
            )}
            onClick={onFavoriteClick}
            aria-label="Добавить в избранное"
          >
            <HeartIcon className={styles.heartIcon} />
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
