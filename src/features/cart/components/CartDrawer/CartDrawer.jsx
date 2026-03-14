import { Drawer } from 'vaul'
import styles from './CartDrawer.module.css'
import { CartList } from '../CartList/CartList.jsx'

export const CartDrawer = ({ open, onClose }) => {
  return (
    <Drawer.Root
      open={open}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) onClose()
      }}
    >
      <Drawer.Portal>
        <Drawer.Overlay className={styles.overlay} />

        <Drawer.Content className={styles.content} aria-describedby={undefined}>
          <Drawer.Title className={styles.srOnly}>Корзина</Drawer.Title>

          <div className={styles.handle} />

          <div className={styles.header}>
            <h2 className={styles.heading}>Корзина</h2>

            <button type="button" className={styles.closeButton} onClick={onClose}>
              ×
            </button>
          </div>

          <div className={styles.body}>
            <CartList />
          </div>

          <div className={styles.footer}></div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
