import styles from './CartItem.module.css'

export const CartItem = ({
  image,
  title,
  weight,
  price,
  quantity,
  onRemove,
  onDecrease,
  onIncrease,
}) => {
  return (
    <article className={styles.item}>
      <button
        type="button"
        className={styles.removeButton}
        onClick={onRemove}
        aria-label="Удалить товар"
      >
        ×
      </button>

      <div className={styles.imageWrapper}>
        <img className={styles.image} src={image} alt={title} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.weight}>Вес: {weight}</p>
      </div>

      <div className={styles.right}>
        <p className={styles.price}>{price} грн</p>

        <div className={styles.counter}>
          <button
            type="button"
            className={styles.counterButton}
            onClick={onDecrease}
            aria-label="Уменьшить количество"
          >
            −
          </button>

          <span className={styles.quantity}>{quantity}</span>

          <button
            type="button"
            className={styles.counterButton}
            onClick={onIncrease}
            aria-label="Увеличить количество"
          >
            +
          </button>
        </div>
      </div>
    </article>
  )
}
