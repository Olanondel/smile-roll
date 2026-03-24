import styles from './Popup.module.css'

export const PopupFooter = ({ children, className = '' }) => {
  return <div className={[styles.footer, className].filter(Boolean).join(' ')}>{children}</div>
}
