import { Link, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../../../routes/routes.js'
import { useCart } from '../../../../hooks/useCart.js'
import styles from './CartFooter.module.css'

const CartFooter = ({ onCheckout }) => {
  const { total, isMinOrderReached } = useCart()
  const navigate = useNavigate()

  const handleCheckoutClick = () => {
    if (!isMinOrderReached) return

    onCheckout()

    navigate(ROUTES.CHECKOUT)
  }

  return (
    <div
      className={styles.footer}
      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
    >
      <div>
        <div>Итого:</div>
        <div style={{ fontSize: 25 }}>{total} грн</div>
      </div>

      <button
        type="button"
        disabled={!isMinOrderReached}
        className="button"
        onClick={handleCheckoutClick}
      >
        Оформить заказ
      </button>
    </div>
  )
}

export default CartFooter
