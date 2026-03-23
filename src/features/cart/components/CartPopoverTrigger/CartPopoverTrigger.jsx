import styles from './CartPopoverTrigger.module.css'
import { Popover, PopoverHeader, PopoverBody, PopoverFooter } from '@/components/ui/Popover'
import { CartButton } from '@/components/buttons/CartButton/CartButton.jsx'
import { CartList } from '../CartList/CartList.jsx'
import MinOrderWarning from '@/components/shared/MinOrderWarning.jsx'
import CartFooter from '../CartFooter/CartFooter.jsx'

export const CartPopoverTrigger = () => {
  return (
    <Popover
      placement="bottom-end"
      offsetValue={12}
      className={styles.popover}
      trigger={({ isOpen, ref, props }) => <CartButton ref={ref} isOpen={isOpen} {...props} />}
    >
      {({ setIsOpen }) => (
        <>
          <PopoverHeader title="Ваш заказ" className={styles.header}>
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
              aria-label="Закрыть корзину"
            >
              ×
            </button>
          </PopoverHeader>

          <PopoverBody className={styles.body}>
            <CartList />
            <MinOrderWarning />
          </PopoverBody>

          <PopoverFooter>
            <CartFooter onCheckout={() => setIsOpen(false)} />
          </PopoverFooter>
        </>
      )}
    </Popover>
  )
}
