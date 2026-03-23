import styles from './CartDrawer.module.css'
import { Drawer, DrawerHeader, DrawerBody, DrawerFooter } from '@/components/ui/Drawer'
import { CartList } from '../CartList/CartList.jsx'
import CartFooter from '../CartFooter/CartFooter.jsx'

export const CartDrawer = ({ open, onClose }) => {
  return (
    <Drawer open={open} onClose={onClose} title="Корзина">
      <DrawerHeader title="Корзина">
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Закрыть корзину"
        >
          ×
        </button>
      </DrawerHeader>

      <DrawerBody>
        <CartList />
      </DrawerBody>

      <DrawerFooter>
        <CartFooter onCheckout={onClose} />
      </DrawerFooter>
    </Drawer>
  )
}
