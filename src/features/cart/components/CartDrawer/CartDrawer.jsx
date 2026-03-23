import { Drawer } from '@/components/ui/Drawer'
import { CartPanel } from '../CartPanel/CartPanel.jsx'

export const CartDrawer = ({ open, onClose }) => {
  return (
    <Drawer open={open} onClose={onClose} title="Корзина">
      <CartPanel variant="drawer" onClose={onClose} />
    </Drawer>
  )
}
