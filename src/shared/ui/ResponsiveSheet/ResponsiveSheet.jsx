import { Modal, ModalBody, ModalHeader, ModalFooter } from '../Modal'
import { useMediaQuery } from '@/hooks/useMediaQuery.js'
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader } from '@/components/ui/Drawer/index.js'

export const ResponsiveSheet = ({
  open,
  onClose,
  title,
  children,
  breakpoint = 768,
  showCloseButton = true,
  footer,
}) => {
  const isMobile = useMediaQuery(breakpoint)

  const closeButton = showCloseButton ? (
    <button type="button" onClick={onClose} aria-label="Закрыть">
      ×
    </button>
  ) : null

  if (isMobile) {
    return (
      <Drawer open={open} onClose={onClose} title={title}>
        <DrawerHeader title={title}>{closeButton}</DrawerHeader>

        <DrawerBody>{children}</DrawerBody>

        {footer ? <DrawerFooter>{footer}</DrawerFooter> : null}
      </Drawer>
    )
  }

  return (
    <Modal open={open} onClose={onClose} title={title}>
      {title && <ModalHeader title={title}>{closeButton}</ModalHeader>}

      <ModalBody>{children}</ModalBody>

      {footer ? <ModalFooter>{footer}</ModalFooter> : null}
    </Modal>
  )
}
