import styles from './Drawer.module.css'

export const DrawerHeader = ({ title, children, className = '' }) => {
  return (
    <div className={[styles.header, className].filter(Boolean).join(' ')}>
      {title ? <h2 className={styles.heading}>{title}</h2> : null}
      {children}
    </div>
  )
}
