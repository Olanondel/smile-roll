import React from 'react'
import styles from './CheckoutFooter.module.css'
import { useCart } from '../../../../hooks/useCart.js'

const CheckoutFooter = () => {
  const { total } = useCart()

  return (
    <div
      className={styles.footer}
      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
    >
      <div>
        <div>Итого:</div>
        <div style={{ fontSize: 25 }}>{total} грн</div>
      </div>

      <button type="submit" className="button">
        Оформить заказ
      </button>
    </div>
  )
}

export default CheckoutFooter
