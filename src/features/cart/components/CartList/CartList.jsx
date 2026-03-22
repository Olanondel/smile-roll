import styles from './CartList.module.css'
import { CartItem } from '../CartItem/CartItem.jsx'
import { useCart } from '@/hooks/useCart.js'
import { AnimatePresence } from 'framer-motion'
import { AnimatedListItem } from '@/components/ui/AnimatedListItem/AnimatedListItem.jsx'

export const CartList = () => {
  const { items, remove, increase, decrease } = useCart()

  if (!items.length) {
    return <p className={styles.empty}>Корзина пуста</p>
  }

  return (
    <div className={styles.list}>
      <AnimatePresence>
        {items.map((item) => (
          <AnimatedListItem key={item.id}>
            <CartItem
              image={item.image}
              title={item.title}
              weight={item.weight}
              price={item.price}
              quantity={item.quantity}
              onRemove={() => remove(item.id)}
              onIncrease={() => increase(item.id)}
              onDecrease={() => decrease(item.id)}
            />
          </AnimatedListItem>
        ))}
      </AnimatePresence>
    </div>
  )
}
