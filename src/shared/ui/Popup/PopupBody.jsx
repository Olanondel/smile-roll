import styles from './Popup.module.css'

export const PopupBody = ({ children, className = '' }) => {
  return <div className={[styles.body, className].filter(Boolean).join(' ')}>{children}</div>
}
