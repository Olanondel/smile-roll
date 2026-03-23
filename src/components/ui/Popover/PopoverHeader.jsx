import styles from './Popover.module.css'

export const PopoverHeader = ({ title, children, className = '' }) => {
  return (
    <div className={[styles.header, className].filter(Boolean).join(' ')}>
      {title ? <h3 className={styles.title}>{title}</h3> : null}
      {children}
    </div>
  )
}
