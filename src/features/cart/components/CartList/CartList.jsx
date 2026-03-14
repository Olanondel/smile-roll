import styles from './CartList.module.css'
import { CartItem } from '../CartItem/CartItem.jsx'
import { useCart } from '../../../../hooks/useCart.js'

export const CartList = () => {
  const { items, remove, increase, decrease } = useCart()

  if (!items.length) {
    return <p className={styles.empty}>Корзина пуста</p>
  }

  return (
    <div className={styles.list}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          image={item.image}
          title={item.title}
          weight={item.weight}
          price={item.price}
          quantity={item.quantity}
          onRemove={() => remove(item.id)}
          onIncrease={() => increase(item.id)}
          onDecrease={() => decrease(item.id)}
        />
      ))}
    </div>
  )
}
