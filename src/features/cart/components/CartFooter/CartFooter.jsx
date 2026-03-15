import { Link } from 'react-router-dom'
import { ROUTES } from '../../../../routes/routes.js'
import { useCart } from '../../../../hooks/useCart.js'
import styles from './CartFooter.module.css'

const CartFooter = ({ onCheckout }) => {
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

      <Link to={ROUTES.CHECKOUT} type="button" className="button" onClick={onCheckout}>
        Оформить заказ
      </Link>
    </div>
  )
}

export default CartFooter
