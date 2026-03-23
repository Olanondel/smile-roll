import styles from './Drawer.module.css'

export const DrawerBody = ({ children, className = '' }) => {
  return <div className={[styles.body, className].filter(Boolean).join(' ')}>{children}</div>
}
