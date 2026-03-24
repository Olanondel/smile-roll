import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react'
import styles from './Modal.module.css'

export const Modal = ({
  open,
  onClose,
  children,
  title,
  className = '',
  overlayClassName = '',
  closeOnOverlayClick = true,
  lockScroll = true,
}) => {
  const { refs, context } = useFloating({
    open,
    onOpenChange: (nextOpen) => {
      if (!nextOpen) {
        onClose?.()
      }
    },
  })

  const dismiss = useDismiss(context, {
    outsidePress: closeOnOverlayClick,
  })

  const role = useRole(context, {
    role: 'dialog',
  })

  const { getFloatingProps } = useInteractions([dismiss, role])

  if (!open) return null

  return (
    <FloatingPortal>
      <FloatingOverlay
        lockScroll={lockScroll}
        className={[styles.overlay, overlayClassName].filter(Boolean).join(' ')}
      >
        <div className={styles.viewport}>
          <FloatingFocusManager context={context} modal returnFocus>
            <div
              ref={refs.setFloating}
              className={[styles.modal, className].filter(Boolean).join(' ')}
              aria-label={title}
              {...getFloatingProps()}
            >
              {children}
            </div>
          </FloatingFocusManager>
        </div>
      </FloatingOverlay>
    </FloatingPortal>
  )
}
