import styles from './Modal.module.css'

export const ModalFooter = ({ children, className = '' }) => {
  return (
    <div className={[styles.footer, className].filter(Boolean).join(' ')}>
      {children}
    </div>
  )
}