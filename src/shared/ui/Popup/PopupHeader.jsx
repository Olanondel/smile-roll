import styles from './Popup.module.css'

export const PopupHeader = ({ title, children, className = '' }) => {
  return (
    <div className={[styles.header, className].filter(Boolean).join(' ')}>
      {title ? <h2 className={styles.title}>{title}</h2> : null}
      {children}
    </div>
  )
}
