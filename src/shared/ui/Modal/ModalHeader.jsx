import styles from './Modal.module.css'

export const ModalHeader = ({ title, children, className = '' }) => {
  return (
    <div className={[styles.header, className].filter(Boolean).join(' ')}>
      {title ? <h2 className={styles.title}>{title}</h2> : null}
      {children}
    </div>
  )
}
