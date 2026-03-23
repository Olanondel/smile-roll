import styles from './CartPopoverTrigger.module.css'

import { CartPanel } from '../CartPanel/CartPanel.jsx'
import { Popover } from '@/components/ui/Popover'
import { CartButton } from '@/components/buttons/CartButton/CartButton.jsx'

export const CartPopoverTrigger = () => {
  return (
    <Popover
      placement="bottom-end"
      offsetValue={12}
      className={styles.popover}
      trigger={({ isOpen, ref, props }) => <CartButton ref={ref} isOpen={isOpen} {...props} />}
    >
      {({ setIsOpen }) => <CartPanel variant="popover" onClose={() => setIsOpen(false)} />}
    </Popover>
  )
}
