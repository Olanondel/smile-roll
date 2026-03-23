import styles from './Popover.module.css'

export const PopoverFooter = ({ children, className = '' }) => {
  return <div className={[styles.footer, className].filter(Boolean).join(' ')}>{children}</div>
}
