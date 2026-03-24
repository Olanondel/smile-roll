import styles from './Modal.module.css'

export const ModalBody = ({ children, className = '' }) => {
  return <div className={[styles.body, className].filter(Boolean).join(' ')}>{children}</div>
}
