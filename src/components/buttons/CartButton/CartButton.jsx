import { forwardRef } from 'react'
import CartIcon from '../../../assets/icons/cart.svg?react'
import styles from './CartButton.module.css'

export const CartButton = forwardRef(({ onOpen, isOpen, ...props }, ref) => {
  return (
    <button
      onClick={onOpen}
      ref={ref}
      {...props}
      className={`${styles.cartButton} ${isOpen ? styles.cartButtonActive : ''}`}
    >
      <span className={styles.cartText}>Корзина</span>

      <CartIcon />
    </button>
  )
})
