import styles from './CartPanel.module.css'
import { PopoverHeader, PopoverBody, PopoverFooter } from '@/components/ui/Popover'
import { DrawerHeader, DrawerBody, DrawerFooter } from '@/components/ui/Drawer'
import { CartList } from '../CartList/CartList.jsx'
import MinOrderWarning from '../../../../components/shared/MinOrderWarning.jsx'
import CartFooter from '../CartFooter/CartFooter.jsx'

export const CartPanel = ({ variant = 'popover', onClose }) => {
  const Header = variant === 'drawer' ? DrawerHeader : PopoverHeader
  const Body = variant === 'drawer' ? DrawerBody : PopoverBody
  const Footer = variant === 'drawer' ? DrawerFooter : PopoverFooter

  return (
    <>
      <Header title="Корзина">
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Закрыть корзину"
        >
          ×
        </button>
      </Header>

      <Body className={styles.body}>
        <CartList />
        {variant === 'popover' ? <MinOrderWarning /> : null}
      </Body>

      <Footer>
        <CartFooter onCheckout={onClose} />
      </Footer>
    </>
  )
}
