import { useState } from 'react'
import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingPortal,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react'

import styles from './CartPopoverTrigger.module.css'
import { CartButton } from '../../../../components/buttons/CartButton/CartButton.jsx'
import { CartList } from '../CartList/CartList.jsx'

export const CartPopoverTrigger = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'bottom-end',
    middleware: [offset(12), flip({ padding: 16 }), shift({ padding: 16 })],
    whileElementsMounted: autoUpdate,
  })

  const click = useClick(context)
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'dialog' })

  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role])

  return (
    <>
      <CartButton ref={refs.setReference} {...getReferenceProps()} />

      {isOpen && (
        <FloatingPortal>
          <FloatingFocusManager context={context} modal={false}>
            <div
              ref={refs?.setFloating}
              style={floatingStyles}
              className={styles.popover}
              {...getFloatingProps()}
            >
              <div className={styles.header}>
                <h3 className={styles.title}>Ваш заказ</h3>

                <button
                  type="button"
                  className={styles.closeButton}
                  onClick={() => setIsOpen(false)}
                  aria-label="Закрыть корзину"
                >
                  ×
                </button>
              </div>

              <div className={styles.body}>
                <CartList />
              </div>

              <div className={styles.footer}>footer</div>
            </div>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </>
  )
}
