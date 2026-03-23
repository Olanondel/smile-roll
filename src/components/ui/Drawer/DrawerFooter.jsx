import styles from './Drawer.module.css'

export const DrawerFooter = ({ children, className = '' }) => {
  return <div className={[styles.footer, className].filter(Boolean).join(' ')}>{children}</div>
}
