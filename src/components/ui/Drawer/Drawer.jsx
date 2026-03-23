import { Drawer as VaulDrawer } from 'vaul'
import styles from './Drawer.module.css'

export const Drawer = ({
  open,
  onClose,
  children,
  className = '',
  overlayClassName = '',
  contentClassName = '',
  shouldScaleBackground = false,
  direction = 'bottom',
  showHandle = true,
  title,
}) => {
  return (
    <VaulDrawer.Root
      open={open}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) onClose?.()
      }}
      shouldScaleBackground={shouldScaleBackground}
      direction={direction}
    >
      <VaulDrawer.Portal>
        <VaulDrawer.Overlay
          className={[styles.overlay, overlayClassName].filter(Boolean).join(' ')}
        />

        <VaulDrawer.Content
          className={[styles.content, className, contentClassName].filter(Boolean).join(' ')}
          aria-describedby={undefined}
        >
          {title ? <VaulDrawer.Title className={styles.srOnly}>{title}</VaulDrawer.Title> : null}

          {showHandle ? <div className={styles.handle} /> : null}

          {children}
        </VaulDrawer.Content>
      </VaulDrawer.Portal>
    </VaulDrawer.Root>
  )
}
