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

import styles from './Popover.module.css'

export const Popover = ({
  trigger,
  children,
  placement = 'bottom-end',
  offsetValue = 12,
  className = '',
  closeOnOutsideClick = true,
  initialOpen = false,
  open: controlledOpen,
  onOpenChange,
  modal = false,
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
          <FloatingFocusManager context={context} modal={modal}>
            <div
              ref={refs.setFloating}
              style={floatingStyles}
              className={[styles.popover, className].filter(Boolean).join(' ')}
              {...getFloatingProps()}
            >
              {typeof children === 'function' ? children({ isOpen, setIsOpen }) : children}
            </div>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </>
  )
}
