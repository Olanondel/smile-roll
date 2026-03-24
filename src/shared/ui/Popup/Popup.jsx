import { useState } from 'react'
import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react'

import styles from './Popup.module.css'

export const Popup = ({
  trigger,
  children,
  placement = 'bottom',
  offsetValue = 12,
  className = '',
  overlayClassName = '',
  initialOpen = false,
  open: controlledOpen,
  onOpenChange,
  closeOnOutsideClick = true,
  lockScroll = true,
  modal = true,
}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen)

  const isControlled = controlledOpen !== undefined
  const isOpen = isControlled ? controlledOpen : uncontrolledOpen

  const setIsOpen = (value) => {
    if (!isControlled) {
      setUncontrolledOpen(value)
    }

    onOpenChange?.(value)
  }

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    middleware: [offset(offsetValue), flip({ padding: 16 }), shift({ padding: 16 })],
    whileElementsMounted: autoUpdate,
  })

  const click = useClick(context)
  const dismiss = useDismiss(context, {
    outsidePress: closeOnOutsideClick,
  })
  const role = useRole(context, { role: 'dialog' })

  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role])

  return (
    <>
      {trigger({
        isOpen,
        setIsOpen,
        ref: refs.setReference,
        props: getReferenceProps(),
      })}

      {isOpen && (
        <FloatingPortal>
          <FloatingOverlay
            lockScroll={lockScroll}
            className={[styles.overlay, overlayClassName].filter(Boolean).join(' ')}
          >
            <FloatingFocusManager context={context} modal={modal} returnFocus>
              <div className={styles.viewport}>
                <div
                  ref={refs.setFloating}
                  style={floatingStyles}
                  className={[styles.popup, className].filter(Boolean).join(' ')}
                  {...getFloatingProps()}
                >
                  {typeof children === 'function' ? children({ isOpen, setIsOpen }) : children}
                </div>
              </div>
            </FloatingFocusManager>
          </FloatingOverlay>
        </FloatingPortal>
      )}
    </>
  )
}
